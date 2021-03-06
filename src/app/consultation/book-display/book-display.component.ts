import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../shared/book';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from '../../shared/book.service';


@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent implements OnInit {

  @Input()
  private book: Book;

  @Output()
  private delete: EventEmitter<Book> = new EventEmitter<Book>();


  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    
  }

  onDelete() {
    this.delete.emit(this.book);
  }

}
