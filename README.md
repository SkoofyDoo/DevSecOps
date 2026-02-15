
<div align="center">

<h1>🛡️ DevSecOps: Ressourcen & Best Practices</h1>
<p>
  Eine kuratierte Wissensdatenbank für DevSecOps-Konzepte und -Werkzeuge. <br>
  A curated knowledge base for DevSecOps concepts and tools.
</p>

<p>
  <a href="#german">
    <img src="https://img.shields.io/badge/Sprache-Deutsch-red" alt="Deutsch" />
  </a>
  <a href="#english">
    <img src="https://img.shields.io/badge/Language-English-blue" alt="English" />
  </a>
  <img src="https://img.shields.io/github/last-commit/SkoofyDoo/DevSecOps?color=green&label=Update" alt="Last commit" />
</p>

<p align="center">
  👇 <strong>Wähle deine Sprache / Choose your language</strong> 👇
</p>

</div>

---

<a name="german"></a>
<h2 align="center">🇩🇪 Projektbeschreibung (Deutsch)</h2>

### 📌 Über dieses Repository

Dieses Repository ist eine systematisch aufgebaute und kuratierte Sammlung rund um das Thema **DevSecOps** (Development, Security, and Operations). Es dokumentiert die nahtlose Integration von Sicherheitspraktiken in moderne Softwareentwicklungs-Lebenszyklen (SDLC) und dient als zentrale Wissensdatenbank für Best Practices, Architektur-Ansätze und Sicherheitswerkzeuge.

Das Hauptziel dieses Projekts ist es, das Konzept des "Shift-Left" zu veranschaulichen – also die Verlagerung von Sicherheitsprüfungen in die frühestmöglichen Phasen der Entwicklung, um Softwarerisiken proaktiv zu minimieren.

### 📂 Was bisher gemacht wurde (Inhalte & Struktur)

Das Wissen und die gesammelten Ressourcen wurden in spezifische Kategorien unterteilt und dokumentiert:

* **[`Community/`](./Community/)**: 
  Zusammenstellung von wichtigen Netzwerken, Fachforen, Konferenzen und Plattformen. Dieser Bereich dient dem Überblick über die globale DevSecOps-Community und den fachlichen Austausch.
* **[`Concepts/`](./Concepts/)**: 
  Dokumentation und Erklärung grundlegender Prinzipien. Hier wurden Leitfäden zu Kernmodellen, Sicherheitsrichtlinien, Compliance-Anforderungen und DevSecOps-Philosophien erarbeitet und gesammelt.
* **[`Tools/`](./Tools/)**: 
  Ein umfangreicher, strukturierter Katalog von Sicherheitswerkzeugen für verschiedene Phasen der CI/CD-Pipeline. Die Sammlung umfasst Evaluierungen und Links zu Tools aus den Bereichen:
  * Static Application Security Testing (SAST)
  * Dynamic Application Security Testing (DAST)
  * Software Composition Analysis (SCA)
  * Container- und Cloud-Sicherheit

---
<div align="center">
  <a href="#english">🇺🇸 Switch to English Version</a>
</div>
<br>

---

<a name="english"></a>
<h2 align="center">🇺🇸 Project Description (English)</h2>

### 📌 About this Repository

This repository is a systematically structured and curated collection dedicated to **DevSecOps** (Development, Security, and Operations). It documents the seamless integration of security practices into modern software development lifecycles (SDLC) and serves as a central knowledge base for best practices, architectural approaches, and security tools.

The main goal of this project is to illustrate the "Shift-Left" concept—moving security checks to the earliest possible phases of development to proactively minimize software risks.

### 📂 What has been done (Contents & Structure)

The knowledge and gathered resources have been organized and documented into specific categories:

* **[`Community/`](./Community/)**: 
  A compilation of essential networks, professional forums, conferences, and platforms. This section provides an overview of the global DevSecOps community and avenues for professional exchange.
* **[`Concepts/`](./Concepts/)**: 
  Documentation and explanation of fundamental principles. This includes curated guides on core models, security policies, compliance requirements, and overarching DevSecOps philosophies.
* **[`Tools/`](./Tools/)**: 
  A comprehensive, structured catalog of security tools tailored for various stages of the CI/CD pipeline. This collection includes evaluations and links to tools covering:
  * Static Application Security Testing (SAST)
  * Dynamic Application Security Testing (DAST)
  * Software Composition Analysis (SCA)
  * Container and Cloud Security

---
<div align="center">
  <a href="#german">🇩🇪 Zur deutschen Version wechseln</a>
</div>



## Security-Entscheidungen

**Überblick**

Dieses Projekt demonstriert einen praxisnahen DevSecOps-Ansatz, bei dem Sicherheitsprüfungen frühzeitig in die CI-Pipeline integriert werden und Entscheidungen risikobasiert getroffen werden.

Ziel ist es, Sicherheit, Stabilität und Entwicklerproduktivität in ein sinnvolles Gleichgewicht zu bringen.

### Sicherheitsprüfungen in der CI/CD-Pipeline\*\*

**Die CI-Pipeline umfasst folgende Sicherheitsmechanismen:**

-   Statische Codeanalyse (SAST) mit Semgrep
-   Abhängigkeitsanalyse mit npm audit
-   Container-Image-Scanning mit Trivy
-   Linting und Unit-Tests zur Sicherstellung der Codequalität

Alle Prüfungen werden automatisch bei jedem Push und Pull Request ausgeführt.

### Risikobasierte Gating-Strategie

Nicht jede Sicherheitsmeldung wird gleich behandelt.

Der Trivy-Scan ist bewusst nicht blockierend konfiguriert (Report-Modus), aus folgenden Gründen:

Die aktuellen Findings betreffen ausschließlich Entwicklungsabhängigkeiten (z. B. Test- und Lint-Tools)

Diese Abhängigkeiten sind nicht Teil der Laufzeitumgebung

Es besteht kein direkter Einfluss auf die produktive Angriffsfläche

**Die Findings werden daher:**

-   transparent im CI ausgegeben
-   bewusst bewertet

aktuell nicht als Blocker verwendet

Dies stellt eine bewusste, risikobasierte Sicherheitsentscheidung dar und kein Ignorieren von Schwachstellen.

### Container-Härtung

**Das Docker-Image folgt gängigen Sicherheits-Best-Practices:**

-   Minimales Base-Image (node:18-alpine)
-   Ausführung als Non-Root-User
-   Ausschluss von Entwicklungsabhängigkeiten (npm ci --omit=dev)
-   Explizite Port-Freigabe

Diese Maßnahmen reduzieren die Angriffsfläche der Anwendung erheblich.

### Geplante Weiterentwicklungen

**Mögliche zukünftige Verbesserungen:**

-   Aktivierung eines blockierenden Trivy-Gates für produktive Abhängigkeiten
-   Trennung von Scans für Entwicklungs- und Laufzeitartefakte
-   Einsatz von Multi-Stage-Builds zur strengeren Trennung von Build- und Runtime-Umgebung
-   Zentrale Verwaltung und Dokumentation von akzeptierten Findings (Suppressions mit Begründung)

### DevSecOps-Verständnis

Sicherheit wird als kontinuierlicher Prozess verstanden, nicht als einmalige Maßnahme.

**Entscheidungen basieren auf:**

-   Technischer Auswirkung
-   Kontext (Entwicklung vs. Produktion)
-   Risikobewertung
-   Wartbarkeit und Stabilität

Dieses Vorgehen entspricht modernen DevSecOps-Best-Practices.
