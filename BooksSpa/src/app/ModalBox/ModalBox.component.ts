import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Book } from '../Models/book';
import { FormGroup, FormControl } from '@angular/forms';
import { BookServiceService } from '../_services/bookService.service';

@Component({
  selector: 'app-ModalBox',
  templateUrl: './ModalBox.component.html',
  styleUrls: ['./ModalBox.component.css']
})
export class ModalBoxComponent implements OnInit {
  @Input() showMePartially: boolean;
  @Input() oldBook: Book;

  constructor(private bookService: BookServiceService) { }

  profileForm = new FormGroup({
    Name: new FormControl(''),
    Desc: new FormControl(''),
    Gender: new FormControl(''),
    Nationality: new FormControl(''),
  });
  
  ngOnInit() {
  }

  updateBook() {
    const bookId = this.oldBook.id;
    if (this.profileForm.value.Name) {
      this.oldBook.name = this.profileForm.value.Name;
    }

    if (this.profileForm.value.Desc) {
      this.oldBook.desc = this.profileForm.value.Desc;
    }

    if (this.profileForm.value.Gender) {
      this.oldBook.gender = this.profileForm.value.Gender;
    }

    if (this.profileForm.value.Nationality) {
      this.oldBook.nationality = this.profileForm.value.Nationality;
    }

    this.bookService.updateBook(bookId, this.oldBook)
      .subscribe(data => {
        //this.closebutton.nativeElement.click();
      });
  }

}
