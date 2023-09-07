/*Allow long lines*/
/*jslint long*/

/*Assume Browswer environment*/
/*jslint browser*/

/*Allow unodered cases, params, properties, variables, and exports.*/
/*jslint unordered*/

/*Wait for the DOM to finish loading before running quiz*/
document.addEventListener("DOMContentLoaded", runQuiz);

/*Define questions and multiple choice answers in an array container question/answer objects*/
const questions = [{
    question: "What is your preferred activity level?",
    answer: ["Easy and leisurely", "Moderate with some challenges", "Strenuous and adventurous"]
}, {
    question: "How do you feel about heights and steep terrains?",
    answer: ["Not a fan; prefer flat landscapes", "I'm okay with some heights and moderate inclines", "Love them! Bring on the adrenaline and spectacular views"]
}, {
    question: "How much time are you willing to spend on the activity?",
    answer: ["A few hours for a rewarding experience", "Short outings or half-day trips", "Full-day out"]
}, {
    question: "How often do you engage in physical activities or exercise?",
    answer: ["Rarely or occasionally, but I enjoy leisurely walks", "I exercise moderately a few times a week", "I'm very active and exercise regularly"]
}, {
    question: "What do you enjoy the most during outdoor activities? ",
    answer: ["Taking in the scenery and enjoying the surroundings", "A mix of physical activity and sightseeing", "The physical challenge"]
}];

/*Define 11 possible results as objects containing name, description and accompanied image*/
const quizAnswers = [{
    name: "Rhossili Bay Beach",
    description: "3 miles of sandy shore, encompassing one of Gower's most famous landmarks, Worms Head. The views are incomparable and are best enjoyed from one of the many walking routes, which feature the beach, Worm's Head and the cliffs, you may even see some basking seals or dolphins playing in the surf. And of course, Rhossili Bay is part of the Gower Coast Path.",
    image: "assets/images/results/rhossili-bay-beach.webp",
    url: "https://www.visitswanseabay.com/inspirations/beach-guide/rhossili-bay-beach/"
}, {
    name: "Monknash Beach",
    description: "Monknash Beach is a tranquil and hidden beach. However, getting there does require a little bit more effort than some of the other beaches in the region. To get to the beach, you need to take a short walk along a tree-lined path that follows Nash Brook all the way to the beach. The walk is very scenic; keep an eye out for the post-medieval ruins of the Blaen-y-cwm Corn Mill, which you can explore along the way.",
    image: "assets/images/results/monknash-beach.webp",
    url: "https://discovertheoutdoors.co.uk/monknash-beach/"
}, {
    name: "Castle Coch taff trail",
    description: "A fairly straightforward walk that starts with an incline, takes in Castell Coch, then heads out towards the Taff Trail, returning along this. This walk can be as long or as short as you wish, taking in the woodland and river scenery as you explore on.",
    image: "assets/images/results/castle-coch.webp",
    url: "http://edtechie.net/tonwalks/castell-coch/castell-coch-taff-trail/"
}, {
    name: "Saundersfoot to Monkstone point",
    description: "Walk along the cliff side through the woods, or wait for low tide and take an easier stroll on the beach. Arriving at Monkstone point you will be greeted with breathtaking views of both Saundersfoot and Tenby from either side. Enjoy the secluded beach Monkstone has to offer as well",
    image: "assets/images/results/saundersfoot.webp",
    url: "https://www.visitpembrokeshire.com/explore-pembrokeshire/beaches/monkstone"
}, {
    name: "Sgwd Ddwli Uchaf Waterfall",
    description: "This waterfall is located on the Nedd Fechan and is one of three waterfalls along this section of the river. The falls has a drop of about 15 feet. It is best to approach this from the bottom which will entail leaving the main path a short distance from the falls.",
    image: "assets/images/results/sgwd-ddwli-uchaf-waterfall.webp",
    url: "https://www.waymarking.com/waymarks/WMA9ZE_Sgwd_Ddwli_Uchaf_Upper_Gushing_Falls_Pontneddfechan_Powys_Wales"
}, {
    name: "Fan Y Big",
    description: "The walk to the top of Fan y Big takes in some of the most incredible ridge lines in the Brecon Beacons. It's a steep start, but then you have around 6km of easy ridge line walking, with simply sensational views all the way. Reaching the top is the icing on the cake, and if you luck out with good conditions, it's a hard spot to leave.",
    image: "assets/images/results/fan-y-big.webp",
    url: "https://www.walkmyworld.com/posts/fan-y-big"
}, {
    name: "Gwaun Cerrig Llwydion",
    description: "Starting with a short, but steep ascent from Blaen y Glyn Uchaf carpark, you are rewarded with spectacular views of Pen Y Fan and it's surrounding Mountains. In more of a secluded area, be sure to check out the river Caerfanell which begins flowing in from the topof Gwaun Cerrig Llwydion ridge",
    image: "assets/images/results/gwaun-cerrig-llwydion.webp",
    url: "https://www.themountainguide.co.uk/wales/gwaun-cerrig-llwydion.htm"
}, {
    name: "Pen Y Fan",
    description: "Pen y Fan is the highest mountain in southern Britain. Deservedly popular with walkers, the views from the summit are truly incredible. Why not take a hike up at sunrise on a clear day, you will be rewarded for your early start!",
    image: "assets/images/results/pen-y-fan.webp",
    url: "https://www.visitwales.com/things-do/adventure-and-activities/walking/crowning-glory-4-ways-walk-pen-y-fan"
}, {
    name: "Elidir Trail secret waterfall",
    description: "A spellbinding walk in the Brecons, this trail offers endless crystal clear swimming holes and even a secret waterfall hidden off track. If you're up for the challenge to reach this, be mindful that you will have to cross the river twice and scamble up an offbeaten track to reach it, but its well worth the challenge.",
    image: "assets/images/results/elidir-trail-waterfall.webp",
    url: "https://ohwhataknight.co.uk/blog/how-to-reach-sgwd-einion-gam-waterfall"
}, {
    name: "Fan Fawr",
    description: "Enjoy this fun circular trail near Brecon, Powys. Generally considered a moderately challenging route, this trail is great for hiking, running, and walking, and it's unlikely you'll encounter many other people while exploring.",
    image: "assets/images/results/fan-fawr.webp",
    url: "https://www.alltrails.com/en-gb/trail/wales/powys/fan-fawr-and-beacons-reservoir"
}, {
    name: "Horseshoe Ridge",
    description: "If you're after a challenging but rewarding walk across wild Welsh moorland and up steep rocky peaks, offering commanding views over the Brecon Beacons, the Horseshoe Ridge hike is for you. At every step of the circular walk around the U-shaped Neuadd Valley and up the four peaks of Corn Du, Pen y Fan (the highest peak in southern Britain), Cribyn and Fan y Big, you'll be swept away by magnificent views stretching for miles in all directions.",
    image: "assets/images/results/horseshoe-ridge-walk.webp",
    url: "https://www.nationaltrust.org.uk/visit/wales/brecon-beacons/brecon-beacons-horseshoe-ridge-walk"
}];

/*Add event listener to next button*/
const nextButton = document.getElementById("next-button");

/*Set question index to 0 at start of quiz*/
let currentQuestionIndex = 0;

/*Function to run through questions and answers*/
function askQuestions() {

    /*Get current question and answers from questions array*/
    const currentQuestion = questions[currentQuestionIndex];
    const answerA = currentQuestion.answer[0];
    const answerB = currentQuestion.answer[1];
    const answerC = currentQuestion.answer[2];

    /*Update the form with new questions and answers*/
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("label-a").textContent = answerA;
    document.getElementById("label-b").textContent = answerB;
    document.getElementById("label-c").textContent = answerC;

    /*Increment through question index by one*/
    currentQuestionIndex = currentQuestionIndex + 1;

    /*Call this function to replace the 'Next' button content with 'Submit'*/
    updateButtonLabel();
}

/* Function to check if user has selected a radio button before proceeding to next question
Used Stack overflow to assist with selecting a checked radio button from the DOM - See readme testing */
function validateUserInput(e) {
    /*Add event listener for checked radio buttons*/
    const radioAnswer = document.querySelector("input[type='radio']:checked");
    /*If no question is selected alert user to select answer*/
    if (!radioAnswer) {
        window.alert("Please select an answer!");
        /*Else call nested if statement - code suggestion and guidance below from Sheryl Goldberg during mid mentor meeting*/
    } else {
        const selectedValue = radioAnswer.value;
        /*Call storeUserAnswers and askQuestions if next button is selected*/
        if (e.target.id === "next-button") {
            storeUserAnswers(selectedValue);
            askQuestions();
            /*Call storeUserAnswers and hideQuiz if submit button is selected*/
        } else if (e.target.id === "submit-button") {
            storeUserAnswers(selectedValue);
            hideQuiz();
        }
    }
}

/*Function to hide quiz instructions after first question*/
function hideInstructions() {
    const instructions = document.getElementById("select-answer");
    instructions.style.display = "none";
}

/*Function to clear radio button after user moves onto next question
Used code from Tutorials Point - See readme credits*/
function clearRadio() {
    let radio = document.querySelectorAll("input[type='radio']");
    radio.forEach(function (button) {
        button.checked = false;
    });

}

/*Create a new button element for submission*/
const submitButton = document.createElement("button");
submitButton.setAttribute("type", "button");
submitButton.setAttribute("id", "submit-button");
submitButton.textContent = "Submit!";

/*Function to change text content of next button to 'Submit'*/
function updateButtonLabel() {
    if (currentQuestionIndex === questions.length) {
        nextButton.replaceWith(submitButton);
    }
}

/*Empty array to store user answers*/
let userAnswers = [];

/*Function to store user inputs into an array*/
function storeUserAnswers(selectedValue) {
    //Convert user selection values to intergers and push to empty userAnswers array
    userAnswers.push(parseInt(selectedValue));
}

/* Function to tally up user selection points
Used code from FreeCodeCamp - See readme credits */
function calculateScore() {
    /*Create a variable for the sum and initialize it*/
    let sum = 0;

    /*Calculate sum using forEach() method*/
    userAnswers.forEach(function (num) {
        sum += num;
    });

    /*Return the calculated sum*/
    return sum;
}

/*Function to hide quiz form and reveal quiz results container*/
function hideQuiz() {
    /*Check if the user has selected a radio button*/
    const selectedRadio = document.querySelector("input[type='radio']:checked");
    if (selectedRadio) {
        /*Hide quiz form and show quiz results div
        Code used from w3schools - See readme credits*/
        const revealQuizResults = document.getElementById("quiz-answers");
        const hideQuizForm = document.getElementById("quiz-form");
        revealQuizResults.classList.add("show-quiz-answers");
        hideQuizForm.classList.add("hidden-quiz-container");

        /*Hide submit button when quiz results are displayed*/
        submitButton.style.display = "none";

        /*Proceed to calculate score and show results*/
        const score = calculateScore();
        showResults(score);
    }
}

/*Function to display results on score outcome*/
function showResults(score) {
    /*Determine the index of the answer based on the score
    Source and code inspired from stack overflow - See readme credits*/
    const answerIndex = Math.min(Math.max(score - 5), 10);

    /*Get the corresponding answer object based on the index*/
    const finalResult = quizAnswers[answerIndex];

    /*Get the elements by their IDs*/
    const answerNameElement = document.getElementById("answer-name");
    const answerDescriptionElement = document.getElementById("answer-description");
    const answerImageElement = document.getElementById("answer-image");
    const urlAnswers = document.getElementById("answer-url");
    const urlContainer = document.getElementById("url-info");
    const topHeading = document.getElementById("top-heading-results");
    const bottomHeadings = document.getElementById("bottom-heading-results");

    /*Populate the elements with values from the answer object*/
    answerNameElement.textContent = finalResult.name;
    answerDescriptionElement.textContent = finalResult.description;

    /*Set the alt text and source for the image*/
    answerImageElement.src = finalResult.image;
    answerImageElement.alt = finalResult.name;

    /*Populate the anchor tag element with url values*/
    urlAnswers.href = finalResult.url;

    /*Display answer name after submitting quiz*/
    answerNameElement.style.display = "block";

    /*Display answer description after submitting quiz*/
    answerDescriptionElement.style.display = "block";

    /*Display answer image after submitting quiz*/
    answerImageElement.style.display = "block";

    /*Display 'more info' url after submitting quiz*/
    urlContainer.style.display = "block";

    /*Display top heading after submitting quiz*/
    topHeading.style.display = "block";

    /*Display bottom headings after submitting quiz*/
    bottomHeadings.style.display = "block";
}

/*Function to run quiz, calling other functions when required*/
function runQuiz() {

    /*Event listener for next button to hide quiz instructions after first question is submitted*/
    nextButton.addEventListener("click", hideInstructions);

    /*Event listener for next button to check if user has submitted an input*/
    nextButton.addEventListener("click", function (e) {
        validateUserInput(e);
    });

    /*Event listener for next button to clear radio selection after each question is submitted*/
    nextButton.addEventListener("click", clearRadio);

    /*Call function to start quiz*/
    askQuestions();

    /*Event listener for submit button to check if user has submitted an input and store user answers in an array
    As a guide I used code from Plain English javascript guide - See readme credits*/
    submitButton.addEventListener("click", function (e) {
        validateUserInput(e);
    });
}