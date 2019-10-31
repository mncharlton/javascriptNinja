// store data in the browser with local storage

//store data
localStorage.setItem('name', 'matt')
localStorage.setItem('age', 31) //becomes a string in local storage

//get data
let name = localStorage.getItem('name')
console.log(name)

//update item
localStorage.setItem('name', 'bob')

name = localStorage.getItem('name')
console.log(name)
