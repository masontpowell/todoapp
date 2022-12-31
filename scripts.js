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

/*const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
    let checkboxCounter = document.querySelectorAll('input[name="dailyCheck"]:checked');
    let valCheckCount = [];
    checkboxCounter.forEach((checkbox) => {
        valCheckCount.push(checkbox.value);
    });
    alert(valCheckCount);
});
*/
document.getElementById('#btn').onclick = function () {
    var checkboxes = document.querySelectorAll('input[name="dailyCheck"]:checked');
    alert(checkboxes.length);
}

let number = document.getElementById("number");
let counter = 0;

setInterval(() => {
    if (counter == valCheckCount) {
        clearInterval;
    } else {
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 30);