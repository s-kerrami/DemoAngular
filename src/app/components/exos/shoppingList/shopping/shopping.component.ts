import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {
    articlesParent : { id: number, nom : string}[] = []
    prochainId : number = 1

    ajouterArticleParent(nom : string){
        this.articlesParent.push({ id : this.prochainId, nom})
        this.prochainId++
    }

    supprimerArticleParent(id : number){
        this.articlesParent.slice(id, 1)
    }
}