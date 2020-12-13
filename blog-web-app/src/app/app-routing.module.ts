import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogTableComponent } from './blog-table/blog-table.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';

const routes: Routes = [
  { path: 'blog-list', component: BlogTableComponent },
  { path: 'create-blog', component: CreateBlogComponent },
  { path: '', redirectTo: 'blog-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
