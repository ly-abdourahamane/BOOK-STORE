import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { SharedModule } from '../shared/shared.module';
import { BookComponent } from './book/book.component';
import { BookDisplayComponent } from './book-display/book-display.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    //internal module
    SharedModule,

    //material
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  declarations: [BookComponent, BookDisplayComponent, BookListComponent],
  exports: [BookComponent, BookDisplayComponent, BookListComponent],
  providers: []
})
export class ConsultationModule { }
