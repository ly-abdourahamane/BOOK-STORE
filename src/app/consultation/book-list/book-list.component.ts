import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shared/book.service';
import { Book } from '../../shared/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  private books: Book[];
  private bookSelected: Book;
  private book: Book;
  
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.book = {title: "", description: "", author: ""};

    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.books = books;
      
      console.log(books);
    }, error => console.log(error))
  }

  onDelete(event: Book): void {
    this.bookService.deleteBook(event.id)
    // .retry(3)
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
