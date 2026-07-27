#!/usr/bin/env bash
set -euo pipefail

# Build pacs008 with Static Site Generator (SSG v0.0.48)
echo "Preparing build content..."

# Regenerate locale content
node scripts/generate-locales.mjs

# Create a temporary copy of docs directory for ssg compilation
rm -rf docs_build
mkdir -p docs_build
cp -R docs/* docs_build/

# Strip non-content files or subdirectories from content directory
rm -rf docs_build/.vitepress
rm -rf docs_build/public
find docs_build -name 'README.md' -delete

# Patch ssg frontmatter on docs_build
node scripts/patch-ssg-frontmatter.mjs docs_build

# Run ssg static site generator
echo "Compiling site with ssg..."
ssg -n=pacs008 -c=docs_build -t=_layouts -o=public -f=config.toml

# Copy static assets to output directory
if [ -d docs/public ]; then
  cp -R docs/public/* public/ 2>/dev/null || true
fi

# Clean up temporary build directory
rm -rf docs_build

echo "Site successfully built with ssg."
