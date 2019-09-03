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
