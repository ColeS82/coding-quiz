const questions = [
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
let answersElement = document.getElementById("answers");
let answerButtons = document.getElementById("answerbtns")
let questionElement = document.getElementById("question");
let startButton = document.getElementById("start-Btn");
let nextButton = document.getElementById("next-Btn")
let shuffled, currentQuestionIndex

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})



function startQuiz() {
    console.log("Testing!");
    answersElement.classList.remove("hide");
    startButton.classList.add("hide");
    nextButton.classList.remove("hide");
    shuffled = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    nextQuestion();
}

function nextQuestion() {
    resetState()
    showQuestion(shuffled[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answers => {const button = document.createElement("li")
    button.innerText = answers.text;
    button.classList.add("btns");
    if (answers.correct){
        button.dataset.correct = answers.correct
    }
    button.addEventListener("click", selectAnswer);
    answerbtns.appendChild(button)
    });
}

function resetState(){
    nextButton.classList.add('hide');
    while (answerbtns.firstChild){
        answerbtns.removeChild(answerbtns.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffled.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
    }else{
        startButton.innerText = 'See Results';
        startButton.classList.remove('hide');
    }
    startButton.addEventListener('click', results);
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function results(){
    alert("results")
}