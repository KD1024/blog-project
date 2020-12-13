import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  public inputTitle = '';
  public inputContent = '';

  constructor(private restApiService: RestApiService) { }

  ngOnInit(): void {
  }

  createBlog() {
    this.restApiService.createBlog(this.inputTitle, this.inputContent).subscribe((res: any[]) => {
      this.inputTitle = '';
      this.inputContent = '';
    });
  }

}
