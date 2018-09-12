import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule, 
    MatListModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule, 
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule } from '@angular/material';
import { EmployeesComponent } from './employees/employees.component';
import { SkillsComponent } from './skills/skills.component';
import { ScoresComponent } from './scores/scores.component';
import { EmployeeSkillsComponent } from './employee-skills/employee-skills.component';
import { AdminEmployeesComponent } from './admin/admin-employees/admin-employees.component';
import { AdminSkillsComponent } from './admin/admin-skills/admin-skills.component';
import { AdminScoresComponent } from './admin/admin-scores/admin-scores.component';
import { AdminEmployeeSkillsComponent } from './admin/admin-employee-skills/admin-employee-skills.component';
import { EmployeesDataTableComponent } from './employees/employees-data-table/employees-data-table.component';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    EmployeesComponent,
    SkillsComponent,
    ScoresComponent,
    EmployeeSkillsComponent,
    AdminEmployeesComponent,
    AdminSkillsComponent,
    AdminScoresComponent,
    AdminEmployeeSkillsComponent,
    EmployeesDataTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot([
      { path: '', component: EmployeesComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'scores', component: ScoresComponent },
      { path: 'employeeSkills', component: EmployeeSkillsComponent },
      { path: 'admin/employee', component: AdminEmployeesComponent },
      { path: 'admin/skill', component: AdminSkillsComponent },
      { path: 'admin/score', component: AdminScoresComponent },
      { path: 'admin/employeeSkill', component: AdminEmployeeSkillsComponent }
    ]),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
