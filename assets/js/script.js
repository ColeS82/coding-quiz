

//global variables assigned and declared
let nextButton = document.querySelector('#next_button')
let startButton = document.querySelector("#start_button");
let questionElement = document.querySelector('#questions');
let mainCard = document.querySelector('#main_card');
let answerContainer = document.querySelector('#answer_container');
let answerList = document.querySelector("#answer_list");
let secondsLeft = 10
let time = document.querySelector("#time")


//This assigns but does not define.  Will be defined in later functions
let shuffled, currentQuestionIndex;

//Questions objects
const q_and_a = [
        {
            question:"What language can manipulate elements in an HTML document?",
            answers: [
            {text: "javascript", correct: true},
            {text: "css", incorrect: false},
            {text: "html", incorrect: false},
            {text: "french", incorrect: false},
            ]
        },
        {
            question:"What does HTML stand for?",
            answers: [
            {text: "Hyper-Text-Markup-Language", correct: true},
            {text: "Hot-Tub-Me-Likes", incorrect: false},
            {text: "html", incorrect: false},
            {text: "Hi-Top-Memories-Last", incorrect: false},
            ]
        },
        {
            question:"What is the language that makes this page work",
            answers: [
            {text: "css", incorrect: false},
            {text: "html", incorrect: false},
            {text: "french", incorrect: false},
            {text: "javascript", correct: true},
            ]
        }
    ]

//invokes the startQuiz funtion when start button is clecked.
startButton.addEventListener('click', startQuiz);
startButton.addEventListener('click', setTime);

//Sets eventlistner to the nextbutton to move to the next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})

//This function starts the quiz by removing the hide class from the answercontainer and randomizing the questions to be inserted.
function setTime() { 
    timerInterval = setInterval(function () {
        secondsLeft--;
        time.innerText = secondsLeft + " Seconds left";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            return;
        }
    }, 1000);
}


function startQuiz() {
        console.log('testing');
        answerContainer.classList.remove('hide');
        shuffled = q_and_a.sort(() => Math.random() - .5);
        currentQuestionIndex = 0;
        startButton.classList.add('hide');
        nextQuestion();
    }


function nextQuestion() {
    resetState()
    showQuestion(shuffled[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const selection = document.createElement('li')
        selection.innerText = answer.text;
        selection.classList.add('answer_button')
        if (answer.correct) {
            selection.dataset.correct = answer.correct
        }
        selection.addEventListener('click', selectAnswer)
        answerList.appendChild(selection)
    });
}

function resetState() {
    nextButton.classList.add("hide")
    while (answerList.firstChild) {
        answerList.removeChild
        (answerList.firstChild)
    }
}

function selectAnswer(e) {
    Array.from(answerList.children).forEach(selection => {
        setStatusClass(selection, selection.dataset.correct)
    })
    if (shuffled.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
        }else {
            startButton.innerText = 'See Results'
            startButton.classList.remove('hide')
        }
        startButton.addEventListener('click', results)
    }

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function results(){
alert("results")}