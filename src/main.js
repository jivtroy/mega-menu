import './style.css'

document.addEventListener('DOMContentLoaded', function() {
  const menus = document.querySelectorAll('.mega-menu')
  if (menus.length) {
    menus.forEach(menu => {
      menu.addEventListener('click', function(event) {
        event.stopPropagation()
      })
    })
  }
})