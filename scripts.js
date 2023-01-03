
// CREATING ALL OF THE DAILY CHECKBOXES
const dailyCheckboxes = Array.from({length: 456}, (x, i) => i);

dailyCheckboxes.forEach((daily)=>{
    //  generate id
    const id = `daily-${daily}`;

    // create a label
    const label = document.createElement('label');
    label.setAttribute("for", id);
   
    // create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "dailyCheck";
    checkbox.value = daily;
    checkbox.id = id;
    

    // place the checkbox inside a label
    label.appendChild(checkbox);
    // create text node
    label.appendChild(document.createTextNode(daily));
    // add the label to the root
    document.querySelector("#root").appendChild(label);
});


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
    
//ALL OF THE CODE USED TO CREATE THE CIRCULAR PROGRESS BAR AND TAKES THE INPUT FROM
//VALCHECKCOUNT AND THE FUNCTION ABOVE.
let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
    progressEndValue = valCheckCount,
    speed = 20;

let progress = setInterval(() => {
    progressStartValue++;
let percentageAnswer = Math.round((valCheckCount / 456) * 100);

    progressValue.textContent = `${percentageAnswer}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${percentageAnswer * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == percentageAnswer) {
        clearInterval(progress);
    }
}, speed);

function addRowFunction() {
    var table = document.getElementById("table1");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell1 = document.createElement("input");
    cell1.type = "text";
    cell1.name = "taskName";
    cell1.value = "incomplete";
    cell1.id = "task1";


    cell2.innerHTML = "new row2";
}
