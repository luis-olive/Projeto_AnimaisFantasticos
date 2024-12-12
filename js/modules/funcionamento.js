export default class  Funcionamento{
  constructor(funcionamento, activeclass){ 

    this.funcionamento = document.querySelector(funcionamento)
    this.activeclass = activeclass
  }
  dadosFuncionamento(){ 
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horariosemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

    
  dadosAgora(){
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay()
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;  
  }
    estaAberto(){
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = (this.horarioAgora >= this.horariosemana[0] 
        && this.horarioAgora < this.horariosemana[1]);
      return semanaAberto && horarioAberto;
  }

    ativaAberto(){ 
      if(this.estaAberto())
      this.funcionamento.classList.add(this.activeclass)
    }    
    init(){
      if(this.funcionamento){
      this.dadosFuncionamento()
      this.dadosAgora()
      this.ativaAberto();
      return this;
    }
  }
}

// Alert

// const teste = [1,2,3,4,5].indexOf(6)
// console.log(semanaAberto)
// Verificando o dia da semana, sempre que for um dia que não existe na Array, vai retornar -1, logo, se for diferente de 1 então é true(verdadeiro), lembrando que a semana começa com domingo = 0 e termina no sábado = 6, como o estaebelecimento só fica aberto até sexta(5) logo o numero que usamos na array vai até 5, ignorando domingo(0) e sábado(6).

// Alert End
