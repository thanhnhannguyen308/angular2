import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TestService } from './services/test.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertContainerComponent } from './components/alert-container/alert-container.component';
import { ClarityModule } from '@clr/angular'
import {
  ClrIconModule,
  ClrMainContainerModule,
  ClrInputModule,
  ClrSelectModule,
  ClrButtonModule,
  ClrTabsModule,
  ClrDatagridModule,
  ClrCheckboxModule,
  ClrDropdownModule,
  ClrStackViewModule,
  ClrDatepickerModule
} from '@clr/angular';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { AppRouter } from './app.routers';
import { EmployeeContainerComponent } from './components/employee-container/employee-container.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertContainerComponent,
    HomeContainerComponent,
    EmployeeContainerComponent,
    NotFoundComponent,
    EmployeeDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ClarityModule,
    ClrIconModule,
  ClrMainContainerModule,
  ClrInputModule,
  ClrSelectModule,
  ClrButtonModule,
  ClrTabsModule,
  ClrDatagridModule,
  ClrCheckboxModule,
  ClrDropdownModule,
  ClrStackViewModule,
  ClrDatepickerModule,
  AppRouter
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
