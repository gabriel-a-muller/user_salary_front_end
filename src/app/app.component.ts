import { Component, OnInit } from '@angular/core';
import { UserService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'salary-manager';
  userList: any;
  currentEditingUser: any;
  isEditing = false;
  constructor(private service: UserService) {}

  ngOnInit() {
    this.service.getUserList().subscribe((userList) => {
      this.userList = userList;
      console.log(this.userList);
    });
  }

  toggleEditing() {
    this.isEditing = !this.isEditing;
    if ( this.isEditing == false ) {
      this.currentEditingUser = null;
    }
  }

  setEditUser(user: any) {
    this.currentEditingUser = user;
    console.log(this.currentEditingUser);
  }
}
