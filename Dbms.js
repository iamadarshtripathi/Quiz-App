const quizDB = [
    {
        question: "Q1: What do you mean by one to many relationships?",
        a: "One class may have many teachers",
        b: "One teacher can have many classes",
        c: "Many classes may have many teachers",
        d: "Many teachers may have many classes",
        ans: "ans2"
    },

    {
        question: "Q2: A huge collection of the information or data accumulated form several different sources is known as ?",
        a: "Data Management",
        b: "Data Mining",
        c: "Data Warehouse",
        d: "Both B and C",
        ans: "ans3"
    },

    {
        question: "Q3: Which one of the following refers to the 'data about data'?",
        a: "Directory",
        b: "Sub Data",
        c: "Warehouse",
        d: "Meta Data",
        ans: "ans4"
    },

    {
        question: "Q4: To which of the following the term 'DBA' referred?",
        a: "Data Bank Administrator",
        b: "Database Administrator",
        c: " Data Administrator",
        d: "None of the above",
        ans: "ans2"
    },

    {
        question: "Q5:  Rows of a relation are known as the?",
        a: "Degreee",
        b: "Tuples",
        c: "Entity",
        d: "All the of these",
        ans: "ans4"
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