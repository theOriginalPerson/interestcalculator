/////////////////////////////////////////////////////
////////////// main function located here ///////////
/////////////////////////////////////////////////////

function compoundInterest() {
    const pVal = float(document.getElementById('pVal').value);
    const iRV = float(document.getElementById('iRV').value);
    const timeVal = float(document.getElementById('timeVal').value);
    const nVal = float(document.getElementById('nVal').value);
    const total = pVal*(1 + iRV/nVal)**(nVal*timeVal);
    
    var msg = "the total is " + total;
    document.getElementById('interest').innerHTML = msg;
}

