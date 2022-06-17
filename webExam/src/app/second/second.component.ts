import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trird-app',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'autoincrement';
  tempo:number = 1;
  isEven: boolean|undefined;
  asd(){
    console.log(this.title)
  }
  increment(){
    this.tempo++
    this.isEvenFunc();
  }
  decrement(){
    this.tempo--
    this.isEvenFunc();
  }
  isEvenFunc(){
    this.isEven = this.tempo % 2 == 0;
    console.log(this.isEven);
  }
}
