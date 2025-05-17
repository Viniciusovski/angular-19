import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente';


@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit {

  listaClientes: Cliente[] = []

  constructor(private service: ClienteService){}

  // Aplicando o método dentro do ciclo de vida do componente
  // para que ele seja executado assim que o componente for carregado
  ngOnInit(){
    this.listaClientes = this.service.pesquisarClientes('');
  }
  

}
