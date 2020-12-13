import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { resourceUsage } from 'process';



@Component({
  selector: 'app-blog-table',
  templateUrl: './blog-table.component.html',
  styleUrls: ['./blog-table.component.css']
})
export class BlogTableComponent implements OnInit {

  blogsArray = [];

  constructor(private restApiService: RestApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadBlogList();
  }

  loadBlogList() {
    this.restApiService.getBlogs().subscribe((res: any[]) => {
      this.blogsArray = res;
    })
  }

  deleteBlog(id) {
    this.restApiService.deleteBlog(id).subscribe((res: any[]) => {
      this.loadBlogList();
    });
  }

  openDialog(blog) {
    const dialogRef = this.dialog.open(DialogElementsExampleDialog, {
      width: '780px',
      height: '630px',
      data: {
        title: blog.title,
        content: blog.content,
        id: blog.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.restApiService.editBlog(result.id, result.title, result.content).subscribe((res: any[]) => {
        this.loadBlogList();
      });
    });
  }
}

@Component({
  selector: 'blog-edit-dialog',
  templateUrl: 'blog-edit-dialog.html',
})
export class DialogElementsExampleDialog {
  restApiService: RestApiService;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
  }
}