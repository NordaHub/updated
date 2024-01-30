let currentQuestion = 1;
let failedQuiz = false;

const correctAnswers = {
    q1: 'paris',
    q2: '7',
    q3: 'chuppi?',
    q4: 'yes',
    q5: 'no',
};

document.querySelectorAll('.question').forEach((question, index) => {
    if (index !== 0) {
      question.style.display = 'none';
    }
});

function nextQuestion() {
    const currentQuestionElement = document.getElementById(`question${currentQuestion}`);
    currentQuestionElement.style.display = 'none';
  
    currentQuestion++;
  
    if (currentQuestion <= 5) {
      const nextQuestionElement = document.getElementById(`question${currentQuestion}`);
      nextQuestionElement.style.display = 'block';
    } else {
      checkQuizResult();
    }
  }
  
  function retryQuiz() {
    // Reset currentQuestion to 1
    currentQuestion = 1;
    failedQuiz = false;
  
    // Show the first question and hide others
    for (let i = 2; i <= 4; i++) {
      const questionElement = document.getElementById(`question${i}`);
      questionElement.style.display = 'none';
    }
  
    const firstQuestionElement = document.getElementById('question1');
    firstQuestionElement.style.display = 'block';
  
    hideRetryButton();
    hideCongratulationsScreen();
  }
  
  function checkQuizResult() {
    const score = calculateScore();
  
    if (score === 4) {
      showCongratulationsScreen();
    } else {
      failedQuiz = true;
      showRetryButton();
    }
  }
  
  function calculateScore() {
    let score = 0;
    for (const question in correctAnswers) {
      const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);
      if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
        score++;
      }
    }
    return score;
  }
  
  function showRetryButton() {
    const retryButton = document.getElementById('retryButton');
    retryButton.style.display = 'inline-block';
  }
  
  function hideRetryButton() {
    const retryButton = document.getElementById('retryButton');
    retryButton.style.display = 'none';
  }
  
  function showCongratulationsScreen() {
    const congratulationsScreen = document.getElementById('congratulations');
    congratulationsScreen.style.display = 'block';
  }
  
  function hideCongratulationsScreen() {
    const congratulationsScreen = document.getElementById('congratulations');
    congratulationsScreen.style.display = 'none';
  }
  
  // Initially hide questions except the first one
  for (let i = 2; i <= 4; i++) {
    const questionElement = document.getElementById(`question${i}`);
    questionElement.style.display = 'none';
  }
  
  // Initially hide retry button and congratulations screen
  hideRetryButton();
  hideCongratulationsScreen();