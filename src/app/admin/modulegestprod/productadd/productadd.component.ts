import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {

  productAddForm!: FormGroup  
  nameControl = new FormControl('');
 prixControl = new FormControl('');
 categorieControl = new FormControl

  
    
  
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.productAddForm = this.fb.group({
      nameConrole:[''],
      prixControl:[''],
      categorieControl:[''],
      fichierControl:[''],
      descriptioncControl:['']
    })
  }
  onAjouter(){
   alert(JSON.stringify(this.productAddForm.value));
  }

}
