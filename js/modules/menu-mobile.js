import outsideClick from './outsideclick.js'
export default function menuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]')
  const menuList = document.querySelector('[data-menu="lista"]')
  const events = ['click', 'touchstart']

  function openMenu() {
    menuList.classList.add('active')
    menuButton.classList.add('active')
    outsideClick(menuList, events, () => {
      menuList.classList.remove('active')
      menuButton.classList.remove('active')
    })
  }

  if (menuButton) {
    events.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu)
    })
  }
}