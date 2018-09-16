import { Employee } from './../Interfaces/Employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly _baseUrl: string = 'http://localhost:52408/';

  constructor(private httPservice: HttpClient) { }

  getEmployees() : Observable<Employee[]> {
    return this.httPservice.get<Employee[]>(this._baseUrl + "employees");
  }

  getEmployeeById(id){
    return this.httPservice.get<Employee>(this._baseUrl + "employee/{Id}");
  }

  AddNewEmployee(employee: Employee){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.httPservice.post<Employee>(this._baseUrl + "employees", employee, {headers});
  }
}
