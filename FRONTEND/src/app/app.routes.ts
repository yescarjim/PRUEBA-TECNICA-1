import { Routes } from '@angular/router';
import { Employees } from './components/employees/employees';
import { Departments } from './components/departments/departments';
import { DepartmentsList } from './components/departments-list/departments-list';

export const routes: Routes = [
   { path: 'employees', component: Employees, title: `Empleados` },
   { path: 'departments', component: Departments, title: `Departamentos` },
   { path: 'departments/:code', component: Departments, title: `Departamentos codigo`},
   { path: 'departments-list', component: DepartmentsList,title: `Lista Departamentos`},
];
