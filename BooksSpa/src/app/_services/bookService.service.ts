import { Book } from './../Models/book';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BookServiceService {
  baseurl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
  return this.http.get<Book[]>(this.baseurl + '/');
  }

  getBook(id): Observable<Book> {
    return this.http.get<Book>(this.baseurl + '/' + id);
  }

  addBook(model): Observable<Book> {
    return this.http.post<Book>(this.baseurl + '/' , model);
  }

  updateBook(id: number, model): Observable<Book> {
   // const body = JSON.stringify(model);
    return this.http.put<Book>(this.baseurl + '?id=' + id, model);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(this.baseurl + '/' + id);
  }

}
