// const questions = [
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question: "What does CPU stand for?",
//     correct_answer: "Central Processing Unit",
//     incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question:
//       "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
//     correct_answer: "Final",
//     incorrect_answers: ["Static", "Private", "Public"],
//   },
//   {
//     category: "Science: Computers",
//     type: "boolean",
//     difficulty: "easy",
//     question: "The logo for Snapchat is a Bell.",
//     correct_answer: "False",
//     incorrect_answers: ["True"],
//   },
//   {
//     category: "Science: Computers",
//     type: "boolean",
//     difficulty: "easy",
//     question: "Pointers were not used in the original C programming language; they were added later on in C++.",
//     correct_answer: "False",
//     incorrect_answers: ["True"],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question: "What is the most preferred image format used for logos in the Wikimedia database?",
//     correct_answer: ".svg",
//     incorrect_answers: [".png", ".jpeg", ".gif"],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question: "In web design, what does CSS stand for?",
//     correct_answer: "Cascading Style Sheet",
//     incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question: "What is the code name for the mobile operating system Android 7.0?",
//     correct_answer: "Nougat",
//     incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question: "On Twitter, what is the character limit for a Tweet?",
//     correct_answer: "140",
//     incorrect_answers: ["120", "160", "100"],
//   },
//   {
//     category: "Science: Computers",
//     type: "boolean",
//     difficulty: "easy",
//     question: "Linux was first created as an alternative to Windows XP.",
//     correct_answer: "False",
//     incorrect_answers: ["True"],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     question: "Which programming language shares its name with an island in Indonesia?",
//     difficulty: "easy",
//     correct_answer: "Java",
//     incorrect_answers: ["Python", "C", "Jakarta"],
//   },
// ];

const database = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "The Harvard architecture for micro-controllers added which additional bus?",
    correct_answer: "Instruction",
    incorrect_answers: ["Address", "Data", "Control"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "The HTML5 standard was published in 2014.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
    correct_answer: "Apple",
    incorrect_answers: ["Microsoft", "Atari", "Commodore"],
  },
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
    type: "boolean",
    difficulty: "medium",
    question: "FLAC stands for &quot;Free Lossless Audio Condenser&quot;&#039;",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What was the name of the security vulnerability found in Bash in 2014?",
    correct_answer: "Shellshock",
    incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does GHz stand for?",
    correct_answer: "Gigahertz",
    incorrect_answers: ["Gigahotz", "Gigahetz", "Gigahatz"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "HTML is what type of language?",
    correct_answer: "Markup Language",
    incorrect_answers: ["Macro Language", "Programming Language", "Scripting Language"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What five letter word is the motto of the IBM Computer company?",
    correct_answer: "Think",
    incorrect_answers: ["Click", "Logic", "Pixel"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "On which computer hardware device is the BIOS chip located?",
    correct_answer: "Motherboard",
    incorrect_answers: ["Hard Disk Drive", "Central Processing Unit", "Graphics Processing Unit"],
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
    question:
      "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
    correct_answer: "HD Graphics 500",
    incorrect_answers: ["HD Graphics 700 ", "HD Graphics 600", "HD Graphics 7000"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What was the name given to Android 4.3?",
    correct_answer: "Jelly Bean",
    incorrect_answers: ["Lollipop", "Nutella", "Froyo"],
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
    type: "boolean",
    difficulty: "medium",
    question: "To bypass US Munitions Export Laws, the creator of the PGP published all the source code in book form. ",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "On which day did the World Wide Web go online?",
    correct_answer: "December 20, 1990",
    incorrect_answers: ["December 17, 1996", "November 12, 1990", "November 24, 1995"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does the acronym CDN stand for in terms of networking?",
    correct_answer: "Content Delivery Network",
    incorrect_answers: ["Content Distribution Network", "Computational Data Network", "Compressed Data Network"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Ada Lovelace is often considered the first computer programmer.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "MacOS is based on Linux.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In the server hosting industry IaaS stands for...",
    correct_answer: "Infrastructure as a Service",
    incorrect_answers: ["Internet as a Service", "Internet and a Server", "Infrastructure as a Server"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these names was an actual codename for a cancelled Microsoft project?",
    correct_answer: "Neptune",
    incorrect_answers: ["Enceladus", "Pollux", "Saturn"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What port does HTTP run on?",
    correct_answer: "80",
    incorrect_answers: ["53", "443", "23"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the programming language &quot;Python&quot;, which of these statements would display the string &quot;Hello World&quot; correctly?",
    correct_answer: "print(&quot;Hello World&quot;)",
    incorrect_answers: [
      "console.log(&quot;Hello World&quot;)",
      "echo &quot;Hello World&quot;",
      "printf(&quot;Hello World&quot;)",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In HTML, which non-standard tag used to be be used to make elements scroll across the viewport?",
    correct_answer: "&lt;marquee&gt;&lt;/marquee&gt;",
    incorrect_answers: ["&lt;scroll&gt;&lt;/scroll&gt;", "&lt;move&gt;&lt;/move&gt;", "&lt;slide&gt;&lt;/slide&gt;"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In CSS, which of these values CANNOT be used with the &quot;position&quot; property?",
    correct_answer: "center",
    incorrect_answers: ["static", "absolute", "relative"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Time on Computers is measured via the EPOX System.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The Windows 7 operating system has six main editions.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In computing terms, typically what does CLI stand for?",
    correct_answer: "Command Line Interface",
    incorrect_answers: ["Common Language Input", "Control Line Interface", "Common Language Interface"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following is a personal computer made by the Japanese company Fujitsu?",
    correct_answer: "FM-7",
    incorrect_answers: ["PC-9801", "Xmillennium ", "MSX"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which data structure does FILO apply to?",
    correct_answer: "Stack",
    incorrect_answers: ["Queue", "Heap", "Tree"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does the term GPU stand for?",
    correct_answer: "Graphics Processing Unit",
    incorrect_answers: ["Gaming Processor Unit", "Graphite Producing Unit", "Graphical Proprietary Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "This mobile OS held the largest market share in 2012.",
    correct_answer: "iOS",
    incorrect_answers: ["Android", "BlackBerry", "Symbian"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which RAID array type is associated with data mirroring?",
    correct_answer: "RAID 1",
    incorrect_answers: ["RAID 0", "RAID 10", "RAID 5"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What was the first company to use the term &quot;Golden Master&quot;?",
    correct_answer: "Apple",
    incorrect_answers: ["IBM", "Microsoft", "Google"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
    correct_answer: "Cheetah",
    incorrect_answers: ["Puma", "Tiger", "Leopard"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Dutch computer scientist Mark Overmars is known for creating which game development engine?",
    correct_answer: "Game Maker",
    incorrect_answers: ["Stencyl", "Construct", "Torque 2D"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which programming language was developed by Sun Microsystems in 1995?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "Solaris OS", "C++"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "The name of technology company HP stands for what?",
    correct_answer: "Hewlett-Packard",
    incorrect_answers: ["Howard Packmann", "Husker-Pollosk", "Hellman-Pohl"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Who invented the &quot;Spanning Tree Protocol&quot;?",
    correct_answer: "Radia Perlman",
    incorrect_answers: ["Paul Vixie", "Vint Cerf", "Michael Roberts"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does RAID stand for?",
    correct_answer: "Redundant Array of Independent Disks",
    incorrect_answers: [
      "Rapid Access for Indexed Devices",
      "Range of Applications with Identical Designs",
      "Randomized Abstract Identification Description",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How long is an IPv6 address?",
    correct_answer: "128 bits",
    incorrect_answers: ["32 bits", "64 bits", "128 bytes"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In computing, what does MIDI stand for?",
    correct_answer: "Musical Instrument Digital Interface",
    incorrect_answers: [
      "Musical Interface of Digital Instruments",
      "Modular Interface of Digital Instruments",
      "Musical Instrument Data Interface",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "How many bytes are in a single Kibibyte?",
    correct_answer: "1024",
    incorrect_answers: ["2400", "1000", "1240"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What major programming language does Unreal Engine 4 use?",
    correct_answer: "C++",
    incorrect_answers: ["Assembly", "C#", "ECMAScript"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Unix Time is defined as the number of seconds that have elapsed since when?",
    correct_answer: "Midnight, January 1, 1970",
    incorrect_answers: [
      "Midnight, July 4, 1976",
      "Midnight on the creator of Unix&#039;s birthday",
      "Midnight, July 4, 1980",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
    correct_answer: "Coffee Lake",
    incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Lenovo acquired IBM&#039;s personal computer division, including the ThinkPad line of laptops and tablets, in what year?",
    correct_answer: "2005",
    incorrect_answers: ["1999", "2002", "2008"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Who is the founder of Palantir?",
    correct_answer: "Peter Thiel",
    incorrect_answers: ["Mark Zuckerberg", "Marc Benioff", "Jack Dorsey"],
  },
];
//?--------------------------------------------------------------CODICE--------------------------------------------------------

let myTimer = null;
let punteggio = 0,
  questionNumber = 0;
const tTot = 10;
let questions = [];
let numDomande, difficolta;
if (numDomande < 1 || numDomande > 10) location.reload(true);

//TODO----------------------FORM DI INSERIMENTO-------------------------------------
const datiIniziali = () => {
  numDomande = document.getElementById("numDomande").value;
  difficolta = document.getElementsByClassName("radioDifficolta");
  difficolta = Array.from(difficolta);
  difficolta = difficolta.find((x) => x.checked === true);
  difficolta = difficolta.value;
  questions = database.filter((x) => x.difficulty === difficolta);
  if (numDomande < 1 || numDomande > questions.length) {
    alert("Numero domande troppo grande o minore di zero");
    location.reload(true);
  }
  const welcome = document.getElementById("welcome");
  const scelte = document.getElementById("scelte");
  scelte.style.display = "none";
  welcome.style.display = "block";
};

const startButton = document.getElementById("startScelte");
startButton.onclick = datiIniziali;
//TODO------------------------------------------------------------------------------

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
  if (questionNumber === parseInt(numDomande)) {
    //TODO Inserire codice che richiama la finestra risultato
    alert(`Risposte esatte ${punteggio}`);
  }
  console.log(numDomande, questionNumber);
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
const start = () => {
  console.log(check.checked);
  if (check.checked === true) buttonWelcom.disabled = false;
  else buttonWelcom.disabled = true;
};
const buttonWelcom = document.getElementById("buttonWelcom");
const check = document.getElementById("homecheck");
check.addEventListener("change", start);
buttonWelcom.onclick = generaDomanda;
console.log(check);
