import { Score } from './../../Interfaces/Score';
import { ScoreService } from './../../services/score.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'Scores-data-table',
  templateUrl: './Scores-data-table.component.html',
  styleUrls: ['./Scores-data-table.component.css']
})
export class ScoresDataTableComponent implements OnInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Name', 'Score', 'Actions'];

  dataSource: MatTableDataSource<Score>;
  Scores: Score[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(Scoreservice: ScoreService) {
    Scoreservice.getScores().subscribe((result) => {
      this.Scores = result;
      this.dataSource = new MatTableDataSource(result);
      console.log(this.Scores);
    });
  }  

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}