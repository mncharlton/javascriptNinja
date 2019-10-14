const scores = [10, 15, 40, 20, 25, 0, 10]

const filteredScores = scores.filter(score => {
  return score > 20
})
console.log(filteredScores)

const users = [
  {name: 'matt', premium: true},
  {name: 'caroline', premium: true},
  {name: 'jas', premium: false},
  {name: 'tom', premium: true},
  {name: 'adam', premium: false}
]

 const premiumUsers = users.filter(user => {
   return user.premium
 })
 console.log(premiumUsers)

const increasedScores = scores.map(score => score * 1.5)
console.log(increasedScores)


const highScores = scores.reduce((accumulator, current) => {
  if (current > 20) {
    accumulator++
  }
  return accumulator
}, 0) //initial value of acc
console.log(highScores)

const firstHighScore = scores.find(score => score > 30)
console.log(firstHighScore)


const names = ['matt', 'caroline', 'andrew', 'lindsay', 'bev', 'neil']
names.reverse()
console.log(names)
names.sort();
console.log(names)


const players = [
  {name: 'matt', score: 20},
  {name: 'caroline', score: 5},
  {name: 'jas', score: 17},
  {name: 'tom', score: 21},
  {name: 'adam', score: 2}
]

// players.sort((a, b) => { //a and b are two consecutive elements in the array
//   if (a.score > b.score) {
//     return -1 //keep a first
//   } else if (b.score > a.score) {
//     return 1 //move b to first
//   } else {
//     return 0 //don't reorder
//   }
// })

players.sort((a,b) => b.score - a.score) //if b is higher we get positive, if a is then it's negative, if equal then 0
console.log(players)
