import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';

/*
O RouterLink é um componente do Angular que permite 
criar links para navegar entre rotas de uma aplicação.
Ele é usado para criar links que, quando clicados, 
ativam a navegação para uma rota específica da 
aplicação, em vez de carregar uma nova página.
*/

@Component({
  selector: 'app-root',
  // RouterOutlet é o roteador da aplicação que é usada para acessar as rotas
  // Onde coloca o RouterOutlet é onde as páginas vão aparecer
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crud-angular-material';
}
