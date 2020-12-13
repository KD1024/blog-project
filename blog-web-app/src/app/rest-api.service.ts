import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  static editBlog(currentID: number, currentTitle: string, currentContent: string) {
    throw new Error('Method not implemented.');
  }

  private api = "http://localhost:8080";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getBlogs(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api+ '/blog/');
  }

  deleteBlog(id): Observable<any[]> {
    return this.httpClient.delete<any[]>(this.api+ '/blog/' + id);
  }

  createBlog(title, content): Observable<any[]> {
    return this.httpClient.post<any[]>(this.api+ '/blog/', {
      "title": title,
      "content": content
    });
  }

  editBlog(id, title, content): Observable<any[]> {
    return this.httpClient.put<any[]>(this.api+ '/blog/' + id, {
      "title": title,
      "content": content
    });
  }

}
