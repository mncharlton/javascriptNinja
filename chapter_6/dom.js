const para = document.querySelector('p')
console.log(para)

const divs = document.querySelectorAll('div')
console.log(divs)
console.log(divs[0])

divs.forEach(div => {
  console.log(div)
})


para.innerText += ' Woop Woop!'

divs.forEach(div => {
  //div.innerText = 'Changed! No worries.'
  div.innerHTML += '<p><b>BOLD ME</b></p>'
})


const staff = ['mario', 'luigi', 'yoshi']

staff.forEach(name => {
  para.innerHTML += `<p>${name}</p>`
})


const link = document.querySelector('a')
console.log(link.getAttribute('href'))

link.setAttribute('href', 'www.yahoo.co.uk') //edit attribute
link.setAttribute('style', 'color:green') //add attribute
