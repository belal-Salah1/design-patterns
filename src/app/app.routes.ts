import { Routes } from '@angular/router';
import { Post } from './pages/views/post/post';
import { Adaptor } from './pages/adaptor/adaptor';

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
    },
    {
        data:
        {
            title: 'Adaptor Pattern',
            subTitle: 'Welcome to the adaptor pattern page'
        },
        path: 'adaptor',
        component: Adaptor
    }
];
