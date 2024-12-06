import outsideClick from "./outsideclick.js";

export default class MenuMobile {
    constructor(menuButton, menuList, eventos) {  
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.ativo = "active"
    this.openMenu =  this.openMenu.bind(this)


    if(eventos === undefined) this.eventos = ['touchstart', 'click'];
      else this.eventos = eventos;  
  }



  openMenu(){ 
    this.menuList.classList.add(this.ativo)
    this.menuButton.classList.add(this.ativo)
      outsideClick(this.menuList, this.eventos, () => { 
      this.menuList.classList.remove(this.ativo)
      this.menuButton.classList.remove(this.ativo)
    })
  }
  
  addMenuMobileEvent(){ 
    this.eventos.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));
  } 
  init(){ 
    if(this.menuButton && this.menuList) { 
      this.addMenuMobileEvent()
    }
    return this
  }
 }



