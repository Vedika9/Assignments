let display = document.getElementById('display');

function number(number) {
    display.value =display.value + number;
}

function operator(operator) {
    display.value =display.value + operator;
}

function cleardisplay() {
    display.value = '';
}

function delete_1(){
    let x=display.value;
    x=x.slice(0,-1);
    display.value=x;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid Expression');
        clearDisplay();
    }
}
