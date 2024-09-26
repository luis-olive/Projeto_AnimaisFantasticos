export default function initFuncionamento(){
  
  const funcionamento = document.querySelector('[data-semana]')
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horariosemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay()
  const horarioAgora = dataAgora.getHours()

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
// Alert

// const teste = [1,2,3,4,5].indexOf(6)
// console.log(semanaAberto)
// Verificando o dia da semana, sempre que for um dia que não existe na Array, vai retornar -1, logo, se for diferente de 1 então é true(verdadeiro), lembrando que a semana começa com domingo = 0 e termina no sábado = 6, como o estaebelecimento só fica aberto até sexta(5) logo o numero que usamos na array vai até 5, ignorando domingo(0) e sábado(6).

// Alert End



  const horarioAberto = (horarioAgora >= horariosemana[0] && horarioAgora < horariosemana[1]);
  if(semanaAberto && horarioAberto) { 
    funcionamento.classList.add('aberto')
  }
}
