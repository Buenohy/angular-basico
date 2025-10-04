import { Component } from '@angular/core';
@Component({
  selector: 'app-componente04',
  standalone: true,
  templateUrl: './componente04.html',
  styleUrl: './componente04.css',
})
export class Componente04 {
  // Variável para exibir ou ocultar o quadrado
  exibir: boolean = true;

  // Função para exibir ou ocultar o quadrado
  acao() {
    if (this.exibir === true) {
      this.exibir = false;
    } else {
      this.exibir = true;
    }
  }
}
