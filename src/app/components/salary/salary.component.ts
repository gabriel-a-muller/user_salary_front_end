import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SalaryService } from 'src/app/salary.service';
import { formatDate, formatCurrency } from 'src/app/utils/formatter';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css'],
})
export class SalaryComponent {
  @Input() salary: any;
  @Output() editSalary = new EventEmitter();
  @Output() setEditSalary = new EventEmitter();
  formatDate = formatDate;
  formatCurrency = formatCurrency;

  constructor(private service: SalaryService) {}

  changeSalary(): void {
    this.setEditSalary.emit(this.salary);
    this.editSalary.emit();
  }

  deleteSalary(id: number): void {
    this.service.deleteSalary(id);
    window.location.reload();
  }
}
