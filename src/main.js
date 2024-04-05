const display = document.getElementById("display");

const appendToDisplay = (input) => {
    if (display.value === "Error") {
        display.value = input;
    } else {
        display.value += input;
    }
}

function calculate () {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}

function clearDisplay () {
    display.value = "";
}

