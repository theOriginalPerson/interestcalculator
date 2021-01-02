compoundInterest = function() {
        while (true) {
            p = float(input("enter principal value:   "))
            iRate = float(input("enter interest rate (decimal):     "))
            t = float(input("enter months:    "))
            
            iAccrued = p * iRate * t
            total = iAccrued + p
            
            msg = ("the interest accrued is " + str(iAccrued) + " and the total combined is " + str(total))
        
            return(msg) 
        }
}
