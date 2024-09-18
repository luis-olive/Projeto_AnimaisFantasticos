import initTabNav from "./modules/initTabNav.js";
import Accordion from "./modules/accordion.js";
import ScrollSuave from "./modules/linkInternoMenu.js"
import initModal from "./modules/modal.js"
import initToolTip from "./modules/tooltip.js";
import initDropDown from "./modules/dropdown.js";
import initMenuMobile from "./modules/menumobile.js"
import initFuncionamento from "./modules/funcionamento.js"
import initFetchAnimais from "./modules/fetch-animais.js"
import initFetchBtc from "./modules/fetch-btc.js"
import initAnimaScroll from "./modules/AnimaScroll";


const Scrollsuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
Scrollsuave.init()
const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init()


initDropDown()
initTabNav()
initAnimaScroll()
initModal()
initToolTip()
initMenuMobile()
initFetchAnimais()
initFuncionamento()
initFetchBtc();
