//Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

const checkAge = function(age) {
    // if (/^\d+$/.test(age)) { 
    if ((!isNaN(+age)) && (isFinite(+age))) {
       
       let age_2 = 18
       let age_3 = 60
   
       if (age < age_2) {
           alert(`You don’t have access cause your age is ${age}. It’s less then ${age_2}`)
   
         } else if (age >= age_2 && age <= age_3) {
             alert(`Welcome !`)
   
         } else if (age > age_3) {
             alert(`Keep calm and look Culture channel`)
   
         } else {
             alert(`Technical work`) 
       }
   
   } else {
           
       alert(`Error! Enter Real Number!`) 
       }
}

 age = prompt("How old are you?", "0")
   
 checkAge(age)

    
