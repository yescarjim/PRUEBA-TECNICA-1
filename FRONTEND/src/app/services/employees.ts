import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from '../interfaces/employees';
import { environment } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {

  private _httpClient = inject(HttpClient);

  // Ruta base del backend
  private apiUrl = environment.appUrl + "/department";

  // Crear departamento (POST)
  create(employeesToCreate: Employees){
    return this._httpClient.post(this.apiUrl, employeesToCreate);
  }

  // Obtener todos los departamentos (GET)
  getEmployees(){
    return this._httpClient.get(this.apiUrl);
  }

  // Actualizar departamento (PUT)
  updateEmployee(code: number, employeesToUpdate: Employees){
    return this._httpClient.put(`${this.apiUrl}/${code}`, employeesToUpdate);
  }

  // Eliminar departamento (DELETE)
  deleteEmployee(code: number){
    return this._httpClient.delete(`${this.apiUrl}/${code}`);
  }

}