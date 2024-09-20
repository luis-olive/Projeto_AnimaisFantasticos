export default class Modal{
constructor(botaoAbrir, botaoFechar, containerModal) { 
  this.botaoAbrir = document.querySelector(botaoAbrir);
  this.botaoFechar = document.querySelector(botaoFechar);
  this.containerModal = document.querySelector(containerModal);
  
// bind this ao callback para
// fazer referencia ao objeto
// da classe. 

  this.eventToggleModal = this.eventToggleModal.bind(this);
  this.clickOutModal = this.clickOutModal.bind(this);
}

//alterna entre
// abrir e fechar
// o modal
toggelModal(){ 
  this.containerModal.classList.toggle('ativo');
}
// evento da ação acima
eventToggleModal(e){ 
  e.preventDefault();
  this.toggelModal();
}

  clickOutModal(e){ 
    console.log(e.target)
      if (e.target === this.containerModal){ 
        this.toggelModal(e);
      }
    }
// Adiciona eventos os elementos do Modal
    addModalEvents(){ 
  this.botaoAbrir.addEventListener('click', this.eventToggleModal) 
  this.botaoFechar.addEventListener('click', this.eventToggleModal) 
  this.containerModal.addEventListener('click', this.clickOutModal)
}

init(){ 
  if(this.botaoAbrir && this.botaoFechar && this.containerModal){
    this.addModalEvents();
    } 
    return this
  }
}