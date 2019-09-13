const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
const popupClose = document.querySelector('.popup-close')

button.addEventListener('click', () => {
  popup.style.display = 'block'
})

popupClose.addEventListener('click', () => {
  popup.style.display = 'none'
})

popup.addEventListener('click', e => {
  if(e.target.className === 'popup-wrapper') {
    popup.style.display = 'none'
  }
})
