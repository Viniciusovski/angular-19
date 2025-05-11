import { Component } from "@angular/core";
/*
O @ antes de Component indica um Decorator. 
Pense nele como uma "etiqueta" ou uma "anotação" que você coloca 
em algo (no caso, a classe HelloWorldComponent abaixo) 
para dizer ao Angular o que essa coisa é e como ela deve se comportar.
*/
@Component({
    //selector é como você vai "chamar" ou "usar" esse componente dentro do seu HTML.
    selector: 'hello-world',
    //template define qual o HTML que esse componente vai renderizar (mostrar) na tela.
    template: '<h1>Hello World!</h1>'
    
})
export class HelloWorldComponent {
    /*
    class HelloWorldComponent é a definição da sua classe de componente. Pense nela como a "lógica" por trás do seu template. É aqui que você pode adicionar variáveis, funções e outras funcionalidades que interagem com o template.
    export significa que você está tornando essa classe HelloWorldComponent disponível para ser usada em outros arquivos da sua aplicação Angular.
    */
    
}