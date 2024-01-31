let accoundEmail = "Vanshaj3366@gmail.com"
var accoundId = "12345"  // in most of the cases we can not use var because of issue in block scope and functional scope
const roll_number = 546
account_city = "Uttar Pradesh"

let accoundState // undefined
// roll_number = 56 --> not allowed because roll number is constant we cannot change the constant
// console.log(roll_number)
// console.log(accoundEmail)
// console.log(accoundId)
// console.log(account_city)

// output 
// 546
// Vanshaj3366@gmail.com
// 12345
// Uttar Pradesh



// In table
console.table([accoundEmail , accoundId , account_city , roll_number , accoundState ])