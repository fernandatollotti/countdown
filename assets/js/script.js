class Time {
  constructor( sec ) {
    this.sec = sec;
    this.isRunning = false;
  } 

  startCountdown() {
    if(!this.isRunning) {
      this.isRunning = true;
      this.updateCountdown();
    }
  }

  updateCountdown() {
    if( this.sec > 0 ) {
      document.getElementById('count').textContent = `${this.sec} segundos restantes`;

      this.sec--;
      setTimeout(this.updateCountdown.bind(this), 1000);
    } else {
      document.getElementById('count').textContent = 'Tempo esgotado';
      this.isRunning = false;
    }
  }
}
  
const obj = new Time(60);
  
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  obj.startCountdown();
});