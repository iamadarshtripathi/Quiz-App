const quizDB = [
    {
        question: "Q1: Which of the following is the correct syntax to print the message in C++ language?",
        a: "cout <<'Hello world!';",
        b: "Cout <<'Hello world!';",
        c: "Out <<'Hello world!';",
        d: "None of the above",
        ans: "ans1"
    },

    {
        question: "Q2: Which of the following is the original creator of the C++ language?",
        a: "Dennis ritchie",
        b: "ken Thompson",
        c: "Bjarne Stroustrup",
        d: "Brian Kernighan",
        ans: "ans3"
    },

    {
        question: "Q3: The C++ language is ______ object-oriented language?",
        a: "Pure Object Oriented",
        b: "Not Object Oriented",
        c: "Semi Object Oriented or Partial Object Oriented",
        d: "None of the above",
        ans: "ans3"
    },

    {
        question: "Q4: C++ is a ___ type of language?",
        a: "High-Level Language",
        b: "Low-Level Language",
        c: "Middle-Level Language",
        d: "None of the above",
        ans: "ans3"
    },

    {
        question: "Q5: Which one of the following represents the tab?",
        a: "\n",
        b: "\t",
        c: "\r",
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