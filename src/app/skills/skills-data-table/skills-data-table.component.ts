import { Skill } from './../../Interfaces/Skill';
import { SkillService } from './../../services/skill.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'Skills-data-table',
  templateUrl: './Skills-data-table.component.html',
  styleUrls: ['./Skills-data-table.component.css']
})
export class SkillsDataTableComponent implements OnInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Name', 'SkillParentCategory_Id', 'Actions'];

  dataSource: MatTableDataSource<Skill>;
  Skills: Skill[];
  dataSourceLength: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private Skillservice: SkillService) {  }  

  ngOnInit() {

    this.Skillservice.getSkills().subscribe((result) => {
      this.Skills = result;
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSourceLength = this.dataSource.data.length;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}