import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departments } from '../interfaces/departments';
import { environment } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {

  private _httpClient = inject(HttpClient);

  // Ruta base del backend
  private apiUrl = environment.appUrl + "/department";

  // Crear departamento (POST)
  create(departmentToCreate: Departments){
    return this._httpClient.post(this.apiUrl, departmentToCreate);
  }

  // Obtener todos los departamentos (GET)
  getDepartments(){
    return this._httpClient.get(this.apiUrl);
  }

  // Actualizar departamento (PUT)
  updateDepartment(code: number, departmentToUpdate: Departments){
    return this._httpClient.put(`${this.apiUrl}/${code}`, departmentToUpdate);
  }

  // Eliminar departamento (DELETE)
  deleteDepartment(code: number){
    return this._httpClient.delete(`${this.apiUrl}/${code}`);
  }

}