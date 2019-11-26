import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { EmployeeContainerComponent } from './components/employee-container/employee-container.component';
 
const routing : Routes = [
    {
        path: '',
        component: HomeContainerComponent
    },

    {
        path: 'employees',
        component: EmployeeContainerComponent
    }
]

export const AppRouter = RouterModule.forRoot(routing);