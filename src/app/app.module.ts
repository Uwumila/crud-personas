import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';  
import { PersonasComponent } from './personas/personas.component';

@NgModule({
  declarations: [
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    PersonasComponent 
  ],
  providers: [],
    
})
export class AppModule { }
