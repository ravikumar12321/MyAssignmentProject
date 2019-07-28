import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberCheck :any;
  answer:String = "";
  
  constructor(){}

  private checkValue(mynum :number) :void{
   console.log("checkValue function");
    if(mynum%2==0){
      console.log("condition 1");
      this.answer  = "Even";
    }
    else{
      console.log("condition 2");
      this.answer = "Odd";
    }
 }

  
}
