import { Component, Input, Output, OnInit } from '@angular/core';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tela: HTMLCanvasElement;
  pincel: any;
  jogada: any;
  arrCasa: any;
  aux: boolean;
  x: number;
  y: number;
  constructor() {
    this.jogada = 9;
    this.arrCasa = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.aux = true;
  }

  clickei(event) {
    this.posicao(event);
  }

  ngOnInit() {
    this.quadro();
  }

  quadro() {
    this.tela = document.querySelector('canvas');
    this.pincel = this.tela.getContext('2d');

    this.pincel.fillStyle = 'lightgray';
    this.pincel.fillRect(0, 0, 450, 450);
    this.pincel.moveTo(150, 0);
    this.pincel.lineTo(150, 450);
    this.pincel.stroke();
    this.pincel.moveTo(300, 0);
    this.pincel.lineTo(300, 450);
    this.pincel.stroke();
    this.pincel.moveTo(0, 150);
    this.pincel.lineTo(450, 150);
    this.pincel.stroke();
    this.pincel.moveTo(0, 300);
    this.pincel.lineTo(450, 300);
    this.pincel.stroke();
  }

  posicao(event) {
    this.x = event.pageX - this.tela.offsetLeft;
    this.y = event.pageY - this.tela.offsetTop;
    console.log(this.arrCasa);
    if (this.aux === true) {
      if (this.x > 0 && this.x < 150 && this.y > 0 && this.y < 150 && this.arrCasa[0] === 0) {
        this.x = 75;
        this.y = 75;
        this.desenha(this.x, this.y);
        if (this.jogada % 2 === 0) {
          this.arrCasa[0] = 1;
        } else if (this.jogada % 2 === 1) {
          this.arrCasa[0] = -1;
        }
        this.verificaGanhador();
      }
      if (this.x > 0 && this.x < 150 && this.y > 150 && this.y < 300 && this.arrCasa[1] === 0) {
        this.x = 75;
        this.y = 225;
        this.desenha(this.x, this.y);
        if (this.jogada % 2 === 0) {
          this.arrCasa[1] = 1;
        } else if (this.jogada % 2 === 1) {
          this.arrCasa[1] = -1;
        }
        this.verificaGanhador();
      }
      if (this.x > 0 && this.x < 150 && this.y > 300 && this.y < 450 && this.arrCasa[2] === 0) {
        this.x = 75;
        this.y = 375;
        this.desenha(this.x, this.y);
        if (this.jogada % 2 === 0) {
          this.arrCasa[2] = 1;
        } else if (this.jogada % 2 === 1) {
          this.arrCasa[2] = -1;
        } 1
        this.verificaGanhador();
      }
      if (this.x > 150 && this.x < 300 && this.y > 0 && this.y < 150 && this.arrCasa[3] === 0) {
        this.x = 225;
        this.y = 75;
        this.desenha(this.x, this.y);
        if (this.jogada % 2 === 0) {
          this.arrCasa[3] = 1;
        } else if (this.jogada % 2 === 1) {
          this.arrCasa[3] = -1;
        }
        this.verificaGanhador();
      }
      if (this.x > 150 && this.x < 300 && this.y > 150 && this.y < 300 && this.arrCasa[4] === 0) {
        this.x = 225;
        this.y = 225;
        this.desenha(this.x, this.y);
        if (this.jogada % 2 === 0) {
          this.arrCasa[4] = 1;
        } else if (this.jogada % 2 === 1) {
          this.arrCasa[4] = -1;
        }
        this.verificaGanhador();
      }
      if (this.x > 150 && this.x < 300 && this.y > 300 && this.y < 450 && this.arrCasa[5] === 0) {
        this.x = 225;
        this.y = 375;
        this.desenha(this.x, this.y);
        if (this.jogada % 2 === 0) {
          this.arrCasa[5] = 1;
        } else if (this.jogada % 2 === 1) {
          this.arrCasa[5] = -1;
        }
        this.verificaGanhador();
      }
      if (this.x > 300 && this.x < 450 && this.y > 0 && this.y < 150 && this.arrCasa[6] === 0) {
        this.x = 375;
        this.y = 75;
        this.desenha(this.x, this.y);
        if (this.jogada % 2 === 0) {
          this.arrCasa[6] = 1;
        } else if (this.jogada % 2 === 1) {
          this.arrCasa[6] = -1;
        }
        this.verificaGanhador();
      }
      if (this.x > 300 && this.x < 450 && this.y > 150 && this.y < 300 && this.arrCasa[7] === 0) {
        this.x = 375;
        this.y = 225;
        this.desenha(this.x, this.y);
        if (this.jogada % 2 === 0) {
          this.arrCasa[7] = 1;
        } else if (this.jogada % 2 === 1) {
          this.arrCasa[7] = -1;
        }
        this.verificaGanhador();
      }
      if (this.x > 300 && this.x < 450 && this.y > 300 && this.y < 450 && this.arrCasa[8] === 0) {
        this.x = 375;
        this.y = 375;
        this.desenha(this.x, this.y);
        if (this.jogada % 2 === 0) {
          this.arrCasa[8] = 1;
        } else if (this.jogada % 2 === 1) {
          this.arrCasa[8] = -1;
        }
        this.verificaGanhador();
      }
    } else {
      alert('Jogo finalizado. Favor reiniciar o jogo');
    }

  }

  desenha(x, y, reinicia?: boolean) {
    if (this.jogada % 2 === 1 && this.jogada > 0 && reinicia == undefined) {
      this.pincel.strokeStyle = 'red';
      this.pincel.beginPath();
      this.pincel.arc(x, y, 70, 0, 2 * 3.14);
      this.pincel.stroke();
      this.jogada--;
    } else if (this.jogada % 2 === 0 && this.jogada > 0 && reinicia == undefined) {
      this.pincel.strokeStyle = 'blue';
      this.pincel.beginPath();
      this.pincel.moveTo(x - 60, y - 60);
      this.pincel.lineTo(x + 60, y + 60);
      this.pincel.moveTo(x + 60, y - 60);
      this.pincel.lineTo(x - 60, y + 60);
      this.pincel.stroke();
      this.jogada--;
    } else if(reinicia && this.jogada == 9) {
      this.pincel.beginPath();
      this.pincel.moveTo(x - .11, y - .1);
      this.pincel.lineTo(x + 0, y + 0);
      this.pincel.stroke();
    }
  }

  verificaGanhador() {
    setTimeout(() => {
      if (this.arrCasa[0] === -1 && this.arrCasa[1] === -1 && this.arrCasa[2] === -1) {
        alert('Parabéns X, você é demais!');
        this.aux = false;
        return;
      } else if (this.arrCasa[0] === -1 && this.arrCasa[3] === -1 && this.arrCasa[6] === -1) {
        alert('Parabéns X, você é demais!');
        this.aux = false;
        return;
      } else if (this.arrCasa[0] === -1 && this.arrCasa[4] === -1 && this.arrCasa[8] === -1) {
        alert('Parabéns X, você é demais!');
        this.aux = false;
        return;
      } else if (this.arrCasa[3] === -1 && this.arrCasa[4] === -1 && this.arrCasa[5] === -1) {
        alert('Parabéns X, você é demais!');
        this.aux = false;
        return;
      } else if (this.arrCasa[6] === -1 && this.arrCasa[7] === -1 && this.arrCasa[8] === -1) {
        alert('Parabéns X, você é demais!');
        this.aux = false;
        return;
      } else if (this.arrCasa[1] === -1 && this.arrCasa[4] === -1 && this.arrCasa[7] === -1) {
        alert('Parabéns X, você é demais!');
        this.aux = false;
        return;
      } else if (this.arrCasa[2] === -1 && this.arrCasa[5] === -1 && this.arrCasa[8] === -1) {
        alert('Parabéns X, você é demais!');
        this.aux = false;
        return;
      } else if (this.arrCasa[2] === -1 && this.arrCasa[4] === -1 && this.arrCasa[6] === -1) {
        alert('Parabéns X, você é demais!');
        this.aux = false;
        return;
      }
    }, 20);

    setTimeout(() => {
      if (this.arrCasa[0] === 1 && this.arrCasa[1] === 1 && this.arrCasa[2] === 1) {
          alert('Parabéns amigo Bola, você ganhou');
          this.aux = false;
          return;
      } else if (this.arrCasa[0] === 1 && this.arrCasa[3] === 1 && this.arrCasa[6] === 1) {
          alert('Parabéns amigo Bola, você ganhou');
          this.aux = false;
          return;
      } else if (this.arrCasa[0] === 1 && this.arrCasa[4] === 1 && this.arrCasa[8] === 1) {
        alert('Parabéns amigo Bola, você ganhou');
        this.aux = false;
        return;
      } else if (this.arrCasa[3] === 1 && this.arrCasa[4] === 1 && this.arrCasa[5] === 1) {
        alert('Parabéns amigo Bola, você ganhou');
        this.aux = false;
        return;
      } else if (this.arrCasa[6] === 1 && this.arrCasa[7] === 1 && this.arrCasa[8] === 1) {
        alert('Parabéns amigo Bola, você ganhou');
        this.aux = false;
        return;
      } else if (this.arrCasa[1] === 1 && this.arrCasa[4] === 1 && this.arrCasa[7] === 1) {
        alert('Parabéns amigo Bola, você ganhou');
        this.aux = false;
        return;
      } else if (this.arrCasa[2] === 1 && this.arrCasa[5] === 1 && this.arrCasa[8] === 1) {
        alert('Parabéns amigo Bola, você ganhou');
        this.aux = false;
        return;
      } else if (this.arrCasa[2] === 1 && this.arrCasa[4] === 1 && this.arrCasa[6] === 1) {
        alert('Parabéns amigo Bola, você ganhou');
        this.aux = false;
        return;
      }
    }, 20);


    setTimeout(() => {
      if (this.jogada === 0 && this.aux === true) {
        alert('empatou');
        this.aux = false;
      }

    }, 30);
  }

  reinicia() {
    this.jogada = 9;
    this.pincel.strokeStyle = 'lightgray';

    this.desenha(this.x, this.y, true);

    this.pincel.strokeStyle = 'black';

    this.arrCasa = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.aux = true;
    this.quadro();
  }
}
