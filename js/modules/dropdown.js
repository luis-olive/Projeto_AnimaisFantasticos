import outsideClick from "./outsideclick.js"

export default function initDropDown(){
  const dropdownmenus = document.querySelectorAll('[data-dropdown]')

dropdownmenus.forEach(menu => { 
['touchstart', 'click'].forEach(userEvent => { 
  menu.addEventListener(userEvent, handleClick)
  })
  
})


function handleClick(event){ 
  event.preventDefault()
  this.classList.add ('active')
  outsideClick(this, ['touchstart', 'click'],() => { 
    this.clasList.remove('active')  
    })
  }
}



