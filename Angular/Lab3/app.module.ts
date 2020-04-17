import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,FormBuilder,FormGroup} from '@angular/forms';
import { AppComponent } from './app.component';
import { Products } from './products';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
