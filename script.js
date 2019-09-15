function on () {
  document.getElementById('overlay').style.display = 'block'
  document.getElementByclass('icon').src = 'images/x.png'
  document.getElementById('btn').removeEventListener('click', on)
  document.getElementById('btn').addEventListener('click', off)
}

function off () {
  document.getElementById('overlay').style.display = 'none'
  document.getElementByclass('icon').src = 'images/menu.png'
  document.getElementById('btn').removeEventListener('click', off)
  document.getElementById('btn').addEventListener('click', on)
}
