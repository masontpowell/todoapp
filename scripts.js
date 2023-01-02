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