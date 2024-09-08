import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  employeeForm = new FormGroup({
    id : new FormControl(""),
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
  });

  submit() {
    alert("Welcome back, " + this.employeeForm.value.name + "🎉");
  }
}
