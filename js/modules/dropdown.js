import outsideClick from "./outsideclick.js"

export default class DropDownMenu { 
  constructor(dropdownmenus, events){ 
    this.dropdownmenus = document.querySelectorAll(dropdownmenus)
    
    
    // define eventos/argumentos padrão de touchstar e click 
    if(events === undefined ) this.events = ['touchstart', 'click']
      else this.events = events

    this.activeClass = 'active'
    this.actvieDropdownmenu = this.actvieDropdownmenu.bind(this)
}

// ativa o dropdown menu e adicioan a função que observa o click fora /dele
actvieDropdownmenu(e){ 
  e.preventDefault();
  const element = e.currentTarget; 
  element.classList.add (this.activeClass);
  outsideClick(element,this.events,() => { 
    element.classList.remove(this.activeClass);
    })
  }


addDropdownMenusEvent() {  
  this.dropdownmenus.forEach(menu => { 
    this.events.forEach(userEvent => { 
    menu.addEventListener(userEvent, this.actvieDropdownmenu)
    });
  });
}

init(){ 
  if (this.dropdownmenus.length) { 
    this.addDropdownMenusEvent();
  }
  return this
}

}
