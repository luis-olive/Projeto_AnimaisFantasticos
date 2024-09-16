import initAnimaNumeros from "./animaNumeros.js"
export default function fetchAnimais(){
  async function fetchAnimais(url) {
    try { 
      const animaisResponse = await fetch(url)
      const animaisJson = await animaisResponse.json()
      const numerosGrid = document.querySelector('.numeros-grid')
      animaisJson.forEach(animal => {
        const divAnimal = createAnimal(animal)
        numerosGrid.appendChild(divAnimal)
      });
      initAnimaNumeros()
      } catch(erro) { 
      console.log(erro)
      }
    }
  
  function createAnimal(animal) {  
    const div = document.createElement('div')
    div.classList.add('numeros-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
    return div
    }

  fetchAnimais('./animaisAPI.json')
}
