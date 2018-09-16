import { ModalService } from './services/modal.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { EmployeesDataTableComponent } from './employees/employees-data-table/employees-data-table.component';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { ScoresDataTableComponent } from './scores/scores-data-table/scores-data-table.component';
import { ScoreService } from './services/score.service';
import { SkillsDataTableComponent } from './skills/skills-data-table/skills-data-table.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    EmployeesComponent,
    SkillsComponent,
    ScoresComponent,
    EmployeeSkillsComponent,
    EmployeesDataTableComponent,
    ScoresDataTableComponent,
    SkillsDataTableComponent,
    ModalComponent
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
      { path: '', component: EmployeesDataTableComponent },
      { path: 'skills', component: SkillsDataTableComponent },
      { path: 'scores', component: ScoresDataTableComponent },
      { path: 'employeeSkills', component: EmployeeSkillsComponent },
      { path: 'employee/new', component: EmployeesComponent },
      { path: 'employee/:id', component: EmployeesComponent },
    ]),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EmployeeService,
    ScoreService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
