import { Component, OnInit } from '@angular/core';
import {timer} from "rxjs";

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  time:number =10;
  isPaused:boolean = false;

  ourTimer(){
    this.isPaused = false;
    if(!this.isPaused){
      let Timer = setInterval(() =>{
        if(this.isPaused){
          clearInterval(Timer)
          console.log(this.isPaused);
        }
        else{
          if(this.time == 1){
            clearInterval(Timer);
          } else {
            this.time;
          }
        }
        this.time -=1;
      }, 1000);
    }
  }
  pause(){
    this.isPaused = !this.isPaused;
  }
}
