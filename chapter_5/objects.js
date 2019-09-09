const blogs = [
  {title: 'what is the sky?', likes: 30},
  {title: 'why is blue?', likes: 20}
]

console.log(blogs)

let user = {
  name: 'matt',
  age: 31,
  location: 'carlisle',
  blogs: [
    {title: 'what is the sky?', likes: 30},
    {title: 'why is blue?', likes: 20}
  ],
  login: function(){
    console.log('the user logged in')
  },
  logout: function(){
    console.log('the user logged out')
  },
  logBlogs(){ //THIS IS A REGULAR FUNCTION
    //console.log(this.blogs)
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes)
    })
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
user.logBlogs()

console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 7.7
console.log(Math.round(area)) //round normally
console.log(Math.floor(area)) //take down to integer
console.log(Math.ceil(area)) //take up to integer
console.log(Math.trunc(area)) //remove decimal

// random numbers
const random = Math.random()
console.log(random) // random between 0 and 1
console.log(Math.round(random * 100)) // random number between 0 and 1
