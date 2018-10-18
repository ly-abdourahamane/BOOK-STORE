import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../../shared/book.service';
import { Book } from '../../shared/book';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent implements OnInit {

  @Input()
  book: Book;

  constructor() { }

  ngOnInit() {
  }

}
