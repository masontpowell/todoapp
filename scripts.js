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

/*
const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
    let checkboxCounter = document.querySelectorAll('input[name="dailyCheck"]:checked');
    let valCheckCount = 0;
    checkboxCounter.forEach((checkbox) => {
        valCheckCount++;
        return valCheckCount;
    });
    alert(valCheckCount);
});
*/
let valCheckCount = 0;
document.querySelectorAll('input[name="dailyCheck"]').addEventListener("change", function () {
    valCheckCount == this.checked;
}, false);

let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
    progressEndValue = valCheckCount,
    speed = 20;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed)
/*
btn.addEventListener('onClick', (event) => {
    let number = valCheckCount;
    let counter = 0;
    setInterval(() => {
        if (counter == valCheckCount) {
            clearInterval;
        } else {
            counter++;
            number.innerHTML = counter + "%";
        }
    }, 30);
});

*/


/*let number = document.getElementById("number");
let counter = 0;

setInterval(() => {
    if (counter == valCheckCount) {
        clearInterval;
    } else {
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 30);
*/