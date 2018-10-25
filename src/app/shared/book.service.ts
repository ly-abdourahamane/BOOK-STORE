import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http: HttpClient) { }

  getBook(): Book {
      return  <Book> {title: "angular", description: "this book is ...", author: "abdou"};
  }

  getBooks() {
      return this._http.get('api/books');
  }

  saveBook(book: Book): Observable<Book> {
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');
    return this._http.post<Book>('api/books', book, {headers: headers});
  }

  deleteBook(id: number): Observable<Book> {
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');

    return this._http.delete<Book>('api/books/' + id, {headers: headers});
  }

  getBookById(id: number): Observable<Book> {
    return this._http.get<Book>('api/books/' + id);
  }
}
