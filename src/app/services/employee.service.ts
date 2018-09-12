import { Employee } from './../Interfaces/Employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httPservice: HttpClient) { }

  getEmployees() : Employee[] {
    // let result = this.httPservice.get('http://localhost:52408/employees');
    // return result.subscribe((response) => response.);

    let result;

    this.httPservice.get<Employee[]>('http://localhost:52408/employees')
    .subscribe((employees) => result = employees);

    return result;
  }
}
