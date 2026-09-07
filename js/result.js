/*const params = new URLSearchParams(window.location.search);
const q1 = params.get("q1");
const q2 = params.get("q2");
const q3 = params.get("q3");

*/

const params = new URLSearchParams(window.location.search);

// hent q1, q2, q3, ... op til fx 10, og saml dem i et array
const svar = [];
for (let i = 1; i <= 12; i++) {
    const value = params.get(`q${i}`);
    if (value !== null) {
        svar.push(value);
    }
}

const countDyb = svar.filter(x => x === "Dyb").length;
const countOverfladisk = svar.filter(x => x === "Overfladisk").length;
const countStrategisk = svar.filter(x => x === "Strategisk").length;

const result = document.querySelector("#studyType");
result.innerHTML =`<ul>
<li>Dyb: ${countDyb}</li>
<li>Strategisk:${countStrategisk}</li>
<li>Overfladisk:${countOverfladisk}</li>
</ul>`;