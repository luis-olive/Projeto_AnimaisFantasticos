export default function initToolTip(){

  const tooltip = document.querySelectorAll('[data-tooltip]')

  tooltip.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
  })

  function onMouseOver(e) {
    const tooltipBox = criarToolTipBox(this)
    tooltipBox.style.top = e.pageY + 'px'; 
    tooltipBox.style.left = e.pageX + 'px'; 
    
    onMouseLeave.element = this 
    onMouseLeave.tooltipBox = tooltipBox;

    this.addEventListener('mouseleave', onMouseLeave)
    this.addEventListener('mousemove', onMouseMove)
    onMouseMove.tooltipBox = tooltipBox;


  }

  const onMouseLeave = { 
    tooltipBox: '', 
    element: '',
    handleEvent(){ 
    this.tooltipBox.remove()
    this.removeEventListener('mouseleave', onMouseLeave)
    this.removeEventListener('mousemove', onMouseMove)
    }    
  }

  const onMouseMove = { 
    handleEvent(event){
      this.tooltipBox.style.top = event.pageY + 20 + 'px'
      this.tooltipBox.style.left = event.pageX + 20 + 'px'
    }
  }





  function criarToolTipBox(element){ 
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text; 
    document.body.appendChild(tooltipBox)
    return tooltipBox
  }
}
