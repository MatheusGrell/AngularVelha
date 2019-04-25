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
  constructor() {
    this.jogada = 9;
    this.arrCasa = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.aux = true;
  }

  clickei() {
    this.posicao(event);
  }

  ngOnInit() {
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
    let x = event.pageX - this.tela.offsetLeft;
    let y = event.pageY - this.tela.offsetTop;
    if (this.aux === true) {
      if (x > 0 && x < 150 && y > 0 && y < 150 && this.arrCasa[0] === 0) {
        x = 75;
        y = 75;
        this.desenha(x, y);
        if (this.jogada % 2 === 0) {
          this.arrCasa[0] = 1;
        } else if (this.jogada % 2 === 1) {
          this.arrCasa[0] = -1;
        }
        this.verificaGanhador();
      }
      if (x > 0 && x < 150 && y > 150 && y < 300 && this.arrCasa[1] === 0) {
        x = 75;
        y = 225;
        this.desenha(x, y);
        if (this.jogada % 2 === 0) {
          this.arrCasa[1] = 1;
        } else if (this.jogada % 2 === 1) {
          this.arrCasa[1] = -1;
        }
        this.verificaGanhador();
      }
      if (x > 0 && x < 150 && y > 300 && y < 450 && this.arrCasa[2] === 0) {
        x = 75;
        y = 375;
        this.desenha(x, y);
        if (this.jogada % 2 === 0) {
          this.arrCasa[2] = 1;
        } else if (this.jogada % 2 === 1) {
          this.arrCasa[2] = -1;
        } 1
        this.verificaGanhador();
      }
      if (x > 150 && x < 300 && y > 0 && y < 150 && this.arrCasa[3] === 0) {
        x = 225;
        y = 75;
        this.desenha(x, y);
        if (this.jogada % 2 === 0) {
          this.arrCasa[3] = 1;
        } else if (this.jogada % 2 === 1) {
          this.arrCasa[3] = -1;
        }
        this.verificaGanhador();
      }
      if (x > 150 && x < 300 && y > 150 && y < 300 && this.arrCasa[4] === 0) {
        x = 225;
        y = 225;
        this.desenha(x, y);
        if (this.jogada % 2 === 0) {
          this.arrCasa[4] = 1;
        } else if (this.jogada % 2 === 1) {
          this.arrCasa[4] = -1;
        }
        this.verificaGanhador();
      }
      if (x > 150 && x < 300 && y > 300 && y < 450 && this.arrCasa[5] === 0) {
        x = 225;
        y = 375;
        this.desenha(x, y);
        if (this.jogada % 2 === 0) {
          this.arrCasa[5] = 1;
        } else if (this.jogada % 2 === 1) {
          this.arrCasa[5] = -1;
        }
        this.verificaGanhador();
      }
      if (x > 300 && x < 450 && y > 0 && y < 150 && this.arrCasa[6] === 0) {
        x = 375;
        y = 75;
        this.desenha(x, y);
        if (this.jogada % 2 === 0) {
          this.arrCasa[6] = 1;
        } else if (this.jogada % 2 === 1) {
          this.arrCasa[6] = -1;
        }
        this.verificaGanhador();
      }
      if (x > 300 && x < 450 && y > 150 && y < 300 && this.arrCasa[7] === 0) {
        x = 375;
        y = 225;
        this.desenha(x, y);
        if (this.jogada % 2 === 0) {
          this.arrCasa[7] = 1;
        } else if (this.jogada % 2 === 1) {
          this.arrCasa[7] = -1;
        }
        this.verificaGanhador();
      }
      if (x > 300 && x < 450 && y > 300 && y < 450 && this.arrCasa[8] === 0) {
        x = 375;
        y = 375;
        this.desenha(x, y);
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

  desenha(x, y) {
    if (this.jogada % 2 === 1 && this.jogada > 0) {
      this.pincel.strokeStyle = 'red';
      this.pincel.beginPath();
      this.pincel.arc(x, y, 70, 0, 2 * 3.14);
      this.pincel.stroke();
      this.jogada--;
    } else if (this.jogada % 2 === 0 && this.jogada > 0) {
      this.pincel.strokeStyle = 'blue';
      this.pincel.beginPath();
      this.pincel.moveTo(x - 60, y - 60);
      this.pincel.lineTo(x + 60, y + 60);
      this.pincel.moveTo(x + 60, y - 60);
      this.pincel.lineTo(x - 60, y + 60);
      this.pincel.stroke();
      this.jogada--;
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
}
