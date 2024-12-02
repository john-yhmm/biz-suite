import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent{
  invoice = new FormGroup({
    invoiceNo: new FormControl(''),
    date: new FormControl(''),
    customerName: new FormControl(''),
    totalAmount: new FormControl(''),
    dueDate: new FormControl('')
  });
}
