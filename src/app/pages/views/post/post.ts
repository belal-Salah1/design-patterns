import { Component,inject } from '@angular/core';
import { Navbar } from "../../../shared/components/navbar/navbar";
import { ActivatedRoute } from '@angular/router';
import { RouteData } from '../../../shared/models/route.model';
@Component({
  selector: 'app-post',
  imports: [Navbar],
  templateUrl: './post.html',
  styleUrl: './post.scss'
})
export class Post {
  private readonly route = inject(ActivatedRoute);
  routeData : RouteData | null;
  title:string;
  subTitle:string;
  constructor(){
    this.routeData = this.route.snapshot.data as RouteData;
    this.title = this.routeData?.['title'] ?? '';
    this.subTitle = this.routeData?.['subTitle'] ?? '';
  }
}
  