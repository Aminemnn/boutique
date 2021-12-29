import { EmailValidator } from "@angular/forms";

export class Produit {
id?: string;
 nom?: string;
 image?: string;
 prix?: string;
 description?: string;
 categID : string;
 msg? : string;
 constructor(args: Produit ) {
 this.id = args.id;
 this.nom = args.nom;
 this.image = args.image;
 this.prix = args.prix;
 this.description = args.description;
 this.categID=args.categID;
 this.msg=args.msg
 }
 
}




