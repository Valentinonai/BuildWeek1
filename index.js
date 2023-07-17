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
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let punteggio = 0,
  questionNumber = 0;
const numDomande = prompt("A quante domande vuoi rispondere (1-10)?");

if (numDomande < 1 || numDomande > 10) location.reload(true);

const generaDomanda = () => {
  const welcome = document.getElementById("welcome");
  welcome.style.display = "none";
  const benchmark = document.getElementById("benchmark");
  benchmark.style.displayblock;
  const arrayDomande = [questions[questionNumber].correct_answer, ...questions[questionNumber].incorrect_answers];
  const domanda = document.createElement("h1");
  domanda.innerText = questions[questionNumber].question;
  const risposte = document.createElement("ul");
  for (let i = 0; i < arrayDomande.length; i++) {
    let posDomanda = Math.floor(Math.random() * arrayDomande.length);
    const li = document.createElement("li");
    li.innerText = arrayDomande[posDomanda];
    arrayDomande.splice(posDomanda, 1);
    risposte.appendChild(li);
    console.log(li);
  }
  benchmark.appendChild(domanda);
  benchmark.appendChild(risposte);
};

const buttonWelcom = document.getElementById("buttonWelcom");
buttonWelcom.onclick = generaDomanda;
