import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule, 
    MatCardModule, 
    FormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {

  cliente: Cliente = Cliente.newCliente();
  atualizando: boolean = false;

  // Construtor que recebe o serviço de clientes injetado pelo angular
  // O tipo do parâmetro é uma instância do serviço de clientes
  // O angular é responsável por criar a instância do serviço
  // E injetar aqui no construtor
  constructor(
    private service: ClienteService,
    // Captura dados da rota que foi acessada
    private route: ActivatedRoute
  ){}

/**
 * Este método é chamado assim que o componente é inicializado.
 * Ele captura o parâmetro id da rota e verifica se existe um cliente
 * com esse id. Se sim, ele atualiza o cliente que está sendo manipulado
 * com os dados do cliente encontrado.
 * Caso contrário, o cliente é criado com os dados padrão.
 * Além disso, ele define a propriedade atualizando como true,
 * para que o botão de salvar seja substituído por um botão de atualizar.
 */
  ngOnInit(): void {
   this.route.queryParamMap.subscribe((query: any) => {
    const params = query['params']
    const id = params['id']
    if(id){
      let clienteEncontrado = this.service.buscarClientePorId(id);
      if(clienteEncontrado){
        this.atualizando = true;
        this.cliente = clienteEncontrado;
      }
    }

   } )
  }
  salvar(){
    this.service.salvar(this.cliente);
    // Cria um novo cliente e limpa o formulário
    this.cliente = Cliente.newCliente();
  }

}
