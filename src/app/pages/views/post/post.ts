import { Component,inject } from '@angular/core';
import { Navbar } from "../../../shared/components/navbar/navbar";
import { ActivatedRoute } from '@angular/router';
import { RouteData } from '../../../shared/models/route.model';
import { CardModule } from 'primeng/card';
import { PostService } from '../../../core/services/post';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-post',
  imports: [Navbar, CardModule],
  templateUrl: './post.html',
  styleUrl: './post.scss'
})
export class Post {
  private readonly route = inject(ActivatedRoute);
  routeData: RouteData | null = null;
  private readonly postService = inject(PostService);
  post = toSignal(this.postService.getPostById(1));
  
  
  constructor() {
    this.routeData = this.route.snapshot.data as RouteData;
  }
  
  
  
}
  