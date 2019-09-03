for (let i = 0; i < 5; i++) {
  console.log('in loop', i)
}

console.log('loop finished')

const users = ['alan', 'peter', 'davide', 'keith', 'rob']
for (let i = 0; i < users.length; i++) {
  console.log('name:', users[i])
  let html = `<div>${users[i]}</div>`
  console.log(html)
}

let j = 0
while(j < 5){
  console.log(j)
j++
}

let k = 0
while(k < users.length) {
  console.log(users[k])
  k++
}

let m = 4
do {
  console.log(m)
  m++
} while (m < 5)


//break and continue

const scores = [3,2,0,6,50,10,14,12,45,52,12]

for(let i=0; i< scores.length; i++) {
  if(scores[i] === 0){
    continue //ignore rest of for loop and continue
  }

  console.log('your score:', scores[i])
  if(scores[i] >=50) {
    console.log('congrats, you got over 50!')
    break
  }
}
