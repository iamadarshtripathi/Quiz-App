const quizDB = [
    {
        question: "Q1: Which of the following is the correct name of React.js?",
        a: "React",
        b: "React.js",
        c: "ReactJS",
        d: "All of the above",
        ans: "ans4"
    },

    {
        question: "Q2: What of the following is used in React.js to increase performance?",
        a: "Original DOM",
        b: "Virtual DOM",
        c: "Both A and B ",
        d: "None",
        ans: "ans2"
    },

    {
        question: "Q3:  Which of the following acts as the input of a class-based component?",
        a: "Class",
        b: "Factory",
        c: "Render",
        d: "Props",
        ans: "ans4"
    },

    {
        question: "Q4: Which of the following keyword is used to create a class inheritance?",
        a: "Create",
        b: "Inherits",
        c: "Extends",
        d: "This",
        ans: "ans3"
    },

    {
        question: "Q5: What is a state in React?",
        a: "A permanent storage",
        b: "Internal storage of the component",
        c: "External storage of the component",
        d: "None of these",
        ans: "ans2"
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