import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/service.service';
import { formatDate } from 'src/app/utils/formatter';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Input() currentEditingUser: any;
  userForm = this.formBuilder.group({
    name: [''],
    cpf: [''],
    born_date: [''],
  });
  startDate = new Date(1990, 0, 1);
  formatDate = formatDate;
  @Output() createUser = new EventEmitter();
  constructor(private formBuilder: FormBuilder, private service: UserService) { }

  ngOnInit() {
    if ( this.currentEditingUser != null ) {
        this.userForm.controls['name'].setValue(this.currentEditingUser.name);
        this.userForm.controls['cpf'].setValue(this.currentEditingUser.cpf);
        this.userForm.controls['born_date'].setValue(this.currentEditingUser.born_date);
    }
  }

  registerUser(): void {
    this.service.createUser(this.userForm.value);
    this.createUser.emit();
    window.location.reload();
  }

  editUser(): void {
    this.service.patchUser(this.userForm.value, this.currentEditingUser.id);
    this.createUser.emit();
    window.location.reload();
  }
}
