import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'molla-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  items: any;
  dataArray: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  constructor(private blogapi: ApiService) { }

  ngOnInit(): void {
    this.blogapi.getblogs().subscribe(res => {
      this.items = res;
      console.log(this.items)
    })
  }

  handleButtonClick() {
    // This method will be called when the button is clicked
    console.log('Button clicked!');
    // Add your custom logic here
  }

}
