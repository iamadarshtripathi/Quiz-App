const quizDB = [
    {
        question: "Q1: The property in CSS used to change the background color of an element is?",
        a: "bgcolor",
        b: "color",
        c: "background-color",
        d: "All the above",
        ans: "ans3"
    },

    {
        question: "Q2: What is the full form of CSS?",
        a: "Control Statement Series",
        b: "Cascading Style Sheets",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans2"
    },

    {
        question: "Q3: The CSS property used to control the element's font-size is?",
        a: "text-style",
        b: "text-size",
        c: "font-size",
        d: "None of the above",
        ans: "ans3"
    },

    {
        question: "Q4: The HTML attribute used to define the inline styles is?",
        a: "style",
        b: "styles",
        c: "class",
        d: "None of the above",
        ans: "ans1"
    },

    {
        question: "Q5: The CSS property used to specify the transparency of an element is?",
        a: "Opacity",
        b: "filter",
        c: "visibility",
        d: "overlay",
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