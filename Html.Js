const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello TO My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "HyperText Makeup Language",
        ans: "ans3"
    },

    {
        question: "Q2: What is the smallest header in HTML by default?",
        a: "h1",
        b: "h2",
        c: "h6",
        d: "h4",
        ans: "ans3"
    },

    {
        question: "Q3: How many sizes of headers are available in HTML by default?",
        a: "5",
        b: "1",
        c: "3",
        d: "6",
        ans: "ans4"
    },

    {
        question: "Q4: How to create an ordered list in HTML?",
        a: "ul",
        b: "ol",
        c: "href",
        d: "b",
        ans: "ans2"
    },

    {
        question: "Q5: What is the effect of the <b> tag?",
        a: "it convert the text within it to bold font",
        b: "it is used to write black-colored font",
        c: "it is used to change the font size",
        d: "None of these",
        ans: "ans1"
    },
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

    option1.innerHTML  = questionList.a;
    option2.innerHTML  = questionList.b;
    option3.innerHTML  = questionList.c;
    option4.innerHTML  = questionList.d;
}

loadQuestion(); 


const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked)
        {
            answer = curAnsElem.id;
        }
    });

    return answer;
};


const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}



submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans)
    {
        score++;
    };


    questionCount++;


    deselectAll();


    if(questionCount < quizDB.length)
    {
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3>You Scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }
})