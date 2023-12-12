import questions from "./questions.js";

let currentQuestionIndex = 0;

// Button to open the modal
const openModalButton = document.getElementById('openModalButton');
// Modal
const questionModal = document.getElementById('questionModal');
// Button to close the modal
const closeModalButton = document.getElementById('closeModalButton');

// Add an event listener for closing the modal
closeModalButton.addEventListener('click', () => {
    // Reset the question index when the modal is closed
    currentQuestionIndex = 0;
    questionModal.style.display = 'none';
    showQuestion(); // Show the first question when the modal is reopened
});

// Add an event listener for clicking the button
openModalButton.addEventListener('click', () => {
    // Reset the question index when the modal is closed
    currentQuestionIndex = 0;
    questionModal.style.display = 'block';
    showQuestion(); // Show the first question when the modal is reopened
});

// Function to show the current question
function showQuestion () {
    const questionContainer = document.getElementById('questions');
    const optionsContainer = document.getElementById('options');
    const explanationContainer = document.getElementById('explanation');
    const currentQuestion = questions[currentQuestionIndex];

    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.type = 'button';
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => handleAnswer(option));

        optionsContainer.appendChild(optionButton);
    });

    explanationContainer.textContent = "";
}

// Function to check the user's answer
function handleAnswer(userAnswer) {
    const currentQuestion = questions[currentQuestionIndex];

    if (userAnswer === currentQuestion.correctAnswer) {

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            document.getElementById('questionContainer').innerHTML = "<h2>Thank you for answering all questions!</h2>";
        }
    } else {
        const explanationContainer = document.getElementById('explanation');
        explanationContainer.textContent = currentQuestion. explanation;
    }
}