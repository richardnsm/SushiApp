import { Component, OnInit } from '@angular/core';
import { Box } from '../../models/Box';
import { ApiService } from '../../service/api.service';
import { CartService } from '../../cart/cart.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

boxes: Box [] = []

constructor(private apiService: ApiService,
            private cartService: CartService){
  this.detail()
  
}

addToCart(box: Box){
  this.cartService.addToCart(box);
  window.alert('Le produit a bien été ajouté au panier!')
}

detail(): void {
  this.apiService.getBox().subscribe((res: any) => {
    for (let boxDetails of res){
      let box = new Box();
      boxDetails.id = box.id;
      boxDetails.nom = box.nom;
      boxDetails.aliments = box.aliments;
      boxDetails.image = box.image;
      boxDetails.prix = box.prix;
      boxDetails.saveurs = box.saveurs;
      boxDetails.nbPieces = box.nbPieces;
      this.boxes.push(box);
      console.log(this.boxes)
    }

  })
}

}
