
export default function initFetchBtc(){
  fetch("https://www.blockchain.com/ticker").then(Response => Response.json())
  .then(json => {
  const btcPreco = document.querySelector('.btc-preco')
  btcPreco.innerText =  (1000/ json.BRL.sell).toFixed(4) 
  }).catch(erro => { 
    console.log(Error(erro));
  })
}


