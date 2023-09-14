import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { BlogsComponent } from './blogs/blogs.component';



@NgModule({
  declarations: [
    SingleBlogComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogsModule { }
