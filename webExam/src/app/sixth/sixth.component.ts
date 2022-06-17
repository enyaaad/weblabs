import {Component} from '@angular/core';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class SixthComponent {

  constructor() { }
  text:number=0;
  result:string="0";
  option:number=0;

  inputHandler(event:any){
    this.result = event.target.value;
    this.convert(this.option);
  }
  convert(option:number){
    this.result = parseInt(this.result).toString(option);

  }

}
