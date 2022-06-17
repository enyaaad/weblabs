import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trird-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent  {
  src:string="assets/black-heart-icon.png";
  secondsrc:string="assets/black-heart-icon.png";
  isBlack:boolean = true;
  clickcount:number = 0;

  constructor() { }
  changeicon(){
    this.toggleBlack();
  }
  toggleBlack(){
    if(this.isBlack){
      this.src="assets/black-heart-icon.png";
      this.isBlack=false;
    }
    else{
      this.src="assets/red-heart-icon.png";
      this.isBlack=true;
    }
  }
  secondToggle(){
    this.clickcount++;
    if(this.clickcount%3==0){
      this.secondsrc="assets/red-heart-icon.png";
    }
    else{
      this.secondsrc= this.src="assets/black-heart-icon.png";
    }
  }
}
