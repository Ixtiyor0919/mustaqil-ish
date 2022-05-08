var survey = {}
alert('Web sayt xizmatiga xush kelibsiz!');
survey.userName = prompt('Ismingizni kiriting:', 'John');
survey.secondName = prompt('Familyangizni kiriting:', 'Doll');
survey.studyName = prompt(`Xurmatli mijoz qayerda o\'qisiz?`);
survey.elHeader = document.querySelector('.heading');
survey.userInput = prompt(`${survey.userName} Qaysi sohasida o\'qisiz`)
survey.studyName = prompt(`${survey.studyName}Front-end kursidami?:`);
survey.studyName = prompt(`${survey.studyName}E\'tiboringiz uchun rahmat!`, `Sog\' bo\'lin`);

console.log(survey);