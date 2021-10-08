import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  formatDate = formatDate;

  changeUser(): void {
    this.setEditUser.emit(this.user);
    this.editUser.emit();
  }
}
