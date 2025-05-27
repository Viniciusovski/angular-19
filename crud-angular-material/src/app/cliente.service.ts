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
   * Busca um cliente no localStorage pelo seu id.
   * 
   * @param id O id do cliente que será buscado.
   * @returns O cliente encontrado, ou undefined se o cliente não existir.
   */
  buscarClientePorId(id: string) : Cliente | undefined{
    const clientes = this.obterStorage();
    return clientes.find(cliente => cliente.id === id)
  }

  /**
   * Retorna o repositório de clientes no localStorage.
   * Se o repositório não existir, ele é criado e 
   * um array vazio é salvo nele.
   * 
   * Retorna uma lista de clientes.
   */
  private obterStorage() : Cliente[]{
    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);

    if(repositorioClientes){
      
      const clientes: Cliente[] = JSON.parse(repositorioClientes);
      return clientes;
    }

    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }

  pesquisarClientes(nomeBusca: string) : Cliente[]{
    
    const clientes = this.obterStorage();
    
    if(!nomeBusca){
      return clientes;
    }

    // O indexOf() retorna a posição do valor especificado na string.
    // Caso o valor especificado não seja encontrado, o indexOf() retorna -1.
    // Nesse caso, o filter() vai retornar os clientes que o nome contiver o valor especificado,
    // pois o indexOf() vai retornar um valor diferente de -1.
    // Isso significa que o filter() vai retornar todos os clientes que o nome contiver o valor especificado.
    return clientes.filter(c => c.nome?.indexOf(nomeBusca) !== -1);
  }

}
