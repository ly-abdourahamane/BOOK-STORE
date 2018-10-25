import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../shared/book';
import { BookService } from '../../shared/book.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {switchMap} from 'rxjs/operators';
import { Location } from '@angular/common';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  private book: Book;

  @Output()
  private delete: EventEmitter<Book> = new EventEmitter<Book>();


  constructor(private route: ActivatedRoute, private bookService: BookService, private location: Location) { }

  ngOnInit() {
    console.log("Book Component", this.book);

    this.route.paramMap.pipe(
      
      switchMap((params: ParamMap) => this.bookService.getBookById(parseInt(params.get('id'), 10))))
      .subscribe((book: Book) => {
        this.book = book; console.log(this.book)
      });
  }

  onDelete() {
    this.delete.emit(this.book);
  }

  goBack(): void {
    this.location.back();
  }
}
