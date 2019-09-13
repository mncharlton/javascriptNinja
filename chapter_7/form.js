const form = document.querySelector('.signup-form')
//const username = document.querySelector('#username')
//submit event gets form being submitted via button or keyboard
form.addEventListener('submit', e => {
  e.preventDefault() //stops page refresh
  //console.log(username.value)
  console.log(form.username.value) //when inputs have ids
})
