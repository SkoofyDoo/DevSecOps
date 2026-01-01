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
