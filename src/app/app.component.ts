import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from './services/employees.service';
import { TestService } from './services/test.service';
import { AlertContainerComponent } from './components/alert-container/alert-container.component';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bai1';
  result: boolean = true;
  testswitch = 'red';

  constructor(
    private loginService: LoginService,
    private route: Router
  ){}

  ngOnInit(){
    
  }

  Logout(){
    this.loginService.setLogin(false);
    alert('Logout success !');
    this.route.navigate(['home']);
  }

}
