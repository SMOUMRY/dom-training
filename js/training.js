/* ------------------------------------ */
/* --- Exercice 1 --- */

const text = document.querySelector('#ex1 .text');

function toggleNodisplay() {
    text.classList.toggle('hidden');
}

document.querySelector('#ex1 .button').addEventListener('click', toggleNodisplay);

/* --- Exercice 2 --- */

addEventListener('scroll', () => {
    // console.log("entering the function, scrolling detected");
    let getScrollValue = Math.ceil(document.documentElement.scrollTop);
    // console.log(getScrollValue);
    document.getElementById("ex2-scroll-value").innerText = getScrollValue;
});

// window.addEventListener('scroll', function(){
//     document.querySelector('#ex2-scroll-value')
//     textContent = Math.floor(window.scrollY);
// });

/* ------------------------------------ */
/* --- Exercice 3 --- */
// const btnClickMe = document.getElementById("button3");
// const animalsElement = document.getElementById("ex3-animals");
// btnClickMe.addEventListener("click", () => {
//     const firstAnimalElement = animalsElement.firstElementChild;
//     animalsElement.appendChild(firstAnimalElement)
// });

document.querySelector("#ex3-button").addEventListener("click", function (){
let animalsList = document.querySelector("#ex3-animals");
let firstAnimalElement = animalsList.firstElementChild;
animalsList.appendChild(animalsList.firstElementChild);
})
/* ------------------------------------ */
/* --- Exercice 4 --- */

const button4 = document.querySelector('#ex4 .button');
let clickCounter = 0;
button4.addEventListener('click', function (){
    clickCounter++;
    switch (clickCounter){
        case 1:
            button4.style.background = '#0000FF';
             break;
        case 2:
            button4.style.background = '#FF0000';
             break;
        case 3:
            button4.style.background = '#00FF00'; 
            clickCounter = 0;
            break;
    }
})
/* ------------------------------------ */
/* --- Exercice 5 --- */


// const allButtons = document.querySelectorAll('.ex5 .button');
// // console.log(allButtons)
// allButtons.forEach(element => {
//     element.addEventListener('mouseover', () => {
//         const color = changeColor();
//         element.style.backgroundColor = `#${color}`;
//     });

//     element.addEventListener('mouseout', () => {
//          // Réinitialiser la couleur
//         element.style.backgroundColor = '';
//     });
// });

// function changeColor() {
// return Math.floor(Math.random() * 255);
// }

function getRandomColorRgb(){
    let arrayRgb = [];
    while (arrayRgb.length < 3) {
        arrayRgb.push(Math.floor(Math.random() * 256));
    }
    return `rgb(${arrayRgb.join(',')})`;

}
console.log(getRandomColorRgb());
let btnElement = document.querySelectorAll(".js-ex5-btn .button");

btnElement.forEach(button =>{
    button.addEventListener('mouseover', function(){
        button.style.backgroundColor = getRandomColorRgb();
    })
});

/* ------------------------------------ */
/* --- Exercice 6 --- */

const paragraph = document.querySelector('#ex6-paragraph');
let text6 = paragraph.innerText;
paragraph.innerText = '';
// let i = 0;
const t = setInterval(() => {
    paragraph.textContent += text6[0];
    text6 = text6.substring(1);
    if (text6.length < 1) clearInterval(t);
    // paragraph.textContent += text6[i];
    // i++;
    // if (i > text6.length - 1) clearInterval(t);
}, 50);


/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];

const btn7 = document.querySelector('#ex7-button').addEventListener('click', function(){
    if(taskList.length === 0) return;

    const li = document.createElement('li');
    li.classList.add('task-list-task');
    li.textContent = taskList.pop();
    document.querySelector('#ex7-list').appendChild(li);
    li.addEventListener('click', function(){
        taskList.push(this.textContent);
        this.remove();
});
});
    
/* ------------------------------------ */
/* --- Exercice 8 --- */

// const healthElement = document.getElementById("ex8-button-level");
// const swordsElement = document.getElementById("ex8-button-strength");
// const shieldElement = document.getElementById("ex8-button-shield");

// const maxValue = 100;
// const point = 5;

// let stats = {
//     level: 0,
//     strength: 0,
//     shield: 0    
// };

// function scoreUp (prop,string) {
//     if(stats[prop] < 100){
//         stats[prop] += 5;
//         document.querySelector(string).style.width = stats[prop]+"%";
//     }
// }

// healthElement.addEventListener('click', () => {
//    scoreUp('level', '.progress-val-level') 
// });
// swordsElement.addEventListener('click', () => {
//     scoreUp('strength', '.progress-val-strength')  
//  });
// shieldElement.addEventListener('click', () => {
//     scoreUp('shield', '.progress-val-shield') 
//  });

let counters = {};


document.querySelectorAll('[data-progress-id]').forEach(btn => {
    btn.addEventListener('click', function(event) {
       const progressId = this.dataset.progressId;
       if (counters[progressId] === undefined) counters[progressId] = 0;
    
        if (counters[progressId] >= 100) return;
        counters[progressId] += 5;
        document.getElementById(progressId).style.width = counters[progressId] + '%';
    });
});