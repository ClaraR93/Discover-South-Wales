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

//Define 11 possible results as objects containing name, description and accompanied image
const quizAnswers = [
    {
        name: "Rhossili Bay Beach",
        description: "3 miles of sandy shore, encompassing one of Gower's most famous landmarks, Worms Head. The views are incomparable and are best enjoyed from one of the many walking routes, which feature the beach, Worm's Head and the cliffs, you may even see some basking seals or dolphins playing in the surf. And of course, Rhossili Bay is part of the Gower Coast Path.",
        image: "assets/images/rhossili-bay-beach.jpg"
    },
]

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
    const radioAnswer = document.querySelector("input[type='radio']:checked");
    //If no question is selected alert user to select answer
    if (!radioAnswer) {
        alert("Please select an answer!");
    //Else store user inputs into an array and call next question (askQuestion function)
    } else {
        const selectedValue = radioAnswer.value;
        storeUserAnswers(selectedValue);
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

// Create a new button element for submission
const submitButton = document.createElement("button");
submitButton.setAttribute("type", "button");
submitButton.setAttribute("id", "submit-button");
submitButton.textContent = "Submit!";

//Function to change text content of next button to 'Submit'
function updateButtonLabel () {
    if (currentQuestionIndex === questions.length) {
        nextButton.replaceWith(submitButton);
    }
}

//Empty array to store user answers
let userAnswers = [];

//Function to store user inputs into an array 
function storeUserAnswers(selectedValue) {
    //Convert user selection values to intergers and push to empty userAnswers array
    userAnswers.push(parseInt(selectedValue));   
    console.log("Answers", userAnswers);
}

//Function to tally up user selection points
// Used code from FreeCodeCamp - See readme credits
function calculateScore() {
    // create a variable for the sum and initialize it
    let sum = 0;

    // calculate sum using forEach() method
    userAnswers.forEach(num => {
        sum += num;
    });

    console.log(sum);
}

//Function to hide quiz form and reveal quiz results container
function hideQuiz() {
    // Check if the user has selected a radio button
    const selectedRadio = document.querySelector("input[type='radio']:checked");
    if (selectedRadio) {
        // Hide quiz form and show quiz results div 
        //Code used from w3schools - See readme credits
        const revealQuizResults = document.getElementById("quiz-answers");
        const hideQuiz = document.getElementById("quiz-form");
        revealQuizResults.classList.add("show-quiz-answers");
        hideQuiz.classList.add("hidden-quiz-container");

        //Hide submit button when quiz results are displayed
        submitButton.style.display = "none";

        // Proceed to calculate score and show results
        calculateScore();
        showResults();
    }
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

    //Call function to start quiz
    askQuestions();

    //Event listener for submit button to check if user has submitted an input and store user answers in an array
    submitButton.addEventListener("click", validateUserInput);

    // Event listener for submit button to check if user has submitted an input before hiding quiz form and revealing quiz results
    submitButton.addEventListener("click", hideQuiz);

}
