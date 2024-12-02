import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'employee', component: EmployeeComponent},
    { path: 'customer', component: CustomerComponent},
    { path: 'invoice', component: InvoiceComponent},
    { path: 'shipment', component: ShipmentComponent},
    { path: 'product', component: ProductComponent },
];
