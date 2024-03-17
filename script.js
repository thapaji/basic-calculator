let stringToDisplay = "";
let result = document.querySelector('.result');
const operators = ['%', '*', '/', '+', '-', '='];

let arrButtons = document.querySelectorAll('.btn');
arrButtons.forEach(button => {
    button.addEventListener('click', () => {
        eventVal = button.innerText;
        switch (eventVal) {
            case 'AC':
                stringToDisplay = "";
                break;
            case 'C':
                stringToDisplay = stringToDisplay.slice(0, -1);
                break;
            case '=':
                evaluate();
                break;
            case '+':
            case '-':
            case '/':
            case '%':
            case '*':
                evaluate();
            default:
                stringToDisplay += eventVal;

        }
        display();

    });
});


const display = () => {
    stringToDisplay === '' ? result.innerText = '0.0' : result.innerText = stringToDisplay;
}

const evaluate = () => {
    stringToDisplay = eval(stringToDisplay);
}