const paras = document.querySelectorAll('p')

paras.forEach(para => {
  if (para.textContent.includes('success')) {
    para.classList.add('success')
  } else if (para.textContent.includes('error')) {
    para.classList.add('error')
  }
})
