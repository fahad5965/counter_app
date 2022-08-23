const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increase");
const decrementBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
let deductAmount = document.getElementById("deductBox").value;

let count = 0;

incrementBtn.addEventListener("click", ()=> {
    count++;
    counter.innerHTML = count;
});

decrementBtn.addEventListener("click", ()=> {
    count--;
    counter.innerHTML = count;
});

resetBtn.addEventListener("click", ()=> {
    count = 0;
    counter.innerHTML = count;
});

function addToCounter() {
    let addAmount = document.getElementById("addBox").value;
    let x = Number.parseInt(addAmount);
    count = count + x;
    counter.innerHTML = count;
};

function deductFromCounter() {
        let deductAmount = document.getElementById("deductBox").value;
        let y = Number.parseInt(deductAmount);
        count = count - y;
        counter.innerHTML = count;
};























// function popAdd() {
//     let popup = document.getElementById("myAddPopup");
//     popup.classList.toggle('show');
//     popupBtn.classList.toggle('show');
// }

// function popDeduct() {
//     let popup = document.getElementById("myDeductPopup");
//     popup.classList.toggle('show');
//     popupBtn.classList.toggle('show');
// }