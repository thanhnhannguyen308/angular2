import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employee-container',
  templateUrl: './employee-container.component.html',
  styleUrls: ['./employee-container.component.css']
})
export class EmployeeContainerComponent implements OnInit {
  lstEmloyee: Array<any>;

  constructor(private testService: TestService){}

  ngOnInit() {
   this.testService.get().pipe(map(data => data))
    .subscribe((data: Array<any>) => this.lstEmloyee = data );
  }

}
