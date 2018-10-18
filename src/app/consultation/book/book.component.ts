import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/book';
import { BookService } from '../../shared/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: Book;
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.book = {title: "", description: "", author: ""};
  }

  saveBook(): void {
    this.bookService.saveBook(this.book).subscribe((result: Book) => {
      console.log(result);
      this.book = {title: "", description: "", author: ""};
    }, error => console.log(error))
  }

}
