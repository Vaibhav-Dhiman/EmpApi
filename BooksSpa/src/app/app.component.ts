import { Book } from './Models/book';
import { BookModel } from './Models/BookModel';
import { BookServiceService } from './_services/bookService.service';
import { Component, OnInit } from '@angular/core';
import { NgModule, Renderer2 , ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
   books: Book[] = [];
   book: Book;
   public showForm: any;
   public showFormEdit: any;
   public bookUpateForm: any;
   public buttonName: any;
   showVar = false;
   oldBook: Book;
  //  uploadForm: FormGroup;
  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
     this.books = data;
     console.log(data);
   });
  }

  constructor(private bookService: BookServiceService, private fb: FormBuilder, private renderer: Renderer2, private el: ElementRef) { }

  onSubmit() {
  }

  btnBookAdd() {
    this.showForm = 'Show';
  }

  getBookById(id: number) {
    this.bookService.getBook(id)
     .subscribe(data => {
      // put value to update form
     });
  }

  addNewBook(bkmodel: Book) {
    //bkmodel.price = Number(bkmodel.price);
    bkmodel.gender = 'Male';
    bkmodel.nationality = 'Indian';
    this.bookService.addBook(bkmodel)
    .subscribe(
      (response: any) => {
          console.log(response);
          console.log(this.books);
      }, (error: any) => {
          console.log(error);
          this.books.push(bkmodel);
      });
  }

  updateBook(bkmodel, id) {
    bkmodel.price = Number(bkmodel.price);
    this.bookService.updateBook(bkmodel, id)
      .subscribe(data => {

      });
  }

  updateShowBook(id) {
    this.showVar = false;
    //this.oldBook = id;
    this.bookService.getBook(id)
    .subscribe(data => {
      this.oldBook = data;
    });
    this.showVar = !this.showVar;
  }

  remove() {
    this.showForm = !this.showForm;
    if (this.showForm)  {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
  }
 }
    removes() {
    this.showForm = 'Hide';
  }

    deleteBook() {
    this.showForm = 'Hide';
  }
    removeBook(id) {
    this.bookService.deleteBook(id)
    .subscribe(data => {
    });

    const index = this.books.findIndex(d => d.id === id);
    this.books.splice(index, 1);
  }
}

