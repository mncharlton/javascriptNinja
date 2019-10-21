// console.log(1)
// console.log(2)
//
// setTimeout(() => {
//   console.log('callback function fired')
// }, 2000)
//
// console.log(3)
// console.log(4)
//
// //HTTP Request
// const request = new XMLHttpRequest(); //doesn't need to be XML
//
// //listen  for Request
// request.addEventListener('readystatechange', () => {
//   console.log(request, request.readyState)
//   //Check mozilla mdn guide for ready state change codes and return codes
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.responseText)
//   } else if (request.readyState === 4) {
//     console.log('An error occured!')
//   }
// })
//
// //Set up request
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
//
// //send Request
// request.send()
//
//
// //function to get todos
// const getTodos = (callback) => {
//   const todoRequest = new XMLHttpRequest(); //doesn't need to be XML
//   todoRequest.addEventListener('readystatechange', () => {
//     console.log(todoRequest, todoRequest.readyState)
//     //Check mozilla mdn guide for ready state change codes and return codes
//     if (todoRequest.readyState === 4 && todoRequest.status === 200) {
//       const data = JSON.parse(todoRequest.responseText)
//       callback(undefined, data)
//     } else if (todoRequest.readyState === 4) {
//       callback('could not fetch data', undefined)
//     }
//   })
//   todoRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
//   todoRequest.send()
// }
//
// getTodos()
//
// // 1,2,3,4,result of callback due to async
// console.log(1)
// console.log(2)
// getTodos((err, data) => { //convention is error first
//   console.log('Matt made a callback')
//   console.log(err, data)
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// console.log(3)
// console.log(4)


//json is just a string that looks like JS object. JavaScript Object Notation


const getLocalTodos = (callback) => {
  const localRequest = new XMLHttpRequest()
  localRequest.open('GET', 'todos.json')
  localRequest.addEventListener('readystatechange', () => {
    console.log(localRequest, localRequest.readyState)
    //Check mozilla mdn guide for ready state change codes and return codes
    if (localRequest.readyState === 4 && localRequest.status === 200) {
      const data = JSON.parse(localRequest.responseText)
      callback(undefined, data)
    } else if (localRequest.readyState === 4) {
      callback('could not fetch data', undefined)
    }
  })
  localRequest.open('GET', 'todos.json')
  localRequest.send()
}

getLocalTodos((err, data) => {
  console.log('here')
  console.log(err, data)
})
