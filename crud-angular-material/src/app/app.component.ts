import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; 

@Component({
  selector: 'app-root',
  // RouterOutlet é o roteador da aplicação que é usada para acessar as rotas
  // Onde coloca o RouterOutlet é onde as páginas vão aparecer
  imports: [RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crud-angular-material';
}
