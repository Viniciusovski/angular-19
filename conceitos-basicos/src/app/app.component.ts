import { Component } from '@angular/core';

import { CalculadoraComponent } from './calculadora/calculadora.component';
// importa os componentes criados para ser possivel utiliza-los
@Component({
  selector: 'app-root',
  imports: [CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
