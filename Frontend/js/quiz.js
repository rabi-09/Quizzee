let questions = [];
let subject = null;
let currentQuestionIndex = 0;
let totalQuestions = 0;
let correctAnswer = 0;


const quizTitle = document.getElementById('quiz-title');
const queCounter = document.getElementById('question-counter');

document.addEventListener('DOMContentLoaded', () => {
    subject = getTitle();
    if (subject) {
        document.title = `${subject} Quiz | Quizzee`;
        quizTitle.textContent = `${subject} Quiz`;
    }
    fetchQuestion();
});

function getTitle() {
    const params = new URLSearchParams(window.location.search);
    let subjectParam = params.get('subject');
    return toTitleCase(subjectParam);
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return (txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()).replace("-", " ");
    });
}

async function fetchQuestion() {
    try {
        let apiSubject = getTitle();
        if (apiSubject === "Artificial Intelligence") apiSubject = "ai";
        else if (apiSubject === "Machine Learning") apiSubject = "ml";

        const response = await fetch(`http://localhost:9090/api/questions/${apiSubject}`);
        if (!response.ok) {
            throw new Error("Network error");
        }

        questions = await response.json();
        totalQuestions = questions.length;

        if (totalQuestions > 0) {
            displayQuestion();
        } else {
            alert("No questions available");
            window.location.href = "index.html";
        }

    } catch (error) {
        console.error("Error fetching questions:", error);
    }
}

function displayQuestion() {
    const question_text = document.getElementById("question-text");
    const option_conteiner = document.getElementById("options-container");
    const current_que = questions[currentQuestionIndex];


    question_text.textContent = current_que.questionText;
    option_conteiner.innerHTML = "";


    current_que.optionList.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option btn btn-outline-dark m-2 d-block";
        button.onclick = () => checkAnswer(option);
        option_conteiner.appendChild(button);
    });

    // Update counter
    queCounter.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
    document.getElementById('quiz-progress').style.width = `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`;
}

function checkAnswer(selectedOption) {
    const cur_que = questions[currentQuestionIndex];
    if (selectedOption === cur_que.optionList[cur_que.correctOptionIndex]) {
        correctAnswer++;
    }
    nextQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        localStorage.setItem('quizScore', correctAnswer);
        localStorage.setItem('totalQuestions', totalQuestions);
        window.location.href = 'result.html';
    }
}
