import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './customer/customer.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'customer', component: CustomerComponent},
];
