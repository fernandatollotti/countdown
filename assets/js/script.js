// Define a classe Time, que gerencia um cronômetro.
class Time {
  // O construtor inicializa a contagem de segundos e o estado do cronômetro.
  constructor(sec) {
    this.sec = sec; // Número de segundos restantes.
    this.isRunning = false; // Estado do cronômetro: se está rodando ou não.
  }

  // Método para iniciar a contagem regressiva.
  startCountdown() {
    // Verifica se o cronômetro não está já em execução.
    if (!this.isRunning) {
      this.isRunning = true; // Marca o cronômetro como em execução.
      this.updateCountdown(); // Inicia a contagem regressiva.
    }
  }

  // Método que atualiza o tempo restante e atualiza o display.
  updateCountdown() {
    // Verifica se ainda há tempo restante.
    if (this.sec > 0) {
      // Atualiza o texto do elemento HTML com o tempo restante.
      document.getElementById('count').textContent = `${this.sec} segundos restantes`;

      this.sec--; // Decrementa o número de segundos restantes.
      // Usa setTimeout para chamar updateCountdown novamente após 1 segundo.
      setTimeout(this.updateCountdown.bind(this), 1000);
    } else {
      // Se o tempo acabou, atualiza o texto do elemento HTML.
      document.getElementById('count').textContent = 'Tempo esgotado';
      this.isRunning = false; // Marca o cronômetro como não em execução.
    }
  }
}

// Cria uma nova instância da classe Time com 60 segundos.
const obj = new Time(60);

// Obtém a referência ao botão HTML com id 'btn'.
let btn = document.getElementById('btn');

// Adiciona um evento de clique ao botão que inicia a contagem regressiva quando clicado.
btn.addEventListener('click', () => {
  obj.startCountdown(); // Chama o método startCountdown na instância obj.
});
