---
title: API | pacs008
description: Prise en charge REST et CLI dans pacs008. Génération, validation, orchestration d'API et conformité pour les flux de virement client FI-to-FI.
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# API

Le projet fournit à la fois une API REST et une CLI pour les flux de traitement des messages de paiement.

> Dernière vérification par rapport aux sources primaires le 23 mars 2026 à l'aide des documents publics ISO 20022, EPC et Swift référencés sur cette page.

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

| Endpoint | Description |
|---|---|
| `GET /health` | Vérification de l'état — retourne le statut du service |
| `POST /validate` | Valider les données de paiement par rapport au schéma sans générer de XML |
| `POST /generate` | Générer du XML de façon synchrone et retourner le fichier |
| `POST /generate/async` | Soumettre un job de génération asynchrone |
| `GET /status/{job_id}` | Interroger le statut du job par identifiant |
| `GET /download/{job_id}` | Télécharger le XML généré une fois le job terminé |
| `DELETE /jobs/{job_id}` | Annuler une tâche en attente ou en cours d'exécution |
| `GET /docs` | Interface Swagger UI interactive pour explorer et tester tous les points de terminaison |

- [`pacs.002.001.12`](/fr/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/fr/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.004.001.11`](/fr/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/fr/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.008.001.13`](/fr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/fr/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.010.001.05`](/fr/pacs.010.001.05/) — Financial Institution Direct Debit
- [`pacs.028.001.05`](/fr/pacs.028.001.05/) — FI to FI Payment Status Request

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

| Champ | Description | Contrainte |
|---|---|---|
| `msg_id` | Identifiant du message | Maximum 35 caractères |
| `creation_date_time` | Horodatage de création | Format ISO 8601 |
| `nb_of_txs` | Nombre de transactions | Entier positif |
| `settlement_method` | Méthode de règlement | CLRG, INDA, COVE ou INGA |
| `end_to_end_id` | Identifiant de bout en bout | Maximum 35 caractères |
| `interbank_settlement_amount` | Montant de règlement interbancaire | Décimal, ex. `25000.00` |
| `interbank_settlement_currency` | Devise de règlement | Code ISO 4217 |
| `charge_bearer` | Porteur des frais | DEBT, CRED, SHAR ou SLEV |
| `debtor_name` | Nom du débiteur | Maximum 140 caractères |
| `debtor_agent_bic` | BIC de l'agent débiteur | 8 ou 11 caractères |
| `creditor_agent_bic` | BIC de l'agent créancier | 8 ou 11 caractères |
| `creditor_name` | Nom du créancier | Maximum 140 caractères |

### Champs spécifiques aux versions

| Champ | Description | Contrainte |
|---|---|---|
| `uetr` | Référence unique de transaction de bout en bout | Format UUID — disponible à partir de la v08 |
| `mandate_id` | Identifiant de mandat | Disponible à partir de la v10 |
| `expiry_date_time` | Horodatage d'expiration du message | Disponible en v13 |

