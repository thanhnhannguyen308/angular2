import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from './services/employees.service';
import { TestService } from './services/test.service';
import { AlertContainerComponent } from './components/alert-container/alert-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bai1';
  result: boolean = true;
  testswitch = 'red';

  constructor(){}

  ngOnInit(){
    
  }

}
