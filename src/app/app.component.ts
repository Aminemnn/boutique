import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myScriptElemnt!: HTMLScriptElement;
  title = 'boutique';
  constructor(){
    this.myScriptElemnt = document.createElement("script");
    this.myScriptElemnt.src ="........";
    document.body.appendChild(this.myScriptElemnt);
  }
}
