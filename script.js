

function add() {
    let operator = "+";
    return operator;
}

function subtract() {
    let operator = "-";
    return operator;
}

function divide() {
    let operator = "/";
    return operator;
}

function multiply() {
    let operator = "*";
    return operator;
}

function one() {
    let nOne = "1";
    return nOne;
}

function two() {
    let Two = "2";
    return nTwo;
}


function display() {

    let nOne = " ";
    let operator = " ";
    let nTwo = " ";
    let answer = " ";

    const bOne = document.getElementById("bOne");
    const bTwo = document.getElementById("bTwo");
    const bThree = document.getElementById("bThree");
    const bFour = document.getElementById("bFour");
    const bFive = document.getElementById("bFive");
    const bSix = document.getElementById("bSix");
    const bSeven = document.getElementById("bSeven");
    const bEight = document.getElementById("bEight");
    const bNine = document.getElementById("bNine");

    const bAdd = document.getElementById("bAdd");
    const bSubtract = document.getElementById("bSubtract");
    const bDivide = document.getElementById("bDivide");
    const bMultiply = document.getElementById("bMultiply");

    const display = document.getElementById("display");

    bOne.addEventListener('click', () => {
        one();
    });

    bTwo.addEventListener("click", () => {
        two();
    });

    bAdd.addEventListener("click", () => {
        add();
    });

    bEquals.addEventListener("click", () => {
        console.log(displayValue);
    });




    let displayValue = nOne.concat(" ", operator, " ", nTwo);

    return displayValue;
};




function operate() {
    console.log(display());
}

operate();
