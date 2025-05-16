import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

// Este decorador torna a classe um serviço injetável e a 
// registra como um provedor na raiz do aplicativo.
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  salvar(cliente: Cliente){
    console.log("Dados Cliente: ", cliente);
  }
}
