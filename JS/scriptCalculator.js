const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//the function allow to calcute based on button clicked.
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        //if output has '%', replace the character with '/100' before evalue.
        output = eval(output.replace("%", "/100"));
    }
    else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        //if button DEL is clicked, remove the last character from the output.
        output = output.toString().slice(0, -1);
    } else {
        //if output is empty and button is a special character, then return.
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

//add event listener to buttons, call calcute() on click. 
buttons.forEach((button) => {
    //Buttons click listener can calls calcute(), with dataset allow the calculate to value 
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});