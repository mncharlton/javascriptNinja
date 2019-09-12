const para = document.querySelector('p')
console.log(para)

const divs = document.querySelectorAll('div')
console.log(divs)
console.log(divs[0])

divs.forEach(div => {
  console.log(div)
})


para.innerText += ' Woop Woop!'

// divs.forEach(div => {
//   //div.innerText = 'Changed! No worries.'
//   div.innerHTML += '<p><b>BOLD ME</b></p>'
// })


const staff = ['mario', 'luigi', 'yoshi']

staff.forEach(name => {
  para.innerHTML += `<p>${name}</p>`
})


const link = document.querySelector('a')
console.log(link.getAttribute('href'))

link.setAttribute('href', 'www.yahoo.co.uk') //edit attribute
link.setAttribute('style', 'color:green') //add attribute

console.log(link.style.color)
link.style.margin = '50px' //adds new css style without overriding as set attribute would have done
link.style.fontSize = '60px'


const list = document.querySelector('ul')
console.log(list.classList)
list.classList.add('winner')
list.classList.remove('another')


const article = document.querySelector('article')
console.log(article)
Array.from(article.children).forEach(item => {
  item.style.color = 'red'
})

const title = document.querySelector('h2')
console.log(title.parentElement)

console.log(title.nextElementSibling)

console.log(title.nextElementSibling.parentElement.children)
