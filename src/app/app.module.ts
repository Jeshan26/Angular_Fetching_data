import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { AveragePipe } from './pipes/average.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StudentCardComponent,
    AveragePipe,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
