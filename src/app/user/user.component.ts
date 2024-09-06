import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    dateOfBirth: new FormControl('')
  });
}
