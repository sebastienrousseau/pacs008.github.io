#!/usr/bin/env bash
set -euo pipefail

# Build pacs008 with Static Site Generator (SSG v0.0.48)
SERVE=0
[[ "${1:-}" == "--serve" ]] && SERVE=1

echo "Preparing build content..."

# Synchronize canonical manifest facts
node scripts/generate-manifest-facts.mjs

# Generate the Trust Centre from the canonical registries
node scripts/generate-trust-page.mjs

# Regenerate locale content
node scripts/generate-locales.mjs

# Create a temporary copy of docs directory for ssg compilation
rm -rf docs_build
mkdir -p docs_build
cp -R docs/* docs_build/

# Strip non-content files or subdirectories from content directory
rm -rf docs_build/public
find docs_build -name 'README.md' -delete

# Patch ssg frontmatter on docs_build
node scripts/patch-ssg-frontmatter.mjs docs_build

# Run ssg static site generator
echo "Compiling site with ssg..."
ssg -n=pacs008 -c=docs_build -t=_layouts -o=public -f=config.toml

# Repair escaped head metas & body HTML fragments emitted by ssg
node scripts/fix-ssg-html.mjs

# Rebuild sitemap.xml from the pages that actually shipped.
# ssg's own sitemap depends on cache state from a previous build and comes out
# empty on a cold build, which is what CI and every deploy do.
node scripts/generate-sitemap.mjs

# Copy static assets to output directory
if [ -d static ]; then
  cp -R static/* public/ 2>/dev/null || true
fi

# Clean up temporary build directory
rm -rf docs_build

echo "Site successfully built with ssg."

if (( SERVE )); then
  echo "Serving site on http://127.0.0.1:8000 ..."
  exec python3 -m http.server 8000 --directory public --bind 127.0.0.1
fi
