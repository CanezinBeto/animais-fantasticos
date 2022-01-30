export default class Modal {
  constructor(btnOpen, btnClose, containerModal) {
    this.buttonOpen = document.querySelector(btnOpen)
    this.buttonClose = document.querySelector(btnClose)
    this.containerModal = document.querySelector(containerModal)

    // bind this ao callback para fazer a referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.clickForaModal = this.clickForaModal.bind(this)
  }

  // Abre e fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo')
  }

  // Adiciona o evento ded toggle ao modal
  eventToggleModal(event) {
    event.preventDefault()
    this.toggleModal()
  }

  // Fechar o modal ao clicar do lado de fora
  clickForaModal(event) {
    if (event.target === this.containerModal) this.toggleModal(event)
  }

  // adiciona eventos ao elementos do modal
  addModalEvents() {
    this.buttonOpen.addEventListener('click', this.eventToggleModal)
    this.buttonClose.addEventListener('click', this.eventToggleModal)
    this.containerModal.addEventListener('click', this.clickForaModal)
  }

  init() {
    if (this.buttonOpen && this.buttonClose && this.containerModal)
      this.addModalEvents()
    return this
  }
}
