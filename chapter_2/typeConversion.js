let score = '100'
console.log(score + 1) //1001
console.log(typeof(score))

score = Number(score)
console.log(score + 1) //101
console.log(typeof(score))


let credits = 'hello'
credits = Number(credits)
console.log(credits) //NaN

let points = 'ten'
points = Number(points)
console.log(points) //NaN

let highScore = String(50)
console.log(highScore, typeof(highScore))
