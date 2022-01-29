// Função para abrir e fechar o modal
export default function initModal() {
  const buttonOpen = document.querySelector('[data-modal="abrir"]')
  const buttonClose = document.querySelector('[data-modal="fechar"]')
  const containerModal = document.querySelector('[data-modal="container"]')

  function toggleModal(event) {
    event.preventDefault()
    containerModal.classList.toggle('ativo')
  }

  function clickForaModal(event) {
    if (event.target === this) toggleModal(event)
  }

  if (buttonOpen && buttonClose && containerModal) {
    buttonOpen.addEventListener('click', toggleModal)
    buttonClose.addEventListener('click', toggleModal)
    containerModal.addEventListener('click', clickForaModal)
  }
}
