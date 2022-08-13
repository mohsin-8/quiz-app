const quizData = [
  {
    question: "Which is correct format of writting JSON name/value pair",
    a: "'name : value'",
    b: "name = 'value'",
    c: 'name = "value"',
    d: '"name" : "value"',
    correct: "d",
  },
  {
    question: "Which of the following is not a type in JSON?",
    a: "date",
    b: "Object",
    c: "Array",
    d: "string",
    correct: "a",
  },
  {
    question: "What extension in used to save a JSON file?",
    a: ".js",
    b: ".javaN",
    c: ".json",
    d: ".on",
    correct: "c",
  },
  {
    question:
      "Which of following statement is false about the space parameter in JSON.stringify() ?",
    a: "It controls spacing in the resulting JSON string",
    b: "It is an optional parameter",
    c: "All these are false",
    d: "It removes whitespace",
    correct: "d",
  },
  {
    question: "Is JSON Case sensitive ?",
    a: "Yes",
    b: "No",
    c: "not necessary",
    d: "All of the Above",
    correct: "a",
  },
  {
    question: "What is the common usage of Json on modern websites?",
    a: "To send and receive bits of data",
    b: "To store information remotely",
    c: "To store information locally",
    d: "All of the Above",
    correct: "a",
  },
];

// console.log(quizData);

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
