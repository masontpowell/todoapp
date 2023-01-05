//CHECKING IF THE CHECKBOXES HAVE BEEN CHECKED OR UNCHECKED AND THEN RETURNING THE NUMBER
//AS VALCHECKCOUNT
var valCheckCount = 0;
function update() {
    let checkboxCounter = document.querySelectorAll('input[name="dailyCheck"]:checked');
    valCheckCount = checkboxCounter.length;
    return valCheckCount;
};

let checkboxCounter = document.querySelectorAll('input[name="dailyCheck"]');
checkboxCounter.forEach(function(checkboxD) {
    checkboxD.addEventListener("change", function(e) {
       update();
    });
});


//function to add a new row of inputs when the + is clicked.
function addRowFunction() {
    var parentTable = document.getElementById("table1Body");
    var myTd,myInputCheck,myInputText,myLabelText;
    var myTr = document.createElement('tr');
    myTr.setAttribute('class' , 'unit-table');
    for (var j =0; j < 1; j++) {
        myLabelText = document.createElement('label');
        myLabelText.setAttribute('class', 'form__label');
        myLabelText.setAttribute('for', 'task');
        myLabelText.innerHTML = "Task";
        myTd = document.createElement('td');
        myInputText = document.createElement('input');
        myInputText.setAttribute('type','text');
        myInputText.setAttribute('class', 'form__field');
        myInputText.setAttribute('placeholder', 'task');
        myTd.appendChild(myInputText);
        myTd.appendChild(myLabelText);
        myTr.appendChild(myTd);
    }
    for (var i = 0; i < 31; i++) {
        myTd = document.createElement('td');
        myInputCheck = document.createElement('input');
        myInputCheck.setAttribute('type','checkbox');
        myInputCheck.setAttribute('name' , 'dailyCheck');
        myInputCheck.addEventListener('change', function(e) {
            update();
        });
        myTd.appendChild(myInputCheck);
        myTr.appendChild(myTd);
    }
    parentTable.appendChild(myTr);
}

//ALL OF THE CODE USED TO CREATE THE CIRCULAR PROGRESS BAR AND TAKES THE INPUT FROM
//VALCHECKCOUNT AND THE FUNCTION ABOVE.
let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");


let progressStartValue = 0,
    progressEndValue = valCheckCount,
    speed = 20;

let progress = setInterval(() => {
let progressLength = document.querySelectorAll('input[name="dailyCheck"]').length;
    progressStartValue++;
let percentageAnswer = Math.round((valCheckCount / progressLength) * 100);

    progressValue.textContent = `${percentageAnswer}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${percentageAnswer * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == percentageAnswer) {
        clearInterval(progress);
    }
}, speed);


//Start of Weekly Table JS
//------------------------------------------------------------------------\\

//The add row button for the weekly table
function addRowWeekly() {
    var parentTable = document.getElementById("table2Weekly");
    var myTd,myInputCheckWeekly,myInputTextWeekly,myLabelText,myDateWeekly;
    var myTr = document.createElement('tr');
    myTr.setAttribute('class' , 'weekly-table');
    for (var j =0; j < 1; j++) {
        myLabelText = document.createElement('label');
        myLabelText.setAttribute('class', 'form__label');
        myLabelText.setAttribute('for', 'task');
        myLabelText.innerHTML = "Task";
        myTd = document.createElement('td');
        myInputTextWeekly = document.createElement('input');
        myInputTextWeekly.setAttribute('type','text');
        myInputTextWeekly.setAttribute('class', 'form__field');
        myInputTextWeekly.setAttribute('placeholder', 'task');
        myTd.appendChild(myInputTextWeekly);
        myTd.appendChild(myLabelText);
        myTr.appendChild(myTd);
    }
    for (var i = 0; i < 4; i++) {
        myTd = document.createElement('td');
        myDateWeekly = document.createElement('input');
        myDateWeekly.setAttribute('type', 'date');
        myDateWeekly.setAttribute('name', 'date-Weekly');
        myInputCheckWeekly = document.createElement('input');
        myInputCheckWeekly.setAttribute('type','checkbox');
        myInputCheckWeekly.setAttribute('name' , 'weeklyCheck');
        myInputCheckWeekly.addEventListener('change', function(e) {
            update();
        });
        myTd.appendChild(myDateWeekly);
        myTd.appendChild(myInputCheckWeekly);
        myTr.appendChild(myTd);
    }
    parentTable.appendChild(myTr);
}

//the update function to count the number of check for weekly tasks.
var checkCountWeekly = 0;
function updateWeekly() {
    let checkboxCountWeekly = document.querySelectorAll('input[name="weeklyCheck"]:checked');
    checkCountWeekly = checkboxCountWeekly.length;
    return checkCountWeekly;
};

let checkboxCountWeekly = document.querySelectorAll('input[name="weeklyCheck"]');
checkboxCountWeekly.forEach(function(checkboxW) {
    checkboxW.addEventListener("change", function(d) {
       updateWeekly();
    });
});

//Weekly circular progress 
let circularProgressWeekly = document.querySelector(".circular-progress-weekly"),
    progressValueWeekly = document.querySelector(".progress-value-weekly");


let progressStartValueWeekly = 0,
    progressEndValueWeekly = checkCountWeekly,
    speedWeekly = 20;

let progressWeekly = setInterval(() => {
let progressLengthWeekly = document.querySelectorAll('input[name="weeklyCheck"]').length;
    progressStartValueWeekly++;
let percentageAnswerWeekly = Math.round((checkCountWeekly / progressLengthWeekly) * 100);

    progressValueWeekly.textContent = `${percentageAnswerWeekly}%`
    circularProgressWeekly.style.background = `conic-gradient(#7d2ae8 ${percentageAnswerWeekly * 3.6}deg, #ededed 0deg)`

    if(progressStartValueWeekly == percentageAnswerWeekly) {
        clearInterval(progressWeekly);
    }
}, speedWeekly);