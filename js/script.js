import initTabNav from "./modules/initTabNav.js";
import initAnimaScroll from "./modules/AnimaScroll";
import ScrollSuave from "./modules/linkInternoMenu.js"
import initAccordion from "./modules/InitAccordion.js";
import initModal from "./modules/modal.js"
import initToolTip from "./modules/tooltip.js";
import initDropDown from "./modules/dropdown.js";
import initMenuMobile from "./modules/menumobile.js"
import initFuncionamento from "./modules/funcionamento.js"
import initFetchAnimais from "./modules/fetch-animais.js"
import initFetchBtc from "./modules/fetch-btc.js"

const Scrollsuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')

initDropDown()
Scrollsuave.init()

initTabNav()
initAnimaScroll()
initAccordion()
initModal()
initToolTip()
initMenuMobile()
initFetchAnimais()
initFuncionamento()
initFetchBtc();
