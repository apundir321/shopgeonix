import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'molla-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private singleblogapi: ApiService) { }

  bloginfo:any;

  ngOnInit(): void {
    let blogid = this.activeRoute.snapshot.paramMap.get('blogId');
    console.log(blogid)
    this.singleblogapi.getsingleblog(blogid).subscribe(res => {
      this.bloginfo = res
      console.log(this.bloginfo)
    })
  }

}
