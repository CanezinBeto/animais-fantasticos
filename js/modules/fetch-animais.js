import AnimaNumeros from './anima-numeros.js'
export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target)

  // Preenche cada animal no dom
  function preencherAnimais(animal) {
    const divAnimal = creatAnimal(animal)
    numerosGrid.appendChild(divAnimal)
  }

  // Anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo')
    animaNumeros.init()
  }

  // Puxa os animais através de um arquivo json e cria cada animal utilizando a função create animal
  async function criarAnimais() {
    try {
      // Fetch e espera a resposta e transforma em json
      const animaisResponse = await fetch(url)
      const animaisJSON = await animaisResponse.json()

      // Após a transformação de json, ativa as funções para preencher e animar os números
      animaisJSON.forEach((animal) => preencherAnimais(animal))
      animaAnimaisNumeros()
    } catch (erro) {
      console.log(erro)
    }
  }

  // Cria a div contendo informações com o total de animais
  function creatAnimal(animal) {
    const div = document.createElement('div')
    div.classList.add('numero-animal')

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`

    return div
  }

  return criarAnimais()
}
