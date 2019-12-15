import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { EmployeeContainerComponent } from './components/employee-container/employee-container.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { LoginComponent } from './components/login/login.component';
import { CheckLoginGuard } from './guard/check-login.guard';
 
const routing : Routes = [
    //Đường dẫn mặc định
    {
        path: '', 
        redirectTo:'home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        component: HomeContainerComponent
    },

    {
        path: 'employees',
        component: EmployeeContainerComponent,
        canActivate: [CheckLoginGuard]
    },
    {
        path: 'employee-detail/:id',
        component: EmployeeDetailComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: '**',
        component: NotFoundComponent
    }

]

export const AppRouter = RouterModule.forRoot(routing);