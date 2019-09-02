console.log(true, false, 'true', 'false')


let somethingEmail = 'something@invalid.invalid'
let includesAt = somethingEmail.includes('@')
console.log(includesAt)

let namesArr = ['mario', 'luigi', 'toad']
let namesInc = namesArr.includes('luigi')
console.log(namesInc)

let oldAge = 25
console.log(oldAge == 25) //true
console.log(oldAge == 35) //false
console.log(oldAge != 55) //true
console.log(oldAge > 20) //true
console.log(oldAge < 21) //false
console.log(oldAge >= 25) //true
console.log(oldAge <= 25) //true

let newName = 'matt'
console.log(newName == 'matt') //true
console.log(newName == 'Matt') //false
console.log(newName > 'john') //true - based on position of first letter in alphabet, m > j
console.log(newName > 'Matt') //true - lowercase > uppercase


console.log(oldAge == '25') //true
console.log(oldAge === '25') //false
console.log(oldAge !== '25') //true
