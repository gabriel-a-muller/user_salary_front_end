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
  }
}
