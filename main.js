// //DOM elemnts
// var elheader = document.querySelector('.heading')

// //User inputs
// var userName = prompt('Ismingizni kiriting:');
// var userInput = prompt(`${userName} Sarlavha uchun Matn kiritng:`)

// elheader.textContent = userInput;
alert('Web sayt xizmatiga xush kelibsiz!');

var userName = prompt('Ismingizni kiriting:', 'Ixtiyor');
var secondName = prompt('Familyangizni kiriting:', 'Komiljonov');
var studyName = prompt(`Qayerda o'qisiz?`);
//DOM elemnts
var elHeader = document.querySelector('.heading');
//User inputs
var userInput = prompt(`${userName} Qaysi sohasida o'qisiz`)

elHeader.textContent = userInput;

var studyName = prompt(`${studyName}Front-end kursidami?:`);

console.log(firstName + ''+ secondName);
console.log(elHeader)