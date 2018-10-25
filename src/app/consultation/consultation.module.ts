import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


import { BookComponent } from './book/book.component';
import { BookDisplayComponent } from './book-display/book-display.component';
import { BookListComponent } from './book-list/book-list.component';
import { ConsultationRoutingModule } from './consultation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    //internal module
    ConsultationRoutingModule,

    //material
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [BookComponent, BookDisplayComponent, BookListComponent],
  providers: []
})
export class ConsultationModule { }
