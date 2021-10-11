import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SalaryService } from 'src/app/salary.service';
import { formatDate } from 'src/app/utils/formatter';

@Component({
  selector: 'app-register-salary',
  templateUrl: './register-salary.component.html',
  styleUrls: ['./register-salary.component.css']
})
export class RegisterSalaryComponent implements OnInit {

  @Input() currentEditingSalary: any;
  @Input() user: any;
  salaryForm = this.formBuilder.group({
    salary: [''],
    discounts: [''],
    date: [''],
    user: [''],
  });
  startDate = new Date(2021, 0, 1);
  formatDate = formatDate;
  @Output() createSalary = new EventEmitter();
  constructor(private formBuilder: FormBuilder, private service: SalaryService) { }

  ngOnInit() {
    if ( this.currentEditingSalary != null ) {
        this.salaryForm.controls['salary'].setValue(this.currentEditingSalary.salary);
        this.salaryForm.controls['discounts'].setValue(this.currentEditingSalary.discounts);
        this.salaryForm.controls['date'].setValue(this.currentEditingSalary.date);
        this.salaryForm.controls['user'].setValue(this.currentEditingSalary.user);
    }
  }

  registerSalary(): void {
    this.salaryForm.controls['user'].setValue(this.user.id);
    this.service.createSalary(this.salaryForm.value);
    this.createSalary.emit();
    window.location.reload();
  }

  editSalary(): void {
    this.service.patchSalary(this.salaryForm.value, this.currentEditingSalary.id);
    this.createSalary.emit();
    window.location.reload();
  }
}
