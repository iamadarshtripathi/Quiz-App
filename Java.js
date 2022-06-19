const quizDB = [
    {
        question: "Q1: Number of primitive data types in Java are?",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        ans: "ans3"
    },

    {
        question: "Q2: Automatic type conversion is possible in which of the possible cases?",
        a: "Byte to int",
        b: "Int to long",
        c: "Long to int",
        d: "Short to int",
        ans: "ans2"
    },

    {
        question: "Q3: Select the valid statement.",
        a: "char[] ch = new char(5)",
        b: "char[] ch = new char[5]",
        c: "char[] ch = new char()",
        d: "char[] ch = new char[]",
        ans: "ans2"
    },

    {
        question: "Q4: Arrays in java are?",
        a: "Object References",
        b: "Primitive data type",
        c: "objects",
        d: "None",
        ans: "ans3"
    },

    {
        question: "Q5: What is Java Language?",
        a: "Object Oriented Language",
        b: "Scripting Language",
        c: "Both Object Oriented Language and Scripting Language",
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