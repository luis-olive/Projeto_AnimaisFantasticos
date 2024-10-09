export default class scrollAnima { 

  constructor(sections){ 
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6; 

    this.checkDistance = this.checkDistance.bind(this)
  }
// pega a distancia das seções do site em relação ao topo do site.
  getDistance(){ 
    this.distance = [...this.sections].map(section => { 
      const offset = section.offsetTop; 
      return  { 
        element: section,
        offset: Math.floor(offset - this.windowMetade)
      };
    })
  }

  // checa a distancia e relação aos itens ao scroll do site
  checkDistance(){
    this.distance.forEach((item) => { 
      if(window.scrollY > item.offset) { 
        item.element.classList.add('ativo')
      } else if(item.element.classList.contains('ativo'))
        item.element.classList.remove('ativo')
      });
    };


    init(){ 
      if(this.sections.length){ 
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
      return this
      }
    }
// remove a função init e para o scroll
    stop() { 
      window.removeEventListener('scroll', this.checkDistance);
    }
}
