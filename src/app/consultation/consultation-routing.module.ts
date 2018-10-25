import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';


const CONSULTATION_ROUTES: Routes = [
    {path: '', component: BookListComponent}, 
    {path: ':id', component: BookComponent}
   ]
  

@NgModule({
  imports: [RouterModule.forChild(CONSULTATION_ROUTES)],
  exports: [RouterModule],
  providers: []
})

export class ConsultationRoutingModule { }
