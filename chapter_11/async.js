console.log(1)
console.log(2)

setTimeout(() => {
  console.log('callback function fired')
}, 2000)

console.log(3)
console.log(4)


//HTTP Request
const request = new XMLHttpRequest(); //doesn't need to be XML


//listen  for Request
request.addEventListener('readystatechange', () => {
  console.log(request, request.readyState)
  //Check mozilla mdn guide for ready state change codes
  if (request.readyState === 4) {
    console.log(request.responseText)
  }
})

//Set up request
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')

//send Request
request.send()
