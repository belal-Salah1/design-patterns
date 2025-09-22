import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Post } from '../../shared/models/post.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly Http = inject(HttpClient);

  getPostById(): Observable<Post> {
    return this.Http.get<Post>(environment.apiUrl + '/posts/1');
  }
}
