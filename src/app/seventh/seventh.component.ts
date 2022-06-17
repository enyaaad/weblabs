import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seventh',
  templateUrl: './seventh.component.html',
  styleUrls: ['./seventh.component.css']
})
export class SeventhComponent{

  constructor() { }
  inputC:number=0;
  inputF:number=0;

  inputHandlerC(event:any){
    this.inputC = event.target.value;
    this.inputF = (9/5 * this.inputC + 32);
  }
  inputHandlerF(event:any){
    this.inputC = 5/9 * (this.inputF -32);
    this.inputF = event.target.value;
  }

}
