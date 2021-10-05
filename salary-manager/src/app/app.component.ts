import { Component, OnInit } from '@angular/core';
import { UserService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'salary-manager';
  userList: any;
  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUserList().subscribe((userList) => {
      this.userList = userList;
    })
    const userValue = {
      cpf: '088.332.240-40',
      name: 'TestingAngular',
      born_date: '1996-08-30'
    };
    const variable_test = this.service.saveUser(userValue);
    console.log(variable_test)
  }

}
