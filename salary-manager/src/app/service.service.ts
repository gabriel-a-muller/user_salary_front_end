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

  createUser(userValue: any): Subscription {
    return this.http.post('api/v1/user/create/', userValue).subscribe();
  }

  patchUser(userValue: any): Subscription {
    return this.http.patch('api/v1/user/update/ID!', userValue).subscribe();
  }

  editUser(userValue: any): Subscription {
    return this.http.put('api/v1/user/update/ID!', userValue).subscribe();
  }

  deleteUser(id: number): Subscription {
    return this.http.delete('api/v1/user/delete/ID!').subscribe();
  }
}
