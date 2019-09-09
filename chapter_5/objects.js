let user = {
  name: 'matt',
  age: 31,
  location: 'carlisle',
  blogs: ['what is the sky?', 'why is blue"?'],
  login: function(){
    console.log('the user logged in')
  },
  logout: function(){
    console.log('the user logged out')
  }
}

console.log(user)
console.log(user.name)

user.age = 35
console.log(user.age)

console.log(user['name'])
user['name'] = 'matthew'
console.log(user['name'])

user.login()
