/*
* Pak ind i en listener så vi ikke tilføjer listeners til radioelementerne før de eksisterer */
document.addEventListener('questionsLoaded', () => {

    const anonymousChoice = localStorage.getItem("anonymous");
    const statusElement = document.querySelector("#anonymous-status");

    statusElement.textContent = anonymousChoice === "true" ? "Du besvarer anonymt" : "Du besvarer ikke anonymt";


    const questionElms = document.querySelectorAll(".question");
    const progressElm = document.querySelector("#progress-status");
// udvælg alle radio buttons
    const radios = document.querySelectorAll("input[type ='radio']");


    function updateProgress() {
        let selectedNum = 0;
        //løb alle questionElms elementer igennem
        for (const q of questionElms) {
            //For hvert question, vælg det input der er blevet valgt
            const selectedInput = q.querySelector("input[type='radio']:checked");
            if (selectedInput) {  //hvis denne er true, er der valgt noget
                selectedNum++;
            }
        }


        progressElm.textContent = selectedNum + "/" + questionElms.length;

    }


// Løb igennem alle radio button elementer (loop) - kan du finde syntaksen til et *gammeldags* for-each i js?
// For hvert element, tilføj en eventListener, der lytter på 'click'. Lad den kalde updateProgress

    for (const r of radios) {
        r.addEventListener("click", updateProgress);
    }


// Sæt den initielle værdi til 0/12
    updateProgress();
});