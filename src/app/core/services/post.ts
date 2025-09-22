import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Post {

  private readonly Http = inject(HttpClient);

  getPostById(): Observable<unknown> {
    return this.Http.get<unknown>(environment.apiUrl + '/posts/1');
  }


}
