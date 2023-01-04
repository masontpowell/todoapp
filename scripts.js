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