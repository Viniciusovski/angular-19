import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lista-compras',
  imports: [ FormsModule, CommonModule ],
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

    this.item = '';
  }

  riscarItem(itemLista: ItemLista) {
    // Inverte o estado de 'comprado' do item na lista de compras
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista(){
    this.lista = [];
  }

}
