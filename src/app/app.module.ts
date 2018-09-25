import { ScoreService } from './services/score/score.service';
import { SkillService } from './services/skill/skill.service';
import { EmployeeService } from './services/employee/employee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
  MatDialogModule,
  MatProgressSpinnerModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScoreFormComponent } from './components/score/score-form/score-form.component';
import { SkillFormComponent } from './components/skill/skill-form/skill-form.component';
import { EmployeeFormComponent } from './components/employee/employee-form/employee-form.component';
import { EmployeeSkillService } from './services/employeeSkill/employee-skill.service';
import { EmployeeSkillFormComponent } from './components/employeeSkill/employee-skill-form/employee-skill-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { SkillListComponent } from './components/skill/skill-list/skill-list.component';
import { ScoreListComponent } from './components/score/score-list/score-list.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
import { EmployeeDeleteConfirmationComponent } from './components/employee/employee-delete-confirmation/employee-delete-confirmation.component';
import { SkillDeleteConfirmationComponent } from './components/skill/skill-delete-confirmation/skill-delete-confirmation.component';
import { ScoreDeleteConfirmationComponent } from './components/score/score-delete-confirmation/score-delete-confirmation.component';
import { EmployeeSkillListComponent } from './components/employeeSkill/employee-skill-list/employee-skill-list.component';
import { EmployeeSkillDeleteConfirmationComponent } from './components/employeeSkill/employee-skill-delete-confirmation/employee-skill-delete-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreFormComponent,
    SkillFormComponent,
    EmployeeFormComponent,
    EmployeeSkillFormComponent,
    MainNavComponent,
    EmployeeListComponent,
    SkillListComponent,
    ScoreListComponent,
    AccordionComponent,
    AccordionGroupComponent,
    EmployeeDeleteConfirmationComponent,
    SkillDeleteConfirmationComponent,
    ScoreDeleteConfirmationComponent,
    EmployeeSkillListComponent,
    EmployeeSkillDeleteConfirmationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: EmployeeListComponent },
      { path: 'skills', component: SkillListComponent },
      { path: 'scores', component: ScoreListComponent },
      { path: 'employeeSkills', component: EmployeeSkillFormComponent },
      { path: 'employee/new', component: EmployeeFormComponent },
      { path: 'employee/:id', component: EmployeeFormComponent },
      { path: 'skill/new', component: SkillFormComponent },
      { path: 'skill/:id', component: SkillFormComponent },
      { path: 'score/new', component: ScoreFormComponent },
      { path: 'score/:id', component: ScoreFormComponent },
      { path: 'employeeSkill/new/:employeeId/:employeeFirstName/:employeeLastName/:employeeEmail', component: EmployeeSkillFormComponent },
      { path: 'employeeSkill/:Id/:employeeId/:employeeFirstName/:employeeLastName/:employeeEmail', component: EmployeeSkillFormComponent },
    ]),
    BrowserAnimationsModule,
    FormsModule
  ],

  entryComponents: [
    EmployeeFormComponent,
    EmployeeDeleteConfirmationComponent,
    EmployeeSkillListComponent,
    EmployeeSkillFormComponent,
    EmployeeSkillDeleteConfirmationComponent,
    SkillFormComponent,
    SkillDeleteConfirmationComponent,
    ScoreFormComponent,
    ScoreDeleteConfirmationComponent,
  ],

  providers: [
    EmployeeService,
    EmployeeSkillService,
    SkillService,
    ScoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
