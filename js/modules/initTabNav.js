export default function initTabNav(){
  const tabmenu = document.querySelectorAll('[data-tab="tabmenu"] li');
  const tabcontent = document.querySelectorAll('[data-tab="content"] section');


  tabcontent[0].classList.add('ativo')//Adicionando Classe sem acessar HTML


  if(tabmenu.length && tabcontent.length){

    function activeTab(index) {
      tabcontent.forEach((section) => {
        section.classList.remove('ativo')

        
      })
    const direcao = tabcontent[index].dataset.anime;
    tabcontent[index].classList.add(direcao,'ativo', );

    }
    tabmenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () =>{
        activeTab(index)
      })
    })
  }
}
initTabNav();