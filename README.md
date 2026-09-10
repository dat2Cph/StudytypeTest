# Case til forløb om Frontend udvikling på HTML, CSS og JavaScript på 2. semester

## Case: Studietypetest

EK skal have bygget en online test der kortlægger, hvilken studietilgang de studerende overvejende bruger: **Dyb**, **Strategisk** eller **Overfladisk**.

I skal først designe og teste en prototype, og siden implementere testen i HTML, CSS og JavaScript. 
I starter med at lave en HTML-side med spørgsmål og
svarmuligheder, dernæst styles siderne med CSS, og til sidst tilføjes JavaScript til at håndtere fremgang og vise
resultatet. En resultat side og en forsiden knyttes til i uge 2.

Da det er første gang I arbejder med webteknologier, og vi ikke bygger nogen backend, skal I ikke lave en database
til at gemme data undervejs.


[læs hele case beskrivelsen her](case-resources/CASE.pdf)

## Kør lokalt

Siden er ren HTML/CSS/JS uden build-step, men skal serveres over HTTP (ikke åbnes direkte som `file://`), fordi `result.js` henter `data/typeDescriptions.json` med `fetch`.

```bash
npm install
npm start
```

Dette starter en lokal server og åbner siden i browseren.