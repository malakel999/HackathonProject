<template>
    <footer class="quiz-container">
      <!-- <div class="header">
        <h1 class="quiz-title">NEO and Asteroid Quiz</h1>
      </div> -->
      
      <form @submit.prevent="submitQuiz" class="quiz-form">
        <div v-for="(question, index) in questions" :key="index" class="quiz-question">
          <h3 class="question-text">{{ index + 1 }}. {{ question.text }}</h3>
          <div v-for="(option, optIndex) in question.options" :key="optIndex" class="quiz-option">
            <label class="option-container">
              <input 
                type="radio"
                :name="'question-' + index"
                :value="option"
                v-model="userAnswers[index]"
              />
              <span class="option-text">{{ option }}</span>
            </label>
          </div>
        </div>
  
        <button type="submit" class="submit-button">
          Submit Quiz
        </button>
  
        <div v-if="quizSubmitted" class="result">
          <p>Your score is: {{ score }} / 6</p>
        </div>
      </form>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        quizSubmitted: false,
        score: 0,
        userAnswers: Array(6).fill(null), // Array to store user's answers
        questions: [
          {
            text: "The NEO from the BP family has an absolute magnitude of 17.5, with an estimated diameter between 0.5 km and 1.2 km. Do you think this NEO would be considered potentially dangerous in 2050?",
            correctAnswer: "Yes",
            options: ["Yes", "No"],
          },
          {
            text: "In 2040, a NEO from the BP family is considered non-dangerous. Do you think this NEO will remain non-dangerous in 2040?",
            correctAnswer: "Yes",
            options: ["Yes", "No"],
          },
          {
            text: "A NEO from the UX family has an absolute magnitude of 16.5. Based on this magnitude, will this NEO move away from or approach the Earth in the future?",
            correctAnswer: "It will approach",
            options: ["It will move away", "It will approach"],
          },
          {
            text: "The NEO from the BP family has an absolute magnitude of 19.8 and an estimated maximum diameter of 0.005 km. In 2050, it is considered non-dangerous. What do you think the estimated diameter will be in 2060?",
            correctAnswer: "Identical to 0.005 km",
            options: ["Larger than 0.005 km", "Smaller than 0.005 km", "Identical to 0.005 km"],
          },
          {
            text: "The NEO from the UA family has an estimated maximum diameter of 0.006 km in 2025 and is considered potentially dangerous. By 2060, what do you predict for its estimated maximum diameter?",
            correctAnswer: "Larger than 0.006 km",
            options: ["Smaller than 0.006 km", "Identical to 0.006 km", "Larger than 0.006 km"],
          },
          {
            text: "The NEO from the UA family has an estimated maximum diameter of 0.006 km in 2025 and is considered potentially dangerous. By 2060, what do you predict for its estimated maximum diameter?",
            correctAnswer: "Larger than 0.006 km",
            options: ["Smaller than 0.006 km", "Identical to 0.006 km", "Larger than 0.006 km"],
          },
        ],
      };
    },
    methods: {
      submitQuiz() {
        this.quizSubmitted = true;
        this.score = 0;
  
        // Calculate score
        this.questions.forEach((question, index) => {
          if (this.userAnswers[index] === question.correctAnswer) {
            this.score += 1;
          }
        });
      },
    },
  };
  </script>
  
  <style scoped>
 body, html {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 100%;
  background-color: #1a1a2e;
}

.quiz-container {
  background: url('../assets/images/starry_background.jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  padding: 30px;
}

.quiz-form {
  background-color: rgba(0, 0, 0, 0.75);
  padding: 30px;
  border-radius: 15px;
  color: white;
  max-width: 1200px;
  width: 100%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  text-align: left; /* Aligns text to the left */
}

.quiz-question {
  margin-bottom: 20px;
  text-align: left; /* Ensure question text aligns to the left */
}

.question-text {
  font-size: 20px;
  margin-bottom: 12px;
  color: #f0f0f0;
}

.option-container {
  display: flex;
  align-items: center;
  margin: 8px 0;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  text-align: left; /* Ensures options align to the left */
}

.option-container:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

input[type="radio"] {
  margin-right: 10px;
  accent-color: #00b4d8;
}

.option-text {
  font-size: 18px;
  color: #d0d0d0;
}

.submit-button {
  background-color: #00b4d8;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0077b6;
}

.result {
  margin-top: 30px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: white;
}

  </style>
