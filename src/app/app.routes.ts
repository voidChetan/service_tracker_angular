import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DepartmentComponent } from './pages/department/department.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { NewTicketComponent } from './pages/new-ticket/new-ticket.component';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path:'dashboard',
                component:DashboardComponent,
                
            },
            {
                path:'employee',
                component:EmployeeComponent
            }, 
            {
                path:'department',
                component:DepartmentComponent
            },
            {
                path:'tickets',
                component:TicketsComponent
            },
            {
                path:'new-ticket',
                component:NewTicketComponent
            }  
        ]
    }

];
