import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-componente04',
  standalone: true,
  templateUrl: './componente04.html',
  styleUrl: './componente04.css',
})
export class Componente04 {
  // Variável para exibir ou ocultar o quadrado
  exibir: boolean = true;
}
