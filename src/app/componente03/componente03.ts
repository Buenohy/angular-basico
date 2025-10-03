import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  imports: [],
  templateUrl: './componente03.html',
  styleUrl: './componente03.css',
})
export class Componente03 {
  // Variável de imagem
  imagem: string = 'assets/dia.jpeg';

  // Função para alterar a imagem
  alterarImagem() {
    if (this.imagem === 'assets/dia.jpeg') {
      this.imagem = 'assets/noite.jpeg';
    } else {
      this.imagem = 'assets/dia.jpeg';
    }
  }
}
