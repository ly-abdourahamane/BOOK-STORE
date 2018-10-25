import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './shared/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { BookNewComponent } from './admin/book-new/book-new.component';
import { AuthorNewComponent } from './admin/author-new/author-new.component';


const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'admin', component: AdminComponent},
    {path: 'admin/new-book', component: BookNewComponent},
    {path: 'admin/new-author', component: AuthorNewComponent},
    {path: 'books', loadChildren : './consultation/consultation.module#ConsultationModule'}
]


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
