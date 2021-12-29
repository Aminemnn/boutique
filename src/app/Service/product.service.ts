import { variable } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { CATALOGUE } from '../shared/mock-data/catalogue-produits';
import { Produit } from '../shared/models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Produit[] {
    return CATALOGUE;
    }
    setProduit(CATALOGUE : any){
      var x = CATALOGUE.image
    }
    getProduit(){
      return this.setProduit
    }
  constructor() { }
}
