// const questions = [
//   {
//     topic: "number",
//     question: "Which number should come next in the pattern: 48, 24, 12, ?",
//     possibleAnswers: ["16", "8", "6", "4"],
//     correctAnswer: "6",
//   },
//   {
//     topic: "word",
//     question: "Which weighs more: A ton of bricks or a ton of feathers?",
//     possibleAnswers: [
//       "Not enough information to know",
//       "They weigh the same",
//       "A ton of feathers",
//       "A ton of bricks",
//     ],
//     correctAnswer: "They weigh the same",
//   },
//   {
//     topic: "word",
//     question: "Which of these words is a synonym of aloof?",
//     possibleAnswers: ["Scared", "Dstant", "Sad", "Lonely"],
//     correctAnswer: "Dstant",
//   },
//   {
//     topic: "number",
//     question:
//       "If you count from 1–100, how many times will you come across the number 7?",
//     possibleAnswers: ["20", "16", "22", "14"],
//     correctAnswer: "20",
//   },
// ];

class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.correctAnswersCount = 0;
    this.quizProgress = document.getElementById("quizProgress");
    this.quizContainer = document.getElementById("questionContainer");
    this.answerContainer = document.getElementById("answerContainer");
  }

  renderProgress() {
    this.quizProgress.innerHTML = "";
    this.questions.forEach((question) => {
      this.quizProgress.innerHTML += "<span></span>";
    });
  }

  markSeen(index) {
    const spans = document.querySelectorAll("span");
    for (let i = 0; i <= index; i++) {
      spans[i].classList.add("seen");
    }
  }

  renderQuestion() {
    const question = this.questions[this.currentQuestionIndex];
    this.quizContainer.innerHTML = `<p>${question.topic}</p> <p>${question.question}</p>`;
    this.renderAnswers(question);
  }

  renderAnswers(question) {
    this.answerContainer.innerHTML = "";
    question.possibleAnswers.forEach((answer) => {
      let button = document.createElement("button");
      button.innerText = answer;
      button.addEventListener("click", (e) =>
        this.handleAnswer(e, question.correctAnswer)
      );
      this.answerContainer.appendChild(button);
    });
  }

  handleAnswer(event, correctAnswer) {
    if (event.target.textContent === correctAnswer) {
      this.correctAnswersCount++;
      console.log("correct!");
    } else {
      console.log("wrong!");
    }

    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.showResults();
    } else {
      this.currentQuestionIndex++;
      this.handleQuestion();
    }
  }

  showResults() {
    this.quizContainer.innerHTML = `<p>Quiz Completed!</p> <p>Your score is: ${this.correctAnswersCount} out of ${this.questions.length}</p>`;
    this.answerContainer.innerHTML = "";
    this.correctAnswersCount = 0; // Reset score for next attempt
  }

  handleQuestion() {
    this.renderProgress();
    this.markSeen(this.currentQuestionIndex);
    this.renderQuestion();
  }
}

const questions = [
  {
    topic: "number",
    question: "Which number should come next in the pattern: 48, 24, 12, ?",
    possibleAnswers: ["16", "8", "6", "4"],
    correctAnswer: "6",
  },
  {
    topic: "word",
    question: "Which weighs more: A ton of bricks or a ton of feathers?",
    possibleAnswers: [
      "Not enough information to know",
      "They weigh the same",
      "A ton of feathers",
      "A ton of bricks",
    ],
    correctAnswer: "They weigh the same",
  },
  {
    topic: "word",
    question: "Which of these words is a synonym of aloof?",
    possibleAnswers: ["Scared", "Dstant", "Sad", "Lonely"],
    correctAnswer: "Dstant",
  },
  {
    topic: "number",
    question:
      "If you count from 1–100, how many times will you come across the number 7?",
    possibleAnswers: ["20", "16", "22", "14"],
    correctAnswer: "20",
  },
];

const quiz = new Quiz(questions);
quiz.handleQuestion();

// function populate() {
//   if (quiz.isEnded()) {
//     // showScores();
//   } else {
//     //show question
//     const element = document.getElementById("question");
//     element.innerHTML = quiz.getquestionIndex().text;

//   }
// }

// const quiz = new Quiz(questions);
// populate();
// class UIAnswers{
//   constructor{
//     questions=this.question
//   }
// }
