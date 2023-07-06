import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url!: string;
  constructor(private _http: HttpClient) { }

  getAllPost(): Observable<Post[]>{
    return this._http.get<Post[]>('localhost:8080/post/all');
  }
  getPost(id: number): Observable<Post>{
    return this._http.get<Post>(`localhost:8080/post/${id}`);
  }
  createPost(post: Post): Observable<any>{
    return this._http.post('localhost:8080/post',post);
  }
  updatePost(id:number,post: Post):Observable<any>{
    return this._http.put(`localhost:8080/post/${id}`,post);
  }
  deletePost(id: number):Observable<any>{
    return this._http.delete(`localhost:8080/post/${id}`);
  }
}
