import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-shipment',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './shipment.component.html',
  styleUrl: './shipment.component.scss'
})
export class ShipmentComponent {
  shipment = new FormGroup({
    trackingNo: new FormControl(''),
    carrier: new FormControl(''),
    date: new FormControl(''),
    destination: new FormControl('')
  });

  savedShipments: any[] = [];

  onSave(){
    this.savedShipments.push(this.shipment.value);
    this.shipment.reset();
  }

  onDelete(index: number){
    this.savedShipments.splice(index,1)
  }
}
