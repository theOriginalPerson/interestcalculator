/////////////////////////////////////////////////////
////////////// main function located here ///////////
/////////////////////////////////////////////////////

function compoundInterest() {
    var p = (document.getElementById('pVal').value);
    var i = (document.getElementById('iRV').value);
    var time = (document.getElementById('timeVal').value);
    var n = (document.getElementById('nVal').value);
    var total = p*((1 + i/n)**(n*time));
    
    var msg = "the total is " + String(total);
    var pos = "the values must be positive"
    
    if (p || i || time || n >= 0) {
        document.getElementById('interest').innerHTML = msg;
    }
    else {
        document.getElementById('interest').innerHTML = pos;
    }
}

