import TabNav from "./modules/TabNav.js";
import Accordion from "./modules/accordion.js";
import ScrollSuave from "./modules/linkInternoMenu.js"
import Modal from "./modules/modal.js"
import ToolTip from "./modules/tooltip.js";
import dropdownMenu from "./modules/dropdown.js";
import MenuMobile from "./modules/menumobile.js"
import initFuncionamento from "./modules/funcionamento.js"
import FetchAnimais from "./modules/fetch-animais.js"
import FetchBtc from "./modules/fetch-btc.js"
import ScrollAnima from "./modules/scrollAnima";


const Scrollsuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
Scrollsuave.init()

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init()

const Tabnav = new TabNav('[data-tab="tabmenu"] li', '[data-tab="content"] section');
Tabnav.initNav()

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init()

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init()

const scrollanima = new ScrollAnima('[data-anime="scroll"]');
scrollanima.init()

const DropdownMenu = new dropdownMenu('[data-dropdown]');
DropdownMenu.init()

const menuMobile = new MenuMobile('[data-menu="button"]','[data-menu="list"]');
menuMobile.init()


FetchAnimais('api/animaisapi.json', '.numeros-grid')
FetchBtc('https://blockchain.info/ticker', '.btc-preco')

initFuncionamento()
