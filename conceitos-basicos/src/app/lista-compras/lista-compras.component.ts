import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';
@Component({
  selector: 'app-lista-compras',
  imports: [ FormsModule ],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {

  item: string = '';
  lista: ItemLista[] = [];

  adicionarItem() {
    let itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id = this.lista.length + 1;

    // push add um elemento no array
    this.lista.push(itemLista);

    // table imprime o array em forma de tabela
      console.table(this.lista);
  }
}
