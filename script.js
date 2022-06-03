let num1 = "";
let num2 = "";
let operator = "";
let answer = "";

const bOne = document.getElementById("bOne");
const bTwo = document.getElementById("bTwo");
const bThree = document.getElementById("bThree");
const bFour = document.getElementById("bFour");
const bFive = document.getElementById("bFive");
const bSix = document.getElementById("bSix");
const bSeven = document.getElementById("bSeven");
const bEight = document.getElementById("bEight");
const bNine = document.getElementById("bNine");
const bZero = document.getElementById("bZero");


const bAdd = document.getElementById("bAdd");
const bSubtract = document.getElementById("bSubtract");
const bDivide = document.getElementById("bDivide");
const bMultiply = document.getElementById("bMultiply");

const bEquals = document.getElementById("bEquals");





function display() {

    let displayValue = "Display: ";


    const display = document.getElementById("display");
    display.textContent = displayValue;



    bOne.addEventListener('click', () => {
        displayValue = displayValue + "1";
        display.textContent = displayValue;
    });

    bTwo.addEventListener("click", () => {
        displayValue = displayValue + "2";
        display.textContent = displayValue;
    });

    bThree.addEventListener("click", () => {
        displayValue = displayValue + "3";
        display.textContent = displayValue;
    });

    bFour.addEventListener("click", () => {
        displayValue = displayValue + "4";
        display.textContent = displayValue;
    });

    bFive.addEventListener("click", () => {
        displayValue = displayValue + "5";
        display.textContent = displayValue;
    });

    bSix.addEventListener("click", () => {
        displayValue = displayValue + "6";
        display.textContent = displayValue;
    });

    bSeven.addEventListener("click", () => {
        displayValue = displayValue + "7";
        display.textContent = displayValue;
    });

    bEight.addEventListener("click", () => {
        displayValue = displayValue + "8";
        display.textContent = displayValue;
    });

    bNine.addEventListener("click", () => {
        displayValue = displayValue + "9";
        display.textContent = displayValue;
    });

    bZero.addEventListener("click", () => {
        displayValue = displayValue + "0";
        display.textContent = displayValue;
    });




    bAdd.addEventListener("click", () => {
        parseInt(num1 = displayValue.split("Display: ")[1], 10);
        displayValue = displayValue + "+";
        operator = "+";
        display.textContent = displayValue;
    });

    bSubtract.addEventListener("click", () => {
        parseInt(num1 = displayValue.split("Display: ")[1], 10);
        displayValue = displayValue + "-";
        operator = "-";
        display.textContent = displayValue;
    });

    bDivide.addEventListener("click", () => {
        parseInt(num1 = displayValue.split("Display: ")[1], 10);
        displayValue = displayValue + "/";
        operator = "/";
        display.textContent = displayValue;
    });

    bMultiply.addEventListener("click", () => {
        parseInt(num1 = displayValue.split("Display: ")[1], 10);
        displayValue = displayValue + "*";
        operator = "*";
        display.textContent = displayValue;
    });

    bEquals.addEventListener("click", () => {
        parseInt(num2 = displayValue.split(operator)[1], 10);
        operate();
        console.log(num1 + " this is num1");
        console.log(num2 + " this is num2");
        console.log(operator + " this is the operator");
        console.log(answer + " this is answer");
        displayValue = displayValue + " = " + answer;
        display.textContent = displayValue;
    });


}



function operate() {


    if (operator == "+") {
        add();
    } else if (operator == "-") {
        subtract();
    } else if (operator == "/") {
        divide();
    } else if (operator == "*") {
        multiply();
    }


    function add() {
        answer = parseInt(num1, 10) + parseInt(num2, 10);
        return answer;
    }

    function subtract() {
        answer = parseInt(num1, 10) - parseInt(num2, 10);
        return answer;
    }

    function divide() {
        answer = parseInt(num1, 10) / parseInt(num2, 10);
        return answer;
    }

    function multiply() {
        answer = parseInt(num1, 10) * parseInt(num2, 10);
        return answer;
    }

    return answer;
}



display();