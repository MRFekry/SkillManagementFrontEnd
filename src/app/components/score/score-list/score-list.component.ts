import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { Score } from '../../../Models/Score';
import { ScoreService } from '../../../services/score/score.service';
import { ScoreFormComponent } from '../score-form/score-form.component';
import { ScoreDeleteConfirmationComponent } from '../score-delete-confirmation/score-delete-confirmation.component';

@Component({
  selector: 'app-components/score/score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.css']
})
export class ScoreListComponent implements OnInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Name', 'Score', 'Actions'];

  dataSource: MatTableDataSource<Score>;
  scores: Score[];
  dataSourceLength: number;
  score = {};

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private scoreService: ScoreService,
    public dialog: MatDialog) {  }

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
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openScoreFormDialog(score: Score): void {
    const dialogRef = this.dialog.open(ScoreFormComponent, {
      width: '40%',
      data: score
    });

    this.refreshAfterClosingDialog(dialogRef);
  }

  openScoreDeleteConfirmationDialog(score: Score): void {
    const dialogRef = this.dialog.open(ScoreDeleteConfirmationComponent, {
      width: '40%',
      data: score
    });

    this.refreshAfterClosingDialog(dialogRef);
  }

  refreshAfterClosingDialog(dialogRef: MatDialogRef<any, any>){
    dialogRef.afterClosed().subscribe(result => {
      this.refresh();
    });
  }
}
