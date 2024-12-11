export default class ScrollSuave {
constructor(links,options){
    this.linkInterno = document.querySelectorAll(links)
    if(options === undefined){ 
      this.options = {behavior: "smooth", block: "start"};
    } else { 
      this.options = options; 
    }
    this.scrolltoSection = this.scrolltoSection.bind(this)
  }
    scrolltoSection(event){
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }


  addLinkEvent() { 
    this.linkInterno.forEach((link) => {
      link.addEventListener('click', this.scrolltoSection);
    });
  }

  init(){ 
    if(this.linkInterno.lenght);
    this.addLinkEvent();
    return this;
  }
}