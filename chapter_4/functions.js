function greet(){
  console.log('hello there!')
}

greet()

const speak = function(name = 'John', time = 'night'){
  console.log(`good ${time} ${name}`)
}

speak('Arnie', 'morning');
speak()
speak('Rambo')


function calcArea (radius) {
  return 3.14 * radius ** 2
}

function calcVol (area) {
  console.log('volume calc goes here!')
}

console.log(calcArea(5))

const area = calcArea(10)
console.log(area)

const vol = calcVol(area)


const calcArea2 = (radius) => 3.14 * radius ** 2
console.log(calcArea2(5))


const greet2 = () => 'hello, world'

const bill = (products, tax) => {
  let total = 0
  for (let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax
  }
  return total
}


 const myFunc = (callbackFunc) => {
   let value = 50
   callbackFunc(value)
 }

 myFunc(function(value) {
   console.log(value)
 })

 myFunc(value => {
   console.log(value)
 })

let folks = ['mario', 'luigi', 'bowser', 'toad']

folks.forEach((person, index) => {
  console.log(`at position ${index} we have ${person}`)
})

const ul = document.querySelector('.people')
let html = ``;
folks.forEach(person => {
  html += `<li>${person}</li>`
  ul.innerHTML = html
})
