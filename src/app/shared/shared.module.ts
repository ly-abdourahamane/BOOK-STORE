import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from './book.service';
import { UppercaseDirective } from './uppercase.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UppercaseDirective],
  exports: [UppercaseDirective],
  providers: [BookService]
})
export class SharedModule { }
