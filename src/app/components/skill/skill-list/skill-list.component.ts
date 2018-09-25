import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { SkillService } from '../../../services/skill/skill.service';
import { Skill } from '../../../Models/Skill';
import { SkillFormComponent } from '../skill-form/skill-form.component';
import { SkillDeleteConfirmationComponent } from '../skill-delete-confirmation/skill-delete-confirmation.component';

@Component({
  selector: 'app-components/skill/skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Name', 'SkillParentCategory_Id', 'Actions'];

  dataSource: MatTableDataSource<Skill>;
  skills: Skill[];
  dataSourceLength: number;
  skill = {};
  skillParentCategories: Skill[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private skillService: SkillService,
     public dialog: MatDialog) { 
      skillService.getSkillParentCategories().subscribe(s => {
        this.skillParentCategories = s;
      });
    }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.skillService.getSkills().subscribe(result => {
      this.skills = result;
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSourceLength = this.dataSource.data.length;
    });

  }

  getParentNameById(id){
    let item = this.skillParentCategories.filter(s => s.Id === id);
    return item[0].Name;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openSkillFormDialog(skill: Skill): void {
    const dialogRef = this.dialog.open(SkillFormComponent, {
      width: '40%',
      data: skill
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });
  }

  openSkillDeleteConfirmationDialog(skill: Skill): void {
    const dialogRef = this.dialog.open(SkillDeleteConfirmationComponent, {
      width: '40%',
      data: skill
    });
  }
}
