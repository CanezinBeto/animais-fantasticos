import initAnimacaoScroll from './modules/animascroll.js'
import ScrollSuave from './modules/scrollsuave.js'
import TabNav from './modules/tabnav.js'
import Accordion from './modules/accordion.js'
import initModal from './modules/modal.js'
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

tabNav.init()
accordion.init()
scrollSuave.init()

initAnimacaoScroll()
initModal()
initTooltip()
initDropDownMenu()
menuMobile()
initFuncionamento()
initFetchAnimais()
initFetchBitcoin()
