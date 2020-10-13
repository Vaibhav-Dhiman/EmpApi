import { BookServiceService } from './_services/bookService.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalBoxComponent } from './ModalBox/ModalBox.component';

@NgModule({
   declarations: [
      AppComponent,
      ModalBoxComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [
      BookServiceService,
      FormBuilder
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
