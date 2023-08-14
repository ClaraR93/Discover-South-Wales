//Wait for the DOM to finish loading before running quiz
document.addEventListener("DOMContentLoaded", runQuiz);

//Define questions and multiple choice answers in an array container question/answer objects
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

//Add event listener to next button
const nextButton = document.getElementById("next-button");

//Set question index to 0 at start of quiz
let currentQuestionIndex = 0;

//Function to run through questions and answers 
function askQuestions() {

    // Get current question and answers from questions array
    const currentQuestion = questions[currentQuestionIndex];
    const answerA = currentQuestion.answer[0];
    const answerB = currentQuestion.answer[1];
    const answerC = currentQuestion.answer[2];

    //Update the form with new questions and answers
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("label-a").textContent = answerA;
    document.getElementById("label-b").textContent = answerB;
    document.getElementById("label-c").textContent = answerC;

    //Increment through question index by one
    currentQuestionIndex ++;

    //Call this function to replace the 'Next' button content with 'Submit
    updateButtonLabel();
}

//Function to check if user has selected a radio button before proceeding to next question
//Used Stack overflow to assist with selecting a checked radio button from the DOM - See readme testing
function validateUserInput () {
    //Add event listener for checked radio buttons
    const radioAnswer = document.querySelectorAll("input[type='radio']:checked");
    if (radioAnswer.length === 0) {
        alert("Please select an answer!");
    } else {
        askQuestions();
    }
}

//Function to clear radio button after user moves onto next question
//Used code from Tutorials Point - See readme credits
function clearRadio () {
    let radio = document.querySelectorAll("input[type='radio']");
    radio.forEach((button) => {
        button.checked = false;
    });
    
}

//Function to change text content of next button to 'Submit'
function updateButtonLabel () {
    if (currentQuestionIndex === questions.length) {
        nextButton.innerHTML = "Submit";
    }
}

//Empty array to store user answers
let userAnswers = [];

//Function to store user inputs into an array - **UNFINISHED FUNCTION**
function storeUserAnswers() {
    const userSelections = document.querySelectorAll("input[type='radio']:checked");
    userSelections.forEach((selectedRadio) => {
        const selectedValue = selectedRadio.value;
        userAnswers.push(selectedValue);
    });
    console.log("Answers", userAnswers);
}

//Function to tally up user selection points
function calculateScore() {

}

//Function to display results on score outcome
function showResults() {

}

//Function to run quiz, calling other functions when required
function runQuiz() {

    //Event listener for next button to check if user has submitted an input
    nextButton.addEventListener("click", validateUserInput);

    //Event listener for next button to clear radio selection after each question is submitted 
    nextButton.addEventListener("click", clearRadio);

    //Event listener for next button to record user input values in userAnswers array 
    nextButton.addEventListener("click", () => {
        storeUserAnswers();
    });

    //Call function to start quiz
    askQuestions();

}
