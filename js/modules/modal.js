export default function initModal() { 


const openButton = document.querySelector('[data-modal="abrir"]')
const closeButton = document.querySelector('[data-modal="fechar"]')
const containerModal = document.querySelector('[data-modal="container"]')

  if( openButton && closeButton && containerModal){

    function toggelModal(e){ 
      e.preventDefault()
      containerModal.classList.toggle('ativo')
    }


    function clickOutModal(e){ 
      if (e.target === this){ 
        toggelModal(e)
      }
    }

    openButton.addEventListener('click', toggelModal) 
    closeButton.addEventListener('click', toggelModal) 
    containerModal.addEventListener('click', clickOutModal)
  }
}