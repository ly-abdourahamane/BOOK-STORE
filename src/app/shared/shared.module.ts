import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from './book.service';
import { UppercaseDirective } from './uppercase.directive';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UppercaseDirective, HomeComponent],
  exports: [UppercaseDirective],
  providers: [BookService]
})
export class SharedModule { }
