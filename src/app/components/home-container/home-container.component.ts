import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertContainerComponent } from '../alert-container/alert-container.component';

@Component({
  selector: 'home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  nameParent: string = 'I am Nguyen Thanh Nhan';
  list: string[] = ['bang', 'phong', 'phu', 'trang', 'nhan'];
  today = new Date();
  nameChild: string = '123';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(user) {
    console.log(user);
  }

  CheckChildOfName(value) {
    this.nameChild = value;
  }

  @ViewChild(AlertContainerComponent, { static: false })
  private alertContainerComponent: AlertContainerComponent;

  changeName() {
    this.alertContainerComponent.SetName('Nhan');
  }
}
