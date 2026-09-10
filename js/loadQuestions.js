

loadQuestions();


async function loadQuestions(){
    const res = await fetch("data/questions.json");
    const data = await res.json();
    render(data);
    document.dispatchEvent(new Event('questionsLoaded'));

}

function render(data){

    console.log(data);

    const questions = document.querySelector(".questions");

    for(const q of data){
        const fieldset = document.createElement('fieldset');
        fieldset.className = 'question';

       console.log(q.question);

        const legend = document.createElement('legend');
        legend.className = 'question-text';
        legend.textContent  = q.question;

        fieldset.appendChild(legend);

        //svarmuligheder
        const options = document.createElement('div');
        options.className = 'options';
        for (const option of q.options){     //vi gennemløber options arrrayet i JSON dokumentet
                          const optionEl = document.createElement('label');
                          optionEl.className = "option";
                          optionEl.textContent = option.text;

                          const input = document.createElement('input');
                          //type="radio" name="q1" value="Dyb" required
                          input.type = "radio";
                          //  input.name = `q${q.id}`;
                          input.name = "q"+q.id;
                          input.value = option.type;
                          input.required = true;

                          optionEl.appendChild(input);
                          options.appendChild(optionEl);
        }
        fieldset.appendChild(options);
        questions.appendChild(fieldset);
    }
}
/*
*    <fieldset class="question">
        <legend class="question-text">1. Du sidder med en øvelsesopgave, du ikke umiddelbart forstår.</legend>
        <div class="options">
          <label class="option"><input type="radio" name="q1" value="Dyb" required>
            Jeg læser opgaven igen og prøver at finde ud af, hvad den egentlig går ud på, før jeg går videre</label>
          <label class="option"><input type="radio" name="q1" value="Overfladisk">
            Jeg googler et lignende eksempel og tilpasser løsningen, så jeg kan komme videre</label>
          <label class="option"><input type="radio" name="q1" value="Strategisk">
            Jeg tjekker, hvor mange point opgaven giver, og vurderer om det er værd at bruge tid på lige nu</label>
        </div>
      </fieldset>
*
*
*
* */