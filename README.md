# 🏛️ Stadtwerke & Kommunen - Kontaktdaten Sample

Sample-Datenbank mit Kontaktinformationen deutscher Stadtwerke und kommunaler Versorgungsunternehmen.

## 📊 Features

- **5 Beispiel-Einträge** mit vollständigen Kontaktdaten
- **Kachel-Ansicht** - Moderne Card-basierte Darstellung
- **Tabellen-Ansicht** - Klassische Übersicht
- **CSV-Export** verfügbar unter `/api/data`
- **Responsive Design** - funktioniert auf allen Geräten

## 🚀 Live Demo

Die Live-Version ist deployed auf Railway: [Link wird nach Deployment hinzugefügt]

## 📁 Datenstruktur

Jeder Eintrag enthält:
- **Unternehmensname** (z.B. "Stadtwerke München")
- **Standort** (Stadt + Bundesland)
- **Website** (vollständige URL)
- **Services** (Strom, Gas, Wasser, Fernwärme, ÖPNV, etc.)
- **Kontaktperson** (Name, Rolle, E-Mail, Telefon)

## 🛠️ Lokale Installation

```bash
# Repository klonen
git clone https://github.com/Franzi-4/stadtwerke-kontakte-sample.git
cd stadtwerke-kontakte-sample

# Dependencies installieren
npm install

# Server starten
npm start
```

Server läuft auf: `http://localhost:3000`

## 📄 API Endpoints

- `GET /` - HTML Frontend (Kachel-Ansicht)
- `GET /api/data` - CSV-Daten als Download
- `GET /health` - Health Check

## 🎨 Screenshots

### Kachel-Ansicht
Moderne, übersichtliche Card-Darstellung mit allen relevanten Informationen auf einen Blick.

### Tabellen-Ansicht
Klassische tabellarische Übersicht für schnelles Scannen großer Datenmengen.

## 💼 Use Cases

- **Vertriebsteams** - Schneller Zugriff auf Entscheidungsträger
- **Marketing** - Zielgruppenanalyse kommunaler Versorger
- **Research** - Marktübersicht Energiewirtschaft
- **B2B Sales** - Lead-Generierung im Stadtwerke-Segment

## 📋 Datenquellen

Die Sample-Daten basieren auf öffentlich zugänglichen Informationen von:
- Unternehmenswebsites
- Impressum-Angaben
- Öffentliche Verzeichnisse

## 🔐 Datenschutz

Alle enthaltenen Daten sind:
- ✅ Öffentlich zugänglich
- ✅ Aus offiziellen Unternehmensquellen
- ✅ DSGVO-konform

## 🚀 Deployment auf Railway

1. Repository in Railway importieren
2. Automatisches Deployment bei jedem Push
3. Keine weitere Konfiguration nötig

## 📞 Kontakt

Bei Fragen oder für den Zugriff auf die Vollversion:
- **E-Mail:** info@kivosoftware.de
- **Website:** [wird ergänzt]

## 📜 Lizenz

MIT License - Siehe [LICENSE](LICENSE) für Details.

---

**Hinweis:** Dies ist eine Sample-Version mit 5 Einträgen. Die Vollversion enthält 500+ deutsche Stadtwerke und Kommunen mit vollständigen Kontaktdaten.
