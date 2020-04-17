import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Form } from './form';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title='Angular 6 Project!';
  //todaydate=new Date();
  //jsonval={name:'Rox',age:'25',address:{a1:'Mumbai',a2:'Karnataka'}};
  //months=["Jan","feb","mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
  //todaydate;
  //name:String;
  /*constructor(private myservice:MyserviceService){}
  ngOnInit()
  {
    this.todaydate=this.myservice.showTodayDate();
    this.name=this.myservice.showName();
  }*/
  constructor(){}
  model=new Form(1001,"samyu",30000,"SDC");
  //submitted=false;
  onSubmit(){
   //this.submitted=true;
    alert(this.model.ID+" "+this.model.Name+" "+this.model.Salary+" "+this.model.Department);
  }
 get FormData(){return JSON.stringify(this.model)}
}
