import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../../Models/Employee';

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
    return this.httPservice.get<Employee>(this._baseUrl + "employee/" + id);
  }

  AddNewEmployee(employee: Employee){
    return this.httPservice.post<Employee>(this._baseUrl + "employees", employee, { headers: this.AddHeader() });
  }

  UpdateEmployee(id: number, employee: any){
    employee.id = id;
    return this.httPservice.put<Employee>(this._baseUrl + "employee/" + employee, employee, { headers: this.AddHeader() });
  }

  DeleteEmployee(employee: any){
    this.httPservice.post<Employee>(this._baseUrl + "employee/" + employee, employee, { headers: this.AddHeader() }).subscribe();
  }

  AddHeader(){
    return new HttpHeaders().set('content-type', 'application/json');
  }
}
