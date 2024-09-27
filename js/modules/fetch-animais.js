import AnimaNumeros from "./animaNumeros.js"


export default function fetchAnimais(url, target){
  // cria a div com informações
  // contendo o total de animais
  function createAnimal(animal) {  
    const div = document.createElement('div')
    div.classList.add('numeros-animais');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
    return div
    }

    const numerosGrid = document.querySelector(target)
    function preencherAnimais(animal){ 
      const divAnimal = createAnimal(animal)
      numerosGrid.appendChild(divAnimal)
    }

    function animaAnimaisNumero(){ 
      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo')
      animaNumeros.init()
    }

    // puxa os animais atraves de um arquivo JSON
    // e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try { 
      // Fetch e espera a resposta
      const animaisResponse = await fetch(url)
      //Transforma a resposta em JSON
      const animaisJson = await animaisResponse.json()
      animaisJson.forEach(animal => preencherAnimais(animal));
      animaAnimaisNumero()
      } catch(erro) { 
      console.log(erro)
      }
    }
    return criarAnimais()
  

  }
