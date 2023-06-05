import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  text:string = "Angular Setup";
  count:number = 0;
  disable:any = true;
  show:boolean = true;
  colorr:string = 'red';
  userDetails=[
    {name:"harshit",age:"22"},
    {name:"ram", age:"22"}
  ];

  getName(val:any){
    // alert("Working")
    console.log(val);
    this.text = val;
  }

  dis(){
    this.disable = !this.disable;
  }

  counter(val:string){
    switch(val){
      case 'add':
        this.count++;
        break;
      case 'sub':
        this.count--;
        break;
      default:
        console.log("error");
        
    }
  }

  changeIf(){
    this.show=!this.show;
  }

  changecolor(val:any){
    this.colorr = val;
  }

}
