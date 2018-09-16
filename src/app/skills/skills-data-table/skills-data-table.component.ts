import { Skill } from './../../Interfaces/Skill';
import { SkillService } from './../../services/skill.service';
import {Component, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'Skills-data-table',
  templateUrl: './Skills-data-table.component.html',
  styleUrls: ['./Skills-data-table.component.css']
})
export class SkillsDataTableComponent implements OnInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Name', 'SkillParentCategory_Id', 'Actions'];

  dataSource: MatTableDataSource<Skill>;
  skills: Skill[];
  dataSourceLength: number;
  skill = {};

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private skillService: SkillService,
     private changeDetectorRefs: ChangeDetectorRef,
     private modalService: ModalService) {  }

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
      this.changeDetectorRefs.detectChanges();
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openModal(id: string, row: Skill) {
    let s: Skill = {
      Id : row.Id,
      Name : row.Name,
      SkillParentCategory_Id : row.SkillParentCategory_Id
    }
    this.skill = s;

    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  DeleteSkill(skill, id: string){
    this.skillService.DeleteSkill(this.skill);

    this.closeModal(id);
  }
}