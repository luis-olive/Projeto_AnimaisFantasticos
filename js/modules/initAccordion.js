export default function initAccordion(){
  const classeAtivo = 'ativo'
  const accordionList = document.querySelectorAll('[data-anime="accordion"]  dt')
  if(accordionList.length){
    accordionList[0].classList.add(classeAtivo);
    accordionList[0].nextElementSibling.classList.add(classeAtivo);

    function activeAccordion(){
      this.classList.toggle(classeAtivo)
      this.nextElementSibling.classList.toggle(classeAtivo)
    };

    accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
    });
  }
}