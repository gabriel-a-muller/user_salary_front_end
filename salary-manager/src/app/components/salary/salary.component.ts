import { Component, Input } from '@angular/core';
import { formatDate, formatCurrency } from 'src/app/utils/formatter';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css'],
})
export class SalaryComponent {
  @Input() salary: any;
  formatDate = formatDate;
  formatCurrency = formatCurrency;
}
