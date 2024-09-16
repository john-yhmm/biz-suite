import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ShipmentComponent } from './shipment/shipment.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'shipment', component: ShipmentComponent}
];
