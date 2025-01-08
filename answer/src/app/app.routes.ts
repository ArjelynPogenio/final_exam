import { Routes } from '@angular/router';
import { Route1Component } from './route-1/route-1.component';
import { Route2Component } from './route-2/route-2.component';

export const routes: Routes = [
    {
        path: '',
        component: Route1Component
    },
    {
        path: 'route_2',
        component: Route2Component
    }
];
