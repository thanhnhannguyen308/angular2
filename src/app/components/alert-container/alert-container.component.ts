import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-alert-container',
  templateUrl: './alert-container.component.html',
  styleUrls: ['./alert-container.component.css']
})
export class AlertContainerComponent implements OnInit {

  resultViewChild: string;
  nhan: string;

  @Input()
  nameParent: string;
  
  @Output()
  ChildOfName = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  SetName(name: string){
    this.resultViewChild = name;
  }

  onSubmit(name: string){
    this.nhan = stringify(name);
    this.ChildOfName.emit(this.nhan);
    console.log(name);
  }
}
