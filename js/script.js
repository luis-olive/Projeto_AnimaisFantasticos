import TabNav from "./modules/TabNav.js";
import Accordion from "./modules/accordion.js";
import ScrollSuave from "./modules/linkInternoMenu.js"
import Modal from "./modules/modal.js";
import ToolTip from "./modules/tooltip.js";
import menuMobile from "./modules/menumobile.js";
import dropdownMenu from "./modules/dropdown.js";
import Funcionamento from "./modules/funcionamento.js";
import FetchAnimais from "./modules/fetch-animais.js";
import FetchBtc from "./modules/fetch-btc.js";
import ScrollAnima from "./modules/scrollAnima";
import SlideNav from "./modules/slide.js";



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

const menumobile = new menuMobile('[data-menu="list"]','[data-menu="button"]');
menumobile.init()

const funcionamento = new Funcionamento('[data-semana]');
funcionamento.init()

const slide = new SlideNav('.slide', '.slide-wrapper'); 
slide.init();
slide.addControl('.custom-controls');

FetchAnimais('api/animaisapi.json', '.numeros-grid')
FetchBtc('https://blockchain.info/ticker', '.btc-preco')


