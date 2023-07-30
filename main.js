const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text My Language",
        c: "HyperText Markup Languages",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: &lt;a&gt; and &lt;/a&gt; are the tags used for...",
        a: "Adding image",
        b: "Aligning text",
        c: "Audio-voiced text",
        d: "Adding links to your page",
        ans: "ans4"
    },
    {
        question: "Q3: Choose the correct HTML tag to make a text italic",
        a: "&lt;i&gt;",
        b: "&lt;italic&gt;",
        c: "&lt;it&gt;",
        d: "&lt;il&gt;",
        ans: "ans1"
    },
    {
        question: "Q4: What does the &lt;br&gt; tag add to your webpage?",
        a: "Long break",
        b: "Paragraph break",
        c: "Line break",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q5: Which tag will you add to specify a font for your whole page?",
        a: "&lt;defaultfont&gt;",
        b: "&lt;targetfont&gt;",
        c: "&lt;basefont&gt;",
        d: "&lt;font&gt;",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    })
    return answer;
}

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    }

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML =`
        <h3> You Scored ${score}/${quizDB.length} ✌️ </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
})