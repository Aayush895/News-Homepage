const menuBtn = document.getElementById('hamburger-menu')
const closeBtn = document.getElementById('close-nav')
const sidebar = document.getElementById('sidebar')

menuBtn.addEventListener('click', () => {
  sidebar.style.display = 'flex'
  document.body.style.overflowY = 'hidden'
})

closeBtn.addEventListener('click', () => {
  sidebar.style.display = 'none'
  document.body.style.overflowY = 'scroll'
})

