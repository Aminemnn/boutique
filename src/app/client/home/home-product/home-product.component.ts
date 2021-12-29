import { style } from '@angular/animations';
import { FormatWidth } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';
import {CATALOGUE} from '../../../shared/mock-data/catalogue-produits' ;

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent {
  ch="Salut, ce message provient du composant pere de ce composant"
  title = "PRODUITS" ;
produits = CATALOGUE ;

public displayNav: boolean = false;

  constructor(private productService: ProductService , private Produits : ProductService ) {
   
  }
  ngOnInit(): void {
    this.getProducts()
   
  }
  setProduits(CATALOGUE : any){
    var x = this.Produits.setProduit(CATALOGUE)
  }
  getProducts() {
    this.produits = this.productService.getProducts() ;
  }
onDetail(CATALOGUE: any){
  alert(CATALOGUE.description )
  alert(CATALOGUE.msg=this.ch)

}
onAcheterImage(CATALOGUE : any){
   return CATALOGUE.Image
}
onAcheterPrix(CATALOGUE : any){
  return CATALOGUE.prix
}

openNav(){
  this.displayNav = true;
 
}

closeNav(){
  this.displayNav = false;
}
      
      
}
function and(description: any, and: any, arg2: string) {
  throw new Error('Function not implemented.');
}

function getProducts() {
  throw new Error('Function not implemented.');
}

