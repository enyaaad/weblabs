import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";
import {invalid} from "@angular/compiler/src/render3/view/util";

@Component({
  selector: 'trird-trird',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor() { }

  color:string="red";
  isRed:boolean=true;
  seconds:number = 0;

  ngOnInit(): void {
    let time = this.randomTime(1,10);
    this.timing();
    setInterval(()=>this.changeClass(),time);

  }


  timing(){
    let date = Date.now();

  }

  clickEvent(){
    let sec:number =this.seconds;
    this.changeClass()
    console.log(sec);
  }

  changeClass(){
    this.isRed = !this.isRed;
  }

  randomTime(min:number, max:number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min) *1000;
  }

}
