//copy event
const copy = document.querySelector('.copy-me')
copy.addEventListener('copy', () => {
  console.log('Copied!')
})

//mouse move event
const box = document.querySelector('.box')
box.addEventListener('mousemove', e => {
  //console.log(e.offsetX,e.offsetY)
  box.innerHTML = `<p>x pos - ${e.offsetX}</p><p>y pos - ${e.offsetY}</p>`
})

//wheel/scroll event
document.addEventListener('wheel', e => {
  console.log(e.pageX, e.pageY)
})
