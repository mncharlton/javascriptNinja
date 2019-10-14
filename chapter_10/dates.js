const now = new Date()

console.log('Year:', now.getFullYear())
console.log('Month:', now.getMonth()) //0 indexed
console.log('Day:', now.getDay()) //0 indexed
console.log('Date:', now.getDate())
console.log('Hrs', now.getHours())
console.log('Mins:', now.getMinutes())
console.log('Seconds:', now.getSeconds())
console.log('Time:', now.getTime())


console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleString())



//timestamps
const before = new Date('February 1 2019 7:30:59')
const diff = now.getTime() - before.getTime()
console.log(diff)
const mins = Math.round(diff / 1000 / 60)
console.log(mins)

//convert timestamp into dates
const timestamp = 1675938472356
console.log(new Date(timestamp))


//digital clock
const clock = document.querySelector('.clock')

const tick = () => {
  const current = new Date()
  let h = current.getHours()
  if (h < 10) {h = `0${h}`}
  let m = current.getMinutes()
  if (m < 10) {m = `0${m}`}
  let s = current.getSeconds()
  if (s < 10) {s = `0${s}`}
  clock.innerHTML = `<p>${h}:${m}:${s}</p>`
}

setInterval(tick, 1000)
