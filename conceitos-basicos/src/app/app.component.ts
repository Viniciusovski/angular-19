import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MinhapaginaComponent } from './minhapagina/minhapagina.component';
import { HelloWorldComponent } from './helloworld/hellowordl.component';
// importa os componentes criados para ser possivel utiliza-los
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorldComponent, MinhapaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
