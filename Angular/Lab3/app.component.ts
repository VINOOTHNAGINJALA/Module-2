import { Component } from '@angular/core';
import { Products} from './products';
import { FormArray, FormGroup, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegisterForm';
  pid:number;
    ProductName:string;
    ProductCost:number;
    ProductOnline:string;
    ProductCat:string;
    Available:string;

  data:Array<any>=[
    {name:'Big Bazar',value:'Big bazar'},
    {name:'Dmart',value:'Dmart'}
  ];


  
/*ff:FormGroup;
  onCheckChange(event){
    const checkArr:FormArray=this.ff.get('checkArr') as FormArray;
    if(event.target.checked){
      checkArr.push(new FormControl(event.target.value));
    }
    else{
      let i:number=0;
      checkArr.controls.forEach((item: FormControl)=>{
        if(item.value==event.target.value){
          checkArr.removeAt(i);
          return;
        }
        i++;
      })
    }
  }*/
  
  onSubmit(value:any){
   // alert(JSON.stringify(value));
    
   // alert(this.pid + " "+this.ProductName);
    console.log(this.pid+" "+this.ProductName+" "+this.ProductCost+" "+this.ProductOnline+" "
    +this.ProductCat+" "+this.Available);
    
  }
}
