

//global variables assigned and declared
let nextButton = document.querySelector('#next_button');
let startButton = document.querySelector("#start_button");
let resultsButton = document.querySelector('#see_results')
let questionElement = document.querySelector('#questions');
let mainCard = document.querySelector('#main_card');
let answerContainer = document.querySelector('#answer_container');
let answerList = document.querySelector("#answer_list");
let secondsLeft = 15
let time = document.querySelector("#time")
let clock = document.querySelector('#clock')
let resultsCard = document.querySelector('#results_card')


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

//Sets eventlistner to the nextbutton to move to the next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})
// starts countdown timer and ends quiz at 0 seconds.
function setTime() { 
    timerInterval = setInterval(function () {
        secondsLeft--;
        time.innerText = secondsLeft + " Seconds left";
        if (secondsLeft === 0) {
            resetState(questionElement.innerText = "END OF QUIZ");
            clearInterval(timerInterval);
            alert('Times up!')
            secondsLeft = 15;
            resultsButton.classList.remove('hide')
        }
        resultsButton.addEventListener('click', showResults)
    }, 1000);
}
//removes the #main_card and #clock element.  I don't know why I have to explicitly target and style these vs. .classList.add('hide') for clock and mainCard variables... see comment on line 14 in index.html.
function showResults(){
    document.getElementById("clock").style.display = 'none';
    document.getElementById('main_card').style.display = 'none';
    resultsCard.classList.remove('hide');
    startButton.innerText = 'restart';
    startButton.classList.remove('hide')
    resultsButton.classList.add('hide')
}

//This function starts the quiz by removing the hide class from the answercontainer and randomizing the questions to be inserted.
function startQuiz() {
        document.getElementById("clock").style.display = 'flex';
        document.getElementById('main_card').style.display = 'flex';
        resultsCard.classList.add('hide');
        console.log('testing');
        answerContainer.classList.remove('hide');
        shuffled = q_and_a.sort(() => Math.random() - .5);
        currentQuestionIndex = 0;
        startButton.classList.add('hide');
        setTime()
        nextQuestion();
    }

//envokes showQuestion which then inserts the randomized question with associated answers.
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

//prevents answers list form accumulating
function resetState() {
    nextButton.classList.add("hide")
    while (answerList.firstChild) {
        answerList.removeChild
        (answerList.firstChild)
    }
}

//selects answer and shows the correct answer in green and wrong answer in red.
function selectAnswer(e) {
    Array.from(answerList.children).forEach(selection => {
        setStatusClass(selection, selection.dataset.correct)
    })
    if (shuffled.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
        }else {
            resetTime()
            resetState(questionElement.innerText = "END OF QUIZ");
            resultsButton.classList.remove('hide')
        }
        resultsButton.addEventListener('click', showResults)
    }

function resetTime(){
        resetState(questionElement.innerText = "END OF QUIZ");
        clearInterval(timerInterval);
        secondsLeft = 15;
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