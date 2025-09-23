import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { PostData } from '../../shared/models/post.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly Http = inject(HttpClient);

  getPostById(id: number): Observable<PostData> {
    return this.Http.get<PostData>(environment.apiUrl + `/posts/${id}`);
  }
}
