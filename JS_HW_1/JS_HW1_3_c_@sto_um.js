

/* Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь
в number */

const checkAge = function(age) {
   
    if (/^\d+$/.test(age)){
            
        let age_2 = 18
        let age_3 = 60
    
        if (age < age_2) {
            
            console.log("You don’t have access cause your age is " + age + ". It’s less then " + age_2)
    
        } else if (age >= age_2 && age < age_3) {
           
            console.log("Welcome !")
    
        } else if (age > age_3) {
            
            console.log("Keep calm and look Culture channel")
    
        } else {
            
            console.log("Technical work") 
        }
    } else {

      console.log ("Error! Enter Number!")
 
    }
} 
    
    checkAge(true)
    checkAge(5)
    checkAge(25)
    checkAge(62)
    checkAge("25")
    checkAge("25jk")
    checkAge("yr")
    checkAge("")
    checkAge(25,5)   
    checkAge("25.5")
