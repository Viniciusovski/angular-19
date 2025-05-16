import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

// Este decorador torna a classe um serviço injetável e a 
// registra como um provedor na raiz do aplicativo.
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES";

  constructor() { }

  salvar(cliente: Cliente){
    console.log("Dados Cliente: ", cliente);
  }

  /**
   * Retorna o repositório de clientes no localStorage.
   * Se o repositório não existir, ele é criado e 
   * um array vazio é salvo nele.
   * 
   * Retorna uma lista de clientes.
   */
  obterStorage() : Cliente[]{
    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);

    if(repositorioClientes){
      
      const clientes: Cliente[] = JSON.parse(repositorioClientes);
      return clientes;
    }

    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }
}
