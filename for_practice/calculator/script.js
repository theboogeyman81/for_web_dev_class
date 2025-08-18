let display = document.getElementById('display');
let currentInput= '';
let previousInput = '';

function appendToDisplay(value){

}


function calculate(){
    if(previousInput !== '' && currentInput !== '' && operator !== ''){
        let result;
        let prev = parseFloat(previousInput);
        let current = parseFloat(currentInput);

        switch(operator){
            case '+':
                result = prev + current;

            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;

            case '/':
                if(current === 0){
                    display.value = 'Error';
                    resetCalculator();
                    return;
                }
                result = prev/current;
        }
        display.value = result;
        currentInput = result.toString();
        previousInput= '';
        operator = '';
    }
}


function clearDisplay(){
    display.value = '';
    currentInput = '';
    previousInput = '';
    operator = '';
}


function deleteLast(){
    if(currentInput !== ''){
        currentInput = currentInput.slice(0,-1);
    }
}

function resetCalculator(){
    setTimeout(()=>{
        clearDisplay();
    },1500);
}