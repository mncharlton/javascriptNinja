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


const getLocalTodos = (resource) => {

  return new Promise((resolve, reject)=>{
    const localRequest = new XMLHttpRequest()
    localRequest.open('GET', 'todos.json')
    localRequest.addEventListener('readystatechange', () => {
      //console.log(localRequest, localRequest.readyState)
      //Check mozilla mdn guide for ready state change codes and return codes
      if (localRequest.readyState === 4 && localRequest.status === 200) {
        const data = JSON.parse(localRequest.responseText)
        resolve(data)
      } else if (localRequest.readyState === 4) {
        reject('could not fetch data')
      }
    })
    localRequest.open('GET', resource)
    localRequest.send()
  })
}
getLocalTodos('todos.json').then(data => {
  console.log('promise 1: ', data)
  //chain promise
  return getLocalTodos('todos2.json')
}).then(data =>  {
  console.log('promise 2: ', data)
})
.catch(err => {
  console.log(err)
})

// getLocalTodos('todos.json', (err, data) => {
//   console.log(err, data)
//   getLocalTodos('todos2.json', (err, data) => {
//     console.log(err, data)
//   })
// })
//Get multiple  files in  turn (get first back before starting second one)
//getTodo within getTodo within getTodo...  Triangle of Doom! callback hell! Nesting
//callback within callback within callback.

//Promises
// Example

const getSomething = () => {
  return new Promise((resolve, reject) => { //will take some time todo and either resolve and get data OR rejected and get error
    //parameters above are built into promise api, get them automatically

    //fetch something
  //  resolve('some data')
    reject('some error')
  })
}

//TWO WAYS OF SAME THING. (catch looks neater when chaining promises)
getSomething().then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})

getSomething().then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
