import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userForm = this.formBuilder.group({
    name: [''],
    cpf: [''],
    born_date: [''],
  });
  startDate = new Date(1990, 0, 1);
  @Output() createUser = new EventEmitter();
  constructor(private formBuilder: FormBuilder, private service: UserService) {}

  registerUser(): void {
    this.service.createUser(this.userForm.value);
    this.createUser.emit();
  }
}
