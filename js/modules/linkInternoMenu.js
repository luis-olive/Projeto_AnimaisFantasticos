export default function linkInternoMenu() {
  const linkInterno = document.querySelectorAll('[data-menu="suave"] a[href^="#"')

function scrolltoSection(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href')
  const section = document.querySelector(href);

section.scrollIntoView({
  behavior: "smooth",
  block: "start", 
});

// (Forma Alternativa)
  // const top = section.offsetTop
  // window.scrollTo({
  //   top: top, 
  //   behavior: "smooth", 
  // }); 
}

linkInterno.forEach((link) => {
  link.addEventListener('click',scrolltoSection)

})
  }