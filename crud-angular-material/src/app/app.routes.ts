/*
Criar as rotas da aplicação, ou seja os caminhos da aplicação
*/
import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';

// Array de objetos rotas, ou urls da aplicação
// Cada compoente é uma página e tem uma rota
export const routes: Routes = [
    { path: 'cadastro', component: CadastroComponent },
    { path: 'consulta', component: ConsultaComponent}
];
