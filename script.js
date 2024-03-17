let stringToDisplay = "";
let result = document.querySelector('.result');
const operators = ['%', '*', '/', '+', '-', '='];
let prevOperator = false;

let arrButtons = document.querySelectorAll('.btn');
arrButtons.forEach(button => {
    button.addEventListener('click', () => {
        const eventVal = button.innerText;
        switchAndValidate(eventVal);
        display();

    });
});

window.addEventListener('keypress',(e)=>{
    const eventVal = e.key;
    if(!e.code.includes('Key')){
        switchAndValidate(eventVal);
        display();
    }
});

const switchAndValidate = (eventVal) => {
    switch (eventVal) {
        case 'AC':
            stringToDisplay = "";
            break;
        case 'C':
            stringToDisplay = stringToDisplay.slice(0, -1);
            break;
        case 'Enter':
        case '=':
            if( prevOperator === true){
                stringToDisplay = stringToDisplay.slice(0,-1);
            }
            evaluate();
            break;
        case '+':
        case '-':
        case '/':
        case '%':
        case '*':
            if (operators.includes(eventVal)) {
                prevOperator === true ? stringToDisplay = stringToDisplay.slice(0, -1) : prevOperator = true;
            }

            evaluate();
            stringToDisplay += eventVal;
            break;
        case '.':
            if (stringToDisplay.includes('.')) {
                return;
            }
        default:
            prevOperator = false;
            stringToDisplay += eventVal;
    }
}

const display = () => {
    stringToDisplay === '' ? result.innerText = '0.0' : result.innerText = stringToDisplay;
}

const evaluate = () => {
    if (stringToDisplay === '') {
        stringToDisplay = 0.0;
    }
    stringToDisplay = eval(stringToDisplay) + '';
}