// gemme URL parametrene i en liste


const params = new URLSearchParams(window.location.search);

//        [q1="Dyb", q2="overfladisk"....]  => ["dyb", "overfladisk"....]
const svar = [];
for(let i = 0; i< 12; i++){
    svar.push(params.get("q"+(i+1)));

    //console.log(params.get(`q${i+1}`));

}

// Fra key:value pairs til values
//[q1="Dyb", q2="Overfladisk"...] > ["Dyb", "Overfladisk"...]

const countDyb = svar.filter(x => x === "Dyb").length;
const countOverfladisk = svar.filter(x => x === "Overfladisk").length;
const countStrategisk = svar.filter(x => x === "Strategisk").length;


// Selekt elementerne
const el1 = document.querySelector("#Dyb");
const el2 = document.querySelector("#Overfladisk");
const el3 = document.querySelector("#Strategisk");

// sæt style width på elementet (værdien width skal være countDyb * 100;)
el1.style.width = countDyb*100+"px";
el2.style.width = countOverfladisk*100+"px";
el3.style.width = countStrategisk*100+"px";

console.log(countDyb);
console.log(countOverfladisk);
console.log(countStrategisk);

//http://localhost:63342/StudytypeTest/result.html?q1=Overfladisk&q2=Overfladisk&q3=Overfladisk&q4=Overfladisk&q5=Overfladisk&q6=Strategisk&q7=Overfladisk&q8=Overfladisk&q9=Dyb&q10=Strategisk&q11=Overfladisk&q12=Overfladisk
let maxValue = countDyb;
let mainType ="Dyb";

if(countOverfladisk>maxValue){
    mainType = "Overfladisk";
    maxValue = countOverfladisk;
}
if(countStrategisk>maxValue){
    mainType = "Strategisk";
    maxValue = countStrategisk;
}

console.log(mainType);

async function loadTypeDescriptions(){
    const res = await fetch("data/typeDescriptions.json");
    const data = await res.json();
    displayDescription(data);

}

loadTypeDescriptions();


function  displayDescription(data){
    const typeDescription = document.querySelector("#typedescription");
    console.log(data);

    for(let item of data){

        if(item.name === mainType){
            typeDescription.innerHTML = "<div class ='textbox'><h4> Din type er: "+mainType+"</h4><p>"+item.text+"</p></div>";
        }
    }



}