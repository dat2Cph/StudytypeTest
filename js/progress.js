

const viewport = document.querySelector('.carousel-viewport');
const questionEls = viewport.querySelectorAll('.question');
const status = document.querySelector('.progress-status');
const radios = viewport.querySelectorAll('input[type="radio"]');

function updateProgress() {
  let answered = 0;

  //løb alle spørgsmål igennem og tæl hvor mange der er besvaret
  for (let i = 0; i < questionEls.length; i++) {
    if (questionEls[i].querySelector('input[type="radio"]:checked')) {
      answered++;
    }
  }

  status.textContent = `${answered} / ${questionEls.length}`;
  console.log(e.currentTarget);

}

radios.forEach((radio) => radio.addEventListener('change', updateProgress));
updateProgress(); // set initial "0 / 12" on load


