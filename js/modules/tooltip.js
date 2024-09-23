export default class initToolTip { 
constructor(tooltip){ 

  this.tooltip = document.querySelectorAll(tooltip)

  // Bind do objeto da classe aos callbacks
  this.onMouseOver = this.onMouseOver.bind(this)
  this.onMouseMove =  this.onMouseMove.bind(this)
  this.onMouseLeave = this.onMouseLeave.bind(this)
}

  onMouseMove(e) {  
    console.log(e.pageX, window.innerWidth)
    this.tooltipBox.style.top = `${e.pageY + 20}px`;
    if (e.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${e.pageX - 190}px`; 
    } else {
      this.tooltipBox.style.left = `${e.pageX + 20}px`;
  } 
}

  
    onMouseLeave({currentTarget}) {  
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave)
    currentTarget.removeEventListener('mousemove', this.onMouseMove)
    }    



  criarToolTipBox(element){ 
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text; 
    document.body.appendChild(tooltipBox)
    this.tooltipBox =  tooltipBox
  }

  
  onMouseOver({currentTarget}) {
    this.criarToolTipBox(currentTarget);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
  }

  addTooltipsEvent(){ 
    this.tooltip.forEach((item) =>{ 
      item.addEventListener('mouseover', this.onMouseOver )
    });
  }

  init() { 
  if(this.tooltip.length){
    this.addTooltipsEvent()
  } 
    return this;
  }
}
