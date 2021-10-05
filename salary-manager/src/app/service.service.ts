import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any> {
    return this.http.get('api/v1/user/');
  }

  saveUser(userValue: any): Subscription {
    return this.http.post<any>('api/v1/user/create/', userValue).subscribe();
  }
}
