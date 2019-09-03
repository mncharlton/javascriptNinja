const age = 25

if (age > 20) {
  console.log('you are old!')
}

const people = ['matt', 'alexander', 'kristine']

if(people.length > 2) {
  console.log('that\'s everyone!')
}


const password = 'passw@'

if (password.length >= 12 && password.includes('@')){
  console.log('that password is mighty strong!')
} else if(password.length >= 8 || password.includes('@')) {
  console.log('that password is strong enough!')
} else {
  console.log('that password isn\'t strong enough!')
}

let user = false

if(!user) {
  console.log('user is not true!')
}
