import { Routes } from '@angular/router';
import { Post } from './pages/views/post/post';
import { Adaptor } from './pages/views/adaptor/adaptor';
import { TextFormat } from './pages/views/text-format/text-format';
import { Notification } from './pages/views/notification/notification';
import { subtitle, title } from '@primeuix/themes/aura/card';
import { TotalPrice } from './pages/views/total-price/total-price';
import { OrderStateState } from './pages/views/order-state-state/order-state-state';

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
    },
    {
        data:{
            title: 'null&factory Pattern',
            subTitle: 'Welcome to the null&factory patterns page'
        },
        path: "null&factory",
        component: Notification
    },
    {
        data:{
            title:"Template Method Pattern",
            subTitle: "Welcome to template method pattern page"
        },
        path:'template',
        component:TotalPrice
    },
    {
        data:{
            title: 'State Design Pattern',
            subTitle: 'Welcome to the state design pattern page'
        },
        path:'state',
        component:OrderStateState
    }
];
