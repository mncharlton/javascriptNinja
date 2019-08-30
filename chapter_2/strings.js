// alert('hello')
// console.log('sandbox ran!')
//
// let age = 31
// let year = 2019
//
// console.log(age, year)

//Strings
console.log("hello!")
let name='Matt'
console.log(name)

//concatenation
let firstname = 'Billy'
let surname = 'Butcher'

let fullname = firstname + ' ' + surname
console.log(fullname)

//get character
console.log(fullname[0])

//get length
console.log(fullname.length)

//methods
console.log(fullname.toUpperCase())
let result = fullname.toLowerCase()
console.log(result)

console.log(fullname)

let index = name.indexOf('M')
console.log(index)

let email = "fake@fake.invalid"

let last = email.lastIndexOf('a')
console.log(last)

let slice = email.slice(0,4)
console.log(slice)

let substrDemo = email.substr(2, 10)
console.log(substrDemo)

let replace = email.replace('f','t')
console.log(replace)


// Template strings
const title = 'My Title'
const author = 'Billy'
const blogLikes = 30

let concatenationMethod = 'The blog called ' + title + ' by ' + author + ' has ' + blogLikes + ' likes'
let templateMethod = `The blog called ${title} by ${author} has ${blogLikes} likes`
console.log(templateMethod)


let html = `<h2>${title}</h2>
<p>${author}</p>
<span>This blog has ${blogLikes} likes</span>
`
console.log(html)
