import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Módulo de formularios
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
// Colocando a lógica do componente aqui

  // Inicializa uma variavel do tipo number com valor 0, se quiser sem valor var?:
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  //Criação do método que realiza o cálculo
  calcularResultado(){
     
    console.log(this.numero1);
    console.log(this.numero2);
    console.log(this.resultado);
    // this referencia o atributo da classe CalculadoraComponent
    this.resultado = this.numero1 + this.numero2;
   
  }
}
