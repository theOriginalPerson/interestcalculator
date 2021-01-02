compoundInterest = function(p, iRate, time) {
        while (true) {
            const p = float("principal value")
            const iRate = float("interest rate")
            const time = float("number of time periods elapsed")
            const n = float("number of times interest applied per time period")
            
            
            let total = p(1 + iRate/n)**(n*t)
            
            msg = ("the total is "+ str(total))
        
            return(msg)
        }
}
document.getElementById("interest").innerHTML = compoundInterest();