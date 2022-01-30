// Função para ao clicar na foto aparecer o texto do animal correto
export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu)
    this.tabContent = document.querySelectorAll(content)
    this.activeClass = 'ativo'
  }

  // ativa a tab de acordo com o index da mesma
  activeTab(index) {
    const direcao = this.tabContent[index].dataset.anime
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass)
    })
    this.tabContent[index].classList.add(this.activeClass, direcao)
  }

  // adiciona os eventos a tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index))
    })
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0)
      this.addTabNavEvent()
    }
  }
}
