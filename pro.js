var powFlag = false;
function addCalculator(value) {
    document.getElementById('displayResult').value += value;
    if (powFlag){ 
        var number = document.getElementById('displayResult').value.split('^');
        document.getElementById('displayResult').value = Math.pow(number[0],number[1]);
        powFlag = false
    }
}
function finilize() {
    document.getElementById('displayResult').value = eval(document.getElementById('displayResult').value);
}
function reset() {
    document.getElementById('displayResult').value = '';
}

function MathCal(value) {
    if (value == 'pow') {
        powFlag = true;
        document.getElementById('displayResult').value += "^";
        console.log(powFlag)
    } else {
    var val= document.getElementById('displayResult').value;
    document.getElementById('displayResult').value = Math[value](val);
    }
}