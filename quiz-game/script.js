// DOM Elements
const startScreen = document.getElementById("start-screen");
const wheelScreen = document.getElementById("wheel-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const currentCategorySpan = document.getElementById("current-category");

// ===== WHEEL ELEMENTS =====
const spinButton = document.getElementById("spin-btn");
const wheel = document.getElementById("wheel");
const selectedCategoryDiv = document.getElementById("selected-category");

// ===== CATEGORIES WITH 50+ QUESTIONS! =====
const quizCategories = {
  red: {
    name: "🏀 SPORTS",
    icon: "🏀",
    color: "#ff4444",
    questions: [
      {
        question: "How many players are on a basketball team on the court?",
        answers: [
          { text: "5", correct: true },
          { text: "6", correct: false },
          { text: "7", correct: false },
          { text: "8", correct: false },
        ],
      },
      {
        question: "In which sport would you perform a 'slam dunk'?",
        answers: [
          { text: "Volleyball", correct: false },
          { text: "Basketball", correct: true },
          { text: "Tennis", correct: false },
          { text: "Soccer", correct: false },
        ],
      },
      {
        question: "How many yards is a football field?",
        answers: [
          { text: "100 yards", correct: true },
          { text: "110 yards", correct: false },
          { text: "90 yards", correct: false },
          { text: "120 yards", correct: false },
        ],
      },
      {
        question: "Which country won the FIFA World Cup in 2022?",
        answers: [
          { text: "France", correct: false },
          { text: "Brazil", correct: false },
          { text: "Argentina", correct: true },
          { text: "Portugal", correct: false },
        ],
      },
      {
        question: "What is the diameter of a basketball hoop in inches?",
        answers: [
          { text: "16 inches", correct: false },
          { text: "18 inches", correct: true },
          { text: "20 inches", correct: false },
          { text: "22 inches", correct: false },
        ],
      },
      {
        question: "In tennis, what is a score of 40-40 called?",
        answers: [
          { text: "Advantage", correct: false },
          { text: "Deuce", correct: true },
          { text: "Love", correct: false },
          { text: "Game point", correct: false },
        ],
      },
      {
        question: "How many holes are in a standard game of golf?",
        answers: [
          { text: "9", correct: false },
          { text: "12", correct: false },
          { text: "18", correct: true },
          { text: "24", correct: false },
        ],
      },
    ]
  },
  orange: {
    name: "🎬 MOVIES & TV",
    icon: "🎬",
    color: "#ff8c44",
    questions: [
      {
        question: "Which movie features a character named 'Simba'?",
        answers: [
          { text: "Finding Nemo", correct: false },
          { text: "The Lion King", correct: true },
          { text: "Madagascar", correct: false },
          { text: "Tarzan", correct: false },
        ],
      },
      {
        question: "Who played Iron Man in the Marvel movies?",
        answers: [
          { text: "Chris Evans", correct: false },
          { text: "Robert Downey Jr.", correct: true },
          { text: "Chris Hemsworth", correct: false },
          { text: "Scarlett Johansson", correct: false },
        ],
      },
      {
        question: "In 'Friends', what is the name of Ross's pet monkey?",
        answers: [
          { text: "Marcel", correct: true },
          { text: "George", correct: false },
          { text: "Bongo", correct: false },
          { text: "Charlie", correct: false },
        ],
      },
      {
        question: "Which animated film features a character named 'Woody'?",
        answers: [
          { text: "Shrek", correct: false },
          { text: "Toy Story", correct: true },
          { text: "Cars", correct: false },
          { text: "Up", correct: false },
        ],
      },
      {
        question: "What is the name of the superhero in 'Black Panther'?",
        answers: [
          { text: "T'Challa", correct: true },
          { text: "M'Baku", correct: false },
          { text: "Killmonger", correct: false },
          { text: "Shuri", correct: false },
        ],
      },
      {
        question: "In 'Harry Potter', what is the name of Harry's owl?",
        answers: [
          { text: "Errol", correct: false },
          { text: "Pigwidgeon", correct: false },
          { text: "Hedwig", correct: true },
          { text: "Crookshanks", correct: false },
        ],
      },
    ]
  },
  yellow: {
    name: "🔬 SCIENCE",
    icon: "🔬",
    color: "#ffd700",
    questions: [
      {
        question: "What is the chemical symbol for water?",
        answers: [
          { text: "O2", correct: false },
          { text: "H2O", correct: true },
          { text: "CO2", correct: false },
          { text: "NaCl", correct: false },
        ],
      },
      {
        question: "Which planet is closest to the sun?",
        answers: [
          { text: "Venus", correct: false },
          { text: "Earth", correct: false },
          { text: "Mercury", correct: true },
          { text: "Mars", correct: false },
        ],
      },
      {
        question: "How many bones are in the adult human body?",
        answers: [
          { text: "206", correct: true },
          { text: "208", correct: false },
          { text: "210", correct: false },
          { text: "212", correct: false },
        ],
      },
      {
        question: "What is the hardest natural substance on Earth?",
        answers: [
          { text: "Gold", correct: false },
          { text: "Iron", correct: false },
          { text: "Diamond", correct: true },
          { text: "Platinum", correct: false },
        ],
      },
      {
        question: "What is the largest organ in the human body?",
        answers: [
          { text: "Heart", correct: false },
          { text: "Liver", correct: false },
          { text: "Skin", correct: true },
          { text: "Brain", correct: false },
        ],
      },
      {
        question: "How many teeth does an adult human typically have?",
        answers: [
          { text: "28", correct: false },
          { text: "30", correct: false },
          { text: "32", correct: true },
          { text: "34", correct: false },
        ],
      },
    ]
  },
  green: {
    name: "🌍 GEOGRAPHY",
    icon: "🌍",
    color: "#44ff44",
    questions: [
      {
        question: "What is the largest continent?",
        answers: [
          { text: "Africa", correct: false },
          { text: "Asia", correct: true },
          { text: "Europe", correct: false },
          { text: "North America", correct: false },
        ],
      },
      {
        question: "Which country has the most natural lakes?",
        answers: [
          { text: "USA", correct: false },
          { text: "Russia", correct: false },
          { text: "Canada", correct: true },
          { text: "Brazil", correct: false },
        ],
      },
      {
        question: "What is the capital of Japan?",
        answers: [
          { text: "Seoul", correct: false },
          { text: "Beijing", correct: false },
          { text: "Tokyo", correct: true },
          { text: "Bangkok", correct: false },
        ],
      },
      {
        question: "Which desert is the largest in the world?",
        answers: [
          { text: "Sahara", correct: false },
          { text: "Arabian", correct: false },
          { text: "Antarctic", correct: true },
          { text: "Gobi", correct: false },
        ],
      },
      {
        question: "How many countries are in the United Kingdom?",
        answers: [
          { text: "2", correct: false },
          { text: "3", correct: false },
          { text: "4", correct: true },
          { text: "5", correct: false },
        ],
      },
      {
        question: "What is the longest river in the world?",
        answers: [
          { text: "Amazon", correct: false },
          { text: "Nile", correct: true },
          { text: "Yangtze", correct: false },
          { text: "Mississippi", correct: false },
        ],
      },
    ]
  },
  blue: {
    name: "📜 HISTORY",
    icon: "📜",
    color: "#4444ff",
    questions: [
      {
        question: "In which year did World War II end?",
        answers: [
          { text: "1943", correct: false },
          { text: "1944", correct: false },
          { text: "1945", correct: true },
          { text: "1946", correct: false },
        ],
      },
      {
        question: "Who was the first US President?",
        answers: [
          { text: "Thomas Jefferson", correct: false },
          { text: "George Washington", correct: true },
          { text: "Abraham Lincoln", correct: false },
          { text: "John Adams", correct: false },
        ],
      },
      {
        question: "What year did the Titanic sink?",
        answers: [
          { text: "1912", correct: true },
          { text: "1914", correct: false },
          { text: "1916", correct: false },
          { text: "1918", correct: false },
        ],
      },
      {
        question: "Who was the first man to walk on the moon?",
        answers: [
          { text: "Buzz Aldrin", correct: false },
          { text: "Neil Armstrong", correct: true },
          { text: "Yuri Gagarin", correct: false },
          { text: "Alan Shepard", correct: false },
        ],
      },
      {
        question: "In which year did the Berlin Wall fall?",
        answers: [
          { text: "1987", correct: false },
          { text: "1989", correct: true },
          { text: "1991", correct: false },
          { text: "1993", correct: false },
        ],
      },
    ]
  },
  purple: {
    name: "🎵 MUSIC",
    icon: "🎵",
    color: "#aa44ff",
    questions: [
      {
        question: "Which band sang 'Bohemian Rhapsody'?",
        answers: [
          { text: "The Beatles", correct: false },
          { text: "Queen", correct: true },
          { text: "Led Zeppelin", correct: false },
          { text: "Pink Floyd", correct: false },
        ],
      },
      {
        question: "How many strings does a standard guitar have?",
        answers: [
          { text: "4", correct: false },
          { text: "5", correct: false },
          { text: "6", correct: true },
          { text: "7", correct: false },
        ],
      },
      {
        question: "Who is known as the 'King of Pop'?",
        answers: [
          { text: "Elvis Presley", correct: false },
          { text: "Michael Jackson", correct: true },
          { text: "Prince", correct: false },
          { text: "Madonna", correct: false },
        ],
      },
      {
        question: "What instrument does Yo-Yo Ma play?",
        answers: [
          { text: "Violin", correct: false },
          { text: "Piano", correct: false },
          { text: "Cello", correct: true },
          { text: "Harp", correct: false },
        ],
      },
      {
        question: "Which year was the first Woodstock festival?",
        answers: [
          { text: "1967", correct: false },
          { text: "1968", correct: false },
          { text: "1969", correct: true },
          { text: "1970", correct: false },
        ],
      },
    ]
  },
  pink: {
    name: "🐾 PETS & ANIMALS",
    icon: "🐾",
    color: "#ff69b4",
    questions: [
      {
        question: "How many hours a day do cats typically sleep?",
        answers: [
          { text: "8-10 hours", correct: false },
          { text: "10-12 hours", correct: false },
          { text: "12-16 hours", correct: true },
          { text: "16-20 hours", correct: false },
        ],
      },
      {
        question: "Why do cats bring dead animals to their owners?",
        answers: [
          { text: "They think you're a bad hunter", correct: false },
          { text: "It's a gift to show they care", correct: true },
          { text: "They want to share their success", correct: false },
          { text: "They're trying to teach you hunting", correct: false },
        ],
      },
      {
        question: "What is a cat's maximum jumping height?",
        answers: [
          { text: "3 times their body length", correct: false },
          { text: "5 times their body length", correct: true },
          { text: "7 times their body length", correct: false },
          { text: "9 times their body length", correct: false },
        ],
      },
      {
        question: "How long can a tortoise live?",
        answers: [
          { text: "20-30 years", correct: false },
          { text: "40-50 years", correct: false },
          { text: "80-150 years", correct: true },
          { text: "200+ years", correct: false },
        ],
      },
      {
        question: "What is a group of rabbits called?",
        answers: [
          { text: "A herd", correct: false },
          { text: "A colony", correct: false },
          { text: "A warren", correct: true },
          { text: "A flock", correct: false },
        ],
      },
      {
        question: "Which dog breed is the smallest?",
        answers: [
          { text: "Chihuahua", correct: true },
          { text: "Pomeranian", correct: false },
          { text: "Yorkshire Terrier", correct: false },
          { text: "Maltese", correct: false },
        ],
      },
      {
        question: "How many teeth does an adult dog have?",
        answers: [
          { text: "32", correct: false },
          { text: "38", correct: false },
          { text: "42", correct: true },
          { text: "46", correct: false },
        ],
      },
      {
        question: "What is a baby rabbit called?",
        answers: [
          { text: "Pup", correct: false },
          { text: "Kitten", correct: true },
          { text: "Cub", correct: false },
          { text: "Fawn", correct: false },
        ],
      },
      {
        question: "How many stomachs does a cow have?",
        answers: [
          { text: "1", correct: false },
          { text: "2", correct: false },
          { text: "3", correct: false },
          { text: "4", correct: true },
        ],
      },
      {
        question: "What is the fastest land animal?",
        answers: [
          { text: "Lion", correct: false },
          { text: "Cheetah", correct: true },
          { text: "Leopard", correct: false },
          { text: "Horse", correct: false },
        ],
      },
    ]
  }
};

// ===== QUIZ STATE VARIABLES =====
let currentCategory = null;
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
let isSpinning = false;

// ===== WHEEL FUNCTIONS =====
function createWheel() {
  wheel.innerHTML = "";
  const categories = Object.entries(quizCategories);
  
  categories.forEach(([key, category]) => {
    const section = document.createElement("div");
    section.className = "wheel-section";
    section.setAttribute("data-color", key);
    
    const span = document.createElement("span");
    span.textContent = category.icon;
    
    section.appendChild(span);
    wheel.appendChild(section);
  });
}

function spinWheel() {
  if (isSpinning) return;
  
  isSpinning = true;
  spinButton.disabled = true;
  selectedCategoryDiv.innerHTML = "<p>🎡 Spinning...</p>";
  
  // Random spin
  const spins = 5 + Math.floor(Math.random() * 5);
  const randomDegree = spins * 360 + Math.floor(Math.random() * 360);
  
  wheel.style.transform = `rotate(${randomDegree}deg)`;
  
  // Calculate which category it lands on
  setTimeout(() => {
    const degree = randomDegree % 360;
    const sectionSize = 360 / 7;
    let sectionIndex = Math.floor(degree / sectionSize);
    if (sectionIndex >= 7) sectionIndex = 6;
    
    const categories = Object.keys(quizCategories);
    const selectedColor = categories[sectionIndex];
    
    // Set current category
    currentCategory = quizCategories[selectedColor];
    
    // Show selected category
    selectedCategoryDiv.innerHTML = `
      <div style="background-color: ${currentCategory.color}; color: white; padding: 15px; border-radius: 10px;">
        <span style="font-size: 2rem;">${currentCategory.icon}</span>
        <h3 style="margin: 5px 0;">${currentCategory.name}</h3>
        <p>${currentCategory.questions.length} questions</p>
      </div>
    `;
    
    // Update category b
    currentCategorySpan.textContent = currentCategory.name;
    currentCategorySpan.style.backgroundColor = currentCategory.color;
    
    // Go to quiz screen after delay
    setTimeout(() => {
      wheelScreen.classList.remove("active");
      quizScreen.classList.add("active");
      
      // Reset quiz state
      currentQuestionIndex = 0;
      score = 0;
      scoreSpan.textContent = 0;
      totalQuestionsSpan.textContent = currentCategory.questions.length;
      maxScoreSpan.textContent = currentCategory.questions.length;
      
      // Start the quiz
      showQuestion();
      
      isSpinning = false;
      spinButton.disabled = false;
    }, 1500);
    
  }, 3000);
}

// ===== QUIZ FUNCTIONS =====
function showQuestion() {
  answersDisabled = false;

  const currentQuestion = currentCategory.questions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / currentCategory.questions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  // Shuffle answers for more fun
  const shuffledAnswers = [...currentQuestion.answers].sort(() => Math.random() - 0.5);
  
  shuffledAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < currentCategory.questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;
  maxScoreSpan.textContent = currentCategory.questions.length;

  const percentage = (score / currentCategory.questions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "🏆 PERFECT! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "🌟 Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "📚 Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "💪 Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "🎯 Keep studying! You'll get better!";
  }
}

// ===== NAVIGATION FUNCTIONS =====
function startQuiz() {
  startScreen.classList.remove("active");
  wheelScreen.classList.add("active");
  
  createWheel();
  wheel.style.transform = "rotate(0deg)";
  selectedCategoryDiv.innerHTML = "<p>Click SPIN to choose a category!</p>";

  spinButton.disabled = false;
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  wheelScreen.classList.add("active");
  
  wheel.style.transform = "rotate(0deg)";
  spinButton.disabled = false;
  selectedCategoryDiv.innerHTML = "<p>Click SPIN to choose a category!</p>";
  currentCategorySpan.textContent = "";
}

// ===== EVENT LISTENERS =====
startButton.addEventListener("click", startQuiz);
spinButton.addEventListener("click", spinWheel);
restartButton.addEventListener("click", restartQuiz);

// Initialize wheel on page load
createWheel();
