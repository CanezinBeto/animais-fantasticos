import ScrollAnima from './modules/animascroll.js'
import ScrollSuave from './modules/scrollsuave.js'
import TabNav from './modules/tabnav.js'
import Accordion from './modules/accordion.js'
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltip.js'
import DropDownMenu from './modules/dropdown-menu.js'
import MenuMobile from './modules/menu-mobile.js'
import Funcionamento from './modules/funcionamento.js'
import fetchAnimais from './modules/fetch-animais.js'
import fetchBitcoin from './modules/fetch-bitcoin.js'
import SlideNav from './modules/slide.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
const accordion = new Accordion('[data-anime="accordion"] dt')
const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
)
const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
)
const tooltip = new Tooltip('[data-tooltip]')
tooltip.init()
const scrollAnima = new ScrollAnima('[data-anime="scroll"]')
const dropdownMenu = new DropDownMenu('[data-dropdown]')
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="lista"]')
const funcionamento = new Funcionamento('[data-semana]', 'aberto')
const slide = new SlideNav('.slide', '.slide-wrapper')

slide.init()
slide.addControl('.custom-control')
funcionamento.init()
menuMobile.init()
scrollAnima.init()
tabNav.init()
accordion.init()
scrollSuave.init()
modal.init()
dropdownMenu.init()

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco')
fetchAnimais('./animaisapi.json', '.numeros-grid')
