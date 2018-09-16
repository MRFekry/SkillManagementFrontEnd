import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employee = {};
  id;

  constructor(private employeeService: EmployeeService,
     private route: ActivatedRoute,
     private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.employeeService.getEmployeeById(this.id).pipe(take(1)).subscribe(emp => this.employee = emp);
   }

  ngOnInit() {
  }

  save(employee)
  {
    console.log(employee);
    if (this.id) this.employeeService.UpdateEmployee(this.id, employee).subscribe();
    else this.employeeService.AddNewEmployee(employee).subscribe();

    this.router.navigate(['/']);
  }

}
