const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')
const username = 'mattasdf'
const pattern = /^[A-z0-9]{6,}$/
//const username = document.querySelector('#username')
//submit event gets form being submitted via button or keyboard
form.addEventListener('submit', e => {
  e.preventDefault() //stops page refresh
  //console.log(username.value)
  console.log(form.username.value) //when inputs have ids

  if (pattern.test(form.username.value)) {
    feedback.textContent = 'Logged in!'
  } else {
    feedback.textContent = 'Invalid username!'
  }
})

form.addEventListener('keyup', e => {
  if (pattern.test(form.username.value)) {
    form.username.setAttribute('class', 'success')
  } else {
    form.username.setAttribute('class', 'error')
  }
})



let result = pattern.test(username)
console.log(result)

result = username.search(pattern)
console.log(result) // -1 if false, 0 for true (when using ^ and $)
