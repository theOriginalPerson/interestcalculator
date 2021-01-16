/////////////////////////////////////////////////////
////////////// main function located here ///////////
/////////////////////////////////////////////////////

function compoundInterest() {
    let p = parseFloat(document.getElementById('pVal').value);
    let i = parseFloat(document.getElementById('iRV').value);
    let time = parseFloat(document.getElementById('timeVal').value);
    let n = parseFloat(document.getElementById('nVal').value);
    let total = p*(1 + i/n)**(n*time);
    
    let msg = "the total is " + String(total);
    
    
    if (p || i || time || n >= 0) {
        document.getElementById('interest').innerHTML = msg;
    }
    else {
        document.getElementById('interest').innerHTML = "the values must be positive";
    }
}

