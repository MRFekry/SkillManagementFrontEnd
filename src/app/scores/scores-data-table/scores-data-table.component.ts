import { Score } from './../../Interfaces/Score';
import { ScoreService } from './../../services/score.service';
import {Component, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'Scores-data-table',
  templateUrl: './Scores-data-table.component.html',
  styleUrls: ['./Scores-data-table.component.css']
})
export class ScoresDataTableComponent implements OnInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Name', 'Score', 'Actions'];

  dataSource: MatTableDataSource<Score>;
  scores: Score[];
  dataSourceLength: number;
  score = {};

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private scoreService: ScoreService,
     private changeDetectorRefs: ChangeDetectorRef,
     private modalService: ModalService) {  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.scoreService.getScores().subscribe(result => {
      this.scores = result;
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

  openModal(id: string, row: Score) {
    let s: Score = {
      Id : row.Id,
      Name : row.Name,
      score : row.score
    }
    this.score = s;

    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  DeleteScore(score, id: string){
    this.scoreService.DeleteScore(this.score);

    this.closeModal(id);
  }
}