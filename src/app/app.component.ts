import { Component, OnInit } from '@angular/core';
import { SalaryService } from './salary.service';
import { UserService } from './service.service';
import { formatCurrency, formatDate } from './utils/formatter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'salary-manager';
  userList: any;
  currentEditingUser: any;
  minSalary: any;
  maxSalary: any;
  averageSalary: any;
  averageDiscount: any;
  isEditing = false;
  formatCurrency = formatCurrency;
  formatDate = formatDate;
  constructor(private serviceUser: UserService, private serviceSalary: SalaryService) {}

  ngOnInit() {
    this.serviceUser.getUserList().subscribe((userList) => {
      this.userList = userList;
    });

    this.serviceSalary.getSalaryMax().subscribe((maxSalary) => {
      this.maxSalary = maxSalary;
    });

    this.serviceSalary.getSalaryMin().subscribe((minSalary) => {
      this.minSalary = minSalary;
    });

    this.serviceSalary.getSalaryAverage().subscribe((averageSalary) => {
      this.averageSalary = averageSalary;
    });

    this.serviceSalary.getDiscountsAverage().subscribe((averageDiscount) => {
      this.averageDiscount = averageDiscount;
    });
  }

  toggleUserEditing() {
    this.isEditing = !this.isEditing;
    if ( this.isEditing == false ) {
      this.currentEditingUser = null;
    }
  }

  setEditUser(user: any) {
    this.currentEditingUser = user;
  }
}
