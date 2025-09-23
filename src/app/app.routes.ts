import { Routes } from '@angular/router';
import { Post } from './pages/views/post/post';
import { Adaptor } from './pages/views/adaptor/adaptor';
import { TextFormat } from './pages/views/text-format/text-format';

export const routes: Routes = [
    { path: '', redirectTo: 'post', pathMatch: 'full' },
    {
        data:
        {
            title: 'singleton Pattern',
            subTitle: "Welcome to the singleton patternpage"
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
    },
    {
        data:
        {
            title: 'Strategy Pattern',
            subTitle: 'Welcome to the Strategy pattern page'
        },
        path: 'text-format',
        component: TextFormat
    }
];
