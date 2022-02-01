import outsideClick from './outsideclick.js'

export default class DropDownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus)
    this.activeClass = 'active'

    // Define toutch e click como argumento padão de events caso o uruário não defina
    if (events === undefined) this.events = ['touchstart', 'click']
    else this.events = events

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
  }

  // Ativa o dropdown menu e adicona a função que observa o clique fora dela
  activeDropdownMenu(event) {
    event.preventDefault()
    const element = event.currentTarget
    element.classList.add(this.activeClass)
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass)
    })
  }

  // Adicona os eventos ao dropdown menu
  addDropDownMenuEvents() {
    this.dropdownMenus.forEach((item) => {
      this.events.forEach((userEvent) => {
        item.addEventListener(userEvent, this.activeDropdownMenu)
      })
    })
  }

  init() {
    if (this.dropdownMenus.length) this.addDropDownMenuEvents()
    return this
  }
}
