document.addEventListener("DOMContentLoaded", function () {
    var toggleCalculatorButton = document.getElementById("toggleCalculator");
    var calculatorDiv = document.getElementById("icalculator");

    toggleCalculatorButton.addEventListener("click", function () {
        if (calculatorDiv.style.display === "none") {
            calculatorDiv.style.display = "block";
        } else {
            calculatorDiv.style.display = "none";
        }
    });
});