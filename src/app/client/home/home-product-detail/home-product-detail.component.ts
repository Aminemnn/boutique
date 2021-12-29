import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';


@Component({
  selector: 'app-home-product-detail',
  templateUrl: './home-product-detail.component.html',
  styleUrls: ['./home-product-detail.component.css']
})
export class HomeProductDetailComponent implements OnInit {
  
  @Input() msg!: string;

  myScriptElemnt!: HTMLScriptElement;
  constructor( private Produits : ProductService) {
   
   }

   getProduits(){
     this.Produits.getProduit
   }

  ngOnInit(): void {
  }

}
