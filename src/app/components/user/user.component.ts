import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from 'src/app/service.service';
import { formatDate } from 'src/app/utils/formatter';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user: any;
  @Output() editUser = new EventEmitter();
  @Output() setEditUser = new EventEmitter();
  isEditingSalary = false;
  currentEditingSalary: any;
  formatDate = formatDate;
  constructor(private service: UserService) {}

  changeUser(): void {
    this.setEditUser.emit(this.user);
    this.editUser.emit();
  }

  deleteUser(id: number): void {
    this.service.deleteUser(id);
    window.location.reload();
  }

  toggleSalaryEditing() {
    this.isEditingSalary = !this.isEditingSalary;
    if ( this.isEditingSalary == false ) {
      this.currentEditingSalary = null;
    }
  }

  setEditSalary(salary: any) {
    this.currentEditingSalary = salary;
  }
}
