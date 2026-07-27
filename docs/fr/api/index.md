---
title: "Référence API pacs008 | pacs008"
description: Prise en charge REST et CLI dans pacs008.
lang: fr-FR
lastUpdated: true
image: /logo.webp
---

# Référence API pacs008

Le projet fournit à la fois une API REST et une CLI pour les flux de traitement des messages de paiement.

## Notes de mise en œuvre

- Utiliser la génération synchrone pour les contrôles opérateur et les petits lots lorsque l'appelant attend immédiatement un fichier XML.
- Utiliser la génération asynchrone lorsque les fichiers d'entrée sont volumineux, que les traitements doivent être rejouables ou que la génération s'insère dans un moteur d'orchestration plus large.
- Conserver à la fois la charge utile source et le rapport de validation afin que les équipes support puissent reproduire la sortie XML lors d'un incident.
- Verrouiller les chemins des modèles et des XSD dans la configuration de déploiement afin d'éviter les mises à niveau silencieuses.

## Installation

Installez le paquet depuis PyPI. Python 3.9.2 ou version supérieure est requis.

```bash
python -m pip install pacs008
```

---

## REST API

Démarrez le serveur FastAPI intégré pour exposer des points de terminaison HTTP pour la validation et la génération.

### Démarrer le serveur

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Points de terminaison

<div class="api-endpoints-table" tabindex="0" aria-label="Points de terminaison">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">Vérification de l&#39;état — retourne le statut du service</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">Valider les données de paiement par rapport au schéma sans générer de XML</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">Générer du XML de façon synchrone et retourner le fichier</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">Soumettre un job de génération asynchrone</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Interroger le statut du job par identifiant</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Télécharger le XML généré une fois le job terminé</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Annuler une tâche en attente ou en cours d&#39;exécution</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">Interface Swagger UI interactive pour explorer et tester tous les points de terminaison</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/fr/pacs.002.001.12/) — Rapport de statut de paiement FI à FI
- [`pacs.003.001.09`](/fr/pacs.003.001.09/) — Prélèvement client FI à FI
- [`pacs.004.001.11`](/fr/pacs.004.001.11/) — Retour de paiement
- [`pacs.007.001.11`](/fr/pacs.007.001.11/) — Annulation de paiement FI à FI
- [`pacs.008.001.13`](/fr/pacs.008.001.13/) — Virement client FI à FI
- [`pacs.009.001.10`](/fr/pacs.009.001.10/) — Virement entre institutions financières
- [`pacs.010.001.05`](/fr/pacs.010.001.05/) — Prélèvement entre institutions financières
- [`pacs.028.001.05`](/fr/pacs.028.001.05/) — Demande de statut de paiement FI à FI

### Exemple de validation

Soumettre des données de paiement pour validation avant la génération du XML.

```bash
curl -X POST http://localhost:8000/api/validate \
  -H "Content-Type: application/json" \
  -d '{
    "message_type": "pacs.008.001.13",
    "data": [{
      "msg_id": "MSG-2026-001",
      "creation_date_time": "2026-01-15T10:30:00",
      "nb_of_txs": "1",
      "settlement_method": "CLRG",
      "interbank_settlement_date": "2026-01-15",
      "end_to_end_id": "E2E-INV-2026-001",
      "interbank_settlement_amount": "25000.00",
      "interbank_settlement_currency": "EUR",
      "charge_bearer": "SHAR",
      "debtor_name": "Acme Corp GmbH",
      "debtor_agent_bic": "DEUTDEFF",
      "creditor_agent_bic": "COBADEFF",
      "creditor_name": "Widget Industries SA"
    }]
  }'
```

```json
{
  "valid": true,
  "message_type": "pacs.008.001.13",
  "errors": [],
  "warnings": []
}
```

### Exemple de génération synchrone

Générer un fichier XML pacs.008.001.13 à partir d'une charge utile JSON.

```bash
curl -X POST http://localhost:8000/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "message_type": "pacs.008.001.13",
    "template": "pacs008/templates/pacs.008.001.13/template.xml",
    "schema": "pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd",
    "data": [{
      "msg_id": "MSG-2026-001",
      "creation_date_time": "2026-01-15T10:30:00",
      "nb_of_txs": "1",
      "settlement_method": "CLRG",
      "interbank_settlement_date": "2026-01-15",
      "end_to_end_id": "E2E-INV-2026-001",
      "tx_id": "TX-001",
      "interbank_settlement_amount": "25000.00",
      "interbank_settlement_currency": "EUR",
      "charge_bearer": "SHAR",
      "debtor_name": "Acme Corp GmbH",
      "debtor_agent_bic": "DEUTDEFF",
      "creditor_agent_bic": "COBADEFF",
      "creditor_name": "Widget Industries SA"
    }]
  }' --output pacs008_output.xml
```

### Génération asynchrone

Pour les fichiers volumineux ou l'utilisation en pipeline, soumettez un job asynchrone et interrogez jusqu'à complétion.

```bash
# Submit the job
JOB=$(curl -s -X POST http://localhost:8000/api/generate/async \
  -H "Content-Type: application/json" \
  -d '{"message_type":"pacs.008.001.13","data":[...]}')

JOB_ID=$(echo $JOB | jq -r '.job_id')

# Poll for completion
curl http://localhost:8000/api/status/$JOB_ID

# Download the result
curl http://localhost:8000/api/download/$JOB_ID --output result.xml
```

```json
{
  "job_id": "8f7f0d4b-7df9-4d1a-8d47-19f4f28b6d38",
  "status": "completed",
  "message_type": "pacs.008.001.13",
  "download_url": "/api/download/8f7f0d4b-7df9-4d1a-8d47-19f4f28b6d38"
}
```

---

## CLI

L'interface en ligne de commande accepte un fichier de données, une version de message, un gabarit et un schéma. Elle valide l'entrée et écrit le XML généré dans le répertoire de sortie.

### Utilisation de base

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Exemple

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Mode simulation

Utilisez `--dry-run` pour valider les données d'entrée sans générer de XML. Le code de sortie indique si la validation a réussi (`0`) ou échoué (`1`).

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Ajoutez `--verbose` pour une sortie détaillée pendant la génération.

---

## Python API

Utilisez la bibliothèque directement dans des scripts ou services Python.

### Générer du XML à partir d'une liste d'enregistrements de paiement

```python
from pacs008 import generate_xml_string

payments = [{
    "msg_id": "MSG-2026-001",
    "creation_date_time": "2026-01-15T10:30:00",
    "nb_of_txs": "1",
    "settlement_method": "CLRG",
    "interbank_settlement_date": "2026-01-15",
    "end_to_end_id": "E2E-INV-2026-001",
    "tx_id": "TX-001",
    "interbank_settlement_amount": "25000.00",
    "interbank_settlement_currency": "EUR",
    "charge_bearer": "SHAR",
    "debtor_name": "Acme Corp GmbH",
    "debtor_agent_bic": "DEUTDEFF",
    "creditor_agent_bic": "COBADEFF",
    "creditor_name": "Widget Industries SA",
}]

xml = generate_xml_string(
    payments,
    "pacs.008.001.13",
    "pacs008/templates/pacs.008.001.13/template.xml",
    "pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd",
)
print(xml)
```

### Vérification de conformité SWIFT

Valider et nettoyer les données par rapport aux règles de jeu de caractères et de longueur de champ SWIFT avant la génération.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

Exécutez l'API dans un conteneur à l'aide du Dockerfile fourni.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## Validation IBAN et BIC

Validez les identifiants financiers indépendamment de la génération XML.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Traitement par flux

Chargez les grands jeux de données par lots configurables pour limiter l'utilisation mémoire.

```python
from pacs008.data.loader import load_payment_data_streaming

for chunk in load_payment_data_streaming("large_payments.csv", chunk_size=500):
    print(f"Processing {len(chunk)} records")
```

```python
from pacs008.validation import validate_batch

for chunk in load_payment_data_streaming("large_payments.csv", chunk_size=500):
    report = validate_batch(chunk, "pacs.008.001.13")
    print(report.summary())
```

---

## Service de validation

Exécutez le pipeline complet de validation pré-génération de manière programmatique.

```python
from pacs008.validation import ValidationService, ValidationConfig

service = ValidationService()
report = service.validate_all(ValidationConfig(
    xml_message_type="pacs.008.001.13",
    xml_template_file_path="pacs008/templates/pacs.008.001.13/template.xml",
    xsd_schema_file_path="pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd",
    data_file_path="payments.csv",
))
print(report.is_valid, report.errors)
```

---

## Champs de données requis

Chaque enregistrement de paiement doit inclure les champs suivants. Les champs spécifiques aux versions sont indiqués le cas échéant.

<div class="api-fields-table" tabindex="0" aria-label="Champs de données requis">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Champ</th>
        <th>Description</th>
        <th>Contrainte</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">Identifiant du message</td>
          <td class="api-fields-table__constraint">Maximum 35 caractères</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">Horodatage de création</td>
          <td class="api-fields-table__constraint">Format ISO 8601</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">Nombre de transactions</td>
          <td class="api-fields-table__constraint">Entier positif</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">Méthode de règlement</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE ou INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">Identifiant de bout en bout</td>
          <td class="api-fields-table__constraint">Maximum 35 caractères</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">Montant de règlement interbancaire</td>
          <td class="api-fields-table__constraint">Décimal, ex. `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">Devise de règlement</td>
          <td class="api-fields-table__constraint">Code ISO 4217</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">Porteur des frais</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR ou SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">Nom du débiteur</td>
          <td class="api-fields-table__constraint">Maximum 140 caractères</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC de l&#39;agent débiteur</td>
          <td class="api-fields-table__constraint">8 ou 11 caractères</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC de l&#39;agent créancier</td>
          <td class="api-fields-table__constraint">8 ou 11 caractères</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">Nom du créancier</td>
          <td class="api-fields-table__constraint">Maximum 140 caractères</td>
        </tr>
    </tbody>
  </table>
</div>

### Champs spécifiques aux versions

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="Champs spécifiques aux versions">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Champ</th>
        <th>Description</th>
        <th>Contrainte</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">Référence unique de transaction de bout en bout</td>
          <td class="api-fields-table__constraint">Format UUID — disponible à partir de la v08</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">Identifiant de mandat</td>
          <td class="api-fields-table__constraint">Disponible à partir de la v10</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">Horodatage d&#39;expiration du message</td>
          <td class="api-fields-table__constraint">Disponible en v13</td>
        </tr>
    </tbody>
  </table>
</div>

