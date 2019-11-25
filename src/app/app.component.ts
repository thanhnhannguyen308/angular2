import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employees.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bai1';
  result: boolean = true;
  testswitch = 'red';
  list: string[] = ['bang','phong','phu','trang','nhan'];
  today = new Date();
  onSubmit(user){
    console.log(user);
  }

  constructor(private testService: TestService){}

  lstEmloyee: Array<any>;
  ngOnInit(){
    this.testService.get().pipe(map(data => data))
    .subscribe((data: Array<any>) => this.lstEmloyee = data );
  }
}
