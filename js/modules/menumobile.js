import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {  
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.active = 'active';

    // define eventos/argumentos padrão de touchstar e click 
    if(events === undefined) this.events = ['click', 'touchstart'];
      else this.events = events;
    
  } 

  openMenu(){ 
    this.menuList.classList.add(this.active);
    this.menuButton.classList.add(this.active);
    outsideClick(this.menuList, this.events, () => { 
      this.menuList.classList.remove(this.active);
      this.menuButton.classList.remove(this.active);
    });
  } 

  addMenuMobileEvents() { 
    this.events.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu));
  }

  init(){ 
    if (this.menuButton && this.menuList){ 
      this.addMenuMobileEvents();
    } 
    return this;
  } 
}