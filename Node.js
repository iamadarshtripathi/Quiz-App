const quizDB = [
    {
        question: "Q1: Which of the following statement is correct?",
        a: "js is Server Side Language",
        b: "js is the Client Side Language",
        c: "js is both Server Side and Client Side Language",
        d: "None of the above",
        ans: "ans1"
    },

    {
        question: "Q2: What does the REPL stand for?",
        a: "REPL stands for 'Read Eval Print Loop'",
        b: "REPL stands for 'Research Eval Program Learn'",
        c: "REPL stands for 'Read Earn Point Learn'",
        d: "REPL stands for 'Read Eval Point Loop'",
        ans: "ans1"
    },

    {
        question: "Q3: In which language is Node.js written?",
        a: "JavaScript",
        b: "C",
        c: "C++",
        d: "All the above",
        ans: "ans4"
    },

    {
        question: "Q4: Which of the following extension is used to save the Node.js files?",
        a: ".js",
        b: ".node",
        c: ".java",
        d: ".txt",
        ans: "ans1"
    },

    {
        question: "Q5:The Node.js modules can be exposed using?",
        a: "expose",
        b: " module",
        c: "exports",
        d: " All of the above",
        ans: "ans3"
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