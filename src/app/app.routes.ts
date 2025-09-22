import { Routes } from '@angular/router';
import { Post } from './pages/views/post/post';

export const routes: Routes = [
    { path: '', redirectTo: 'post', pathMatch: 'full' },
    {
        data:
        {
            title: 'Post',
            subTitle: "Welcome to the post page"
        },
        path: 'post',
        component: Post
    }
];
