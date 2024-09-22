import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  employeeForm = new FormGroup({
    empNum : new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    position: new FormControl(""),
    department: new FormControl(""),
    password: new FormControl("", Validators.required),
  });

  submit() {
    alert("Welcome back, " + this.employeeForm.value.name + "🎉");
  }
}
