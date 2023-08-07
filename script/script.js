//Wait for the DOM to finish loading before running quiz
document.addEventListener('DOMContentLoaded', runQuiz);

//Define questions and multiple choice answers in an array 
const questions = [
    {
        question: "What is your preferred activity level?",
        answer: ["Easy and leisurely", "Moderate with some challenges", "Strenuous and adventurous"],
    },
    {
        question: "How do you feel about heights and steep terrains?",
        answer: ["Not a fan; prefer flat and low-altitude landscapes", "I'm okay with some heights and moderate inclines", "Love them! Bring on the adrenaline and spectacular views"],
    },
    {
        question: "How much time are you willing to spend on the activity?",
        answer: ["A few hours for a rewarding experience", "Short outings or half-day trips", "Full-day out"],
    },
    {
        question: "How often do you engage in physical activities or exercise?",
        answer: ["Rarely or occasionally, but I enjoy leisurely walks", "I exercise moderately a few times a week", "I'm very active and exercise regularly"],
    },
    {
        question: "What do you enjoy the most during outdoor activities? ",
        answer: ["Taking in the scenery and enjoying the surroundings", "A mix of physical activity and sightseeing", "The physical challenge"],
    },

];

//Set question index to 0 at start of quiz
let currenQuestionIndex = 0;

//Function to run through questions and answers 
function askQuestions() {

    // Get current question and answers from questions array
    const currentQuestion = questions[currenQuestionIndex];
    const answerA = currentQuestion.answer[0];
    const answerB = currentQuestion.answer[1];
    const answerC = currentQuestion.answer[2];

    //Update the form with new questions and answers
    document.getElementById('quetion').textContent = currentQuestion.question;
    document.getElementById('label-a').textContent = answerA;
    document.getElementById('label-b').textContent = answerB;
    document.getElementById('label-c').textContent = answerC;

    //Increment through question index by one
    currenQuestionIndex ++;
}

//Function to check if user has selected a radio button before proceeding
function validateUserInput () {

}

//Function to check if user has selected the final radio button before submitting results
function validateUserSubmission () {

}

//Function to store user inputs into an array
function storeUserAnswers() {

}

//Function to tally up user selection points
function calculateScore() {

}

//Function to display results on score outcome
function showResults() {

}

//Function to run quiz, calling other functions when required
function runQuiz() {

}