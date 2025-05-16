import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

// Este decorador torna a classe um serviço injetável e a 
// registra como um provedor na raiz do aplicativo.
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // Constante que define o nome do repositório de clientes no localStorage.
  // Ela é utilizada para definir o nome do item que será salvo no localStorage.
  static REPO_CLIENTES = "_CLIENTES";

  constructor() { }

  /**
   * Salva um cliente no localStorage.
   * 
   * Primeiro, ele verifica se o repositório de clientes existe no localStorage.
   * Se ele existir, o cliente é adicionado ao array de clientes.
   * Se ele não existir, o array de clientes é criado e o cliente é adicionado a ele.
   * 
   * @param cliente O cliente que será salvo.
   */
  salvar(cliente: Cliente){
    const storage = this.obterStorage();
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
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
