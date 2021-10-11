import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { formatDateAPI } from './utils/formatter';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private http: HttpClient) { }

  getSalaryList(): Observable<any> {
    return this.http.get('api/v1/salary');
  }

  getSalaryAverage(): Observable<any> {
    return this.http.get('api/v1/salary/average_salary');
  }

  getDiscountsAverage(): Observable<any> {
    return this.http.get('api/v1/salary/average_discounts');
  }

  getSalaryMin(): Observable<any> {
    return this.http.get('api/v1/salary/min');
  }

  getSalaryMax(): Observable<any> {
    return this.http.get('api/v1/salary/max');
  }

  createSalary(salaryValue: any): Subscription {
    salaryValue.date = formatDateAPI(salaryValue.date);
    return this.http.post('api/v1/salary/create', salaryValue).subscribe();
  }

  patchSalary(salaryValue: any, id: number): Subscription {
    return this.http.patch(`api/v1/salary/update/${id}`, salaryValue).subscribe();
  }

  editSalary(salaryValue: any, id: number): Subscription {
    return this.http.put(`api/v1/salary/update/${id}`, salaryValue).subscribe();
  }

  deleteSalary(id: number): Subscription {
    return this.http.delete(`api/v1/salary/delete/${id}`).subscribe();
  }
}
