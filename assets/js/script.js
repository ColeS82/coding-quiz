const startButton = document.getElementById("start-Btn");

startButton.addEventListener('click', startQuiz)


function startQuiz() {
    console.log("Testing!");
    document.getElementById("answers").classList.remove("hide");
    document.getElementById("start-Btn").classList.add("hide");
    document.getElementById("next-Btn").classList.remove("hide");
    nextQuestion();
}

function nextQuestion() {

}

function selectAnswer() {

}