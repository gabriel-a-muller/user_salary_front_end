import { Component, Input } from '@angular/core';
import { formatDate } from 'src/app/utils/formatter';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user: any;
  formatDate = formatDate;
}
