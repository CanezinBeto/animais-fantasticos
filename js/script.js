import initAnimacaoScroll from './modules/animascroll.js'
import ScrollSuave from './modules/scrollsuave.js'
import TabNav from './modules/tabnav.js'
import Accordion from './modules/accordion.js'
import Modal from './modules/modal.js'
import initTooltip from './modules/tooltip.js'
import initDropDownMenu from './modules/dropdown-menu.js'
import menuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import initFetchAnimais from './modules/fetch-animais.js'
import initFetchBitcoin from './modules/fetch-bitcoin.js'

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

tabNav.init()
accordion.init()
scrollSuave.init()
modal.init()

initAnimacaoScroll()
initTooltip()
initDropDownMenu()
menuMobile()
initFuncionamento()
initFetchAnimais()
initFetchBitcoin()
