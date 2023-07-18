const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    question: "Which programming language shares its name with an island in Indonesia?",
    difficulty: "easy",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let myTimer = null;
let punteggio = 0,
  questionNumber = 0;
const numDomande = 10; //prompt("A quante domande vuoi rispondere (1-10)?");
const tTot = 10;
if (numDomande < 1 || numDomande > 10) location.reload(true);

//! Controllo la risposta
const controlla = () => {
  let answer = document.getElementsByClassName("radioAnswer");
  answer = Array.from(answer);
  const selezione = answer.find((x) => x.checked === true);
  console.log(selezione.value);
  if (selezione !== "undefined") {
    if (selezione.value === questions[questionNumber - 1].correct_answer) {
      punteggio++;
    }
  }
  console.log(punteggio);
};

const generaDomanda = () => {
  cerchio.style.strokeDashoffset = 0;

  //!Timer
  const tempo = () => {
    let t = tTot;
    const text = document.getElementById("txt");
    const circle = document.getElementById("cerchio");
    text.innerText = t;
    myTimer = setInterval(function () {
      text.innerText = "";
      t--;
      text.innerText = t;
      circle.style.strokeDashoffset = 472 - (472 * t) / tTot;
      if (t === 0) {
        clearInterval(myTimer);
        generaDomanda();
      }
    }, 1000);
  };
  const cancellaTempo = () => {
    clearInterval(myTimer);
  };

  if (questionNumber === numDomande) {
    //TODO Inserire codice che richiama la finestra risultato
    alert(`Risposte esatte ${punteggio}`);
  }
  const welcome = document.getElementById("welcome");
  welcome.style.display = "none";
  const benchmark = document.getElementById("benchmark");
  benchmark.style.display = "block";
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = "";

  //!Creo un Arrey con tutte le risposte per poi disporle in modo casuale nella pagina

  const arrayDomande = [questions[questionNumber].correct_answer, ...questions[questionNumber].incorrect_answers];
  const domanda = document.createElement("h1");
  domanda.innerText = questions[questionNumber].question;

  domanda.classList.add("domanda");
  quiz.appendChild(domanda);
  const x = arrayDomande.length;

  //!Creo la lista di risposte

  for (let i = 0; i < x; i++) {
    const posDomanda = Math.floor(Math.random() * arrayDomande.length);
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.classList.add("radioAnswer");
    radio.name = "answer";
    const label = document.createElement("label");
    label.for = "radio";
    label.classList.add("label");
    const divAnswer = document.createElement("div");
    divAnswer.appendChild(radio);
    divAnswer.classList.add("divAnswer");
    radio.value = arrayDomande[posDomanda];
    label.innerText = arrayDomande[posDomanda];
    arrayDomande.splice(posDomanda, 1);
    divAnswer.appendChild(label);
    quiz.appendChild(divAnswer);
  }
  const nextButton = document.createElement("button");
  nextButton.innerText = "Next";
  quiz.appendChild(nextButton);
  nextButton.classList.add("nextButton");
  nextButton.addEventListener("click", controlla);
  nextButton.addEventListener("click", cancellaTempo);
  nextButton.addEventListener("click", generaDomanda);

  const divQuestionNumber = document.createElement("div");
  divQuestionNumber.classList.add("divQuestionNumber");
  divQuestionNumber.innerHTML = `QUESTION  ${questionNumber + 1}<span class="spanColor"> / ${numDomande}</span>`;
  quiz.appendChild(divQuestionNumber);
  tempo();

  questionNumber++;
};

const buttonWelcom = document.getElementById("buttonWelcom");
buttonWelcom.onclick = generaDomanda;
