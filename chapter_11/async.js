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
  //Check mozilla mdn guide for ready state change codes and return codes
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText)
  } else if (request.readyState === 4) {
    console.log('An error occured!')
  }
})

//Set up request
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')

//send Request
request.send()


//function to get todos
const getTodos = () => {
  const todoRequest = new XMLHttpRequest(); //doesn't need to be XML
  todoRequest.addEventListener('readystatechange', () => {
    console.log(todoRequest, todoRequest.readyState)
    //Check mozilla mdn guide for ready state change codes and return codes
    if (todoRequest.readyState === 4 && todoRequest.status === 200) {
      console.log(todoRequest.responseText)
    } else if (todoRequest.readyState === 4) {
      console.log('An error occured!')
    }
  })
  todoRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
  todoRequest.send()
}

getTodos()

getTodos(() => {

})
