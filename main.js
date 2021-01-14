/////////////////////////////////////////////////////
////////////// main function located here ///////////
/////////////////////////////////////////////////////

function compoundInterest() {
    let pVal = float(document.getElementById('pVal').value);
    let iRV = float(document.getElementById('iRV').value);
    let timeVal = float(document.getElementById('timeVal').value);
    let nVal = float(document.getElementById('nVal').value);
    let total = pVal*(1 + iRV/nVal)**(nVal*timeVal);
    
    let msg = "the total is " + String(total);
    
    
    if (pVal && iRV && timeVal && nVal >= 0) {
        document.getElementById('interest').innerHTML = msg;
    }
    else {
        document.getElementById('interest').innerHTML = "the values must be positive";
    }
}

