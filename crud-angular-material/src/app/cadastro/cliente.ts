import {v4 as uuid} from 'uuid';

export class Cliente{
    id?: string;
    nome?: string;
    cpf?: string;
    dataNascimento?: string;
    email?: string;
/*
Cria uma nova instância de Cliente e 
define sua propriedade id como um identificador exclusivo 
gerado pela biblioteca uuid. O método então retorna o objeto 
Cliente recém-criado.
*/
    static newCliente(): Cliente{
        const cliente = new Cliente();
        cliente.id = uuid();
        return cliente;
    }
}