import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shared/book.service';
import { Book } from '../../shared/book';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],

  animations: [
    trigger('book-items', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: -5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75px)', offset: 1}),
          ]))
        ]), {optional: true})

      ])
    ])
  ]
})
export class BookListComponent implements OnInit {

  private books: Book[];
  private bookSelected: Book;
  private book: Book;
  
  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.book = {title: "", description: "", author: ""};

    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.books = books;
      
      console.log(books);
    }, error => console.log(error))

    
  }

  onDelete(event: Book): void {
    this.bookService.deleteBook(event.id)
    .subscribe((book: Book) => {
    }, error => console.log(error));

    this.books.splice(this.books.indexOf(event), 1);
    this.bookSelected = event;
    console.log(event);
  }

  saveBook(): void {
    this.bookService.saveBook(this.book).subscribe((result: Book) => {
      this.books.push(result);

      console.log(result);
      this.book = {title: "", description: "", author: ""};
    }, error => console.log(error))
  }

}
