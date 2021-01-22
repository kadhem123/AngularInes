import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ConfirmDialogComponent } from 'src/@root/components/confirm-dialog/confirm-dialog.component';
import { Evenement } from 'src/models/evenement.model';
import { EvenementService } from 'src/services/evenement.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  protected _onDestroy = new Subject<void>();

  displayedColumns: string[] = ['id', 'titre', 'date', 'lieu'];
  dataSource: Evenement[] = [];
  constructor( private evenementService :EvenementService,
    private dialog: MatDialog,

  ) { }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

   ngOnInit(): void {
    this.fetchDataSource();
  }
  private fetchDataSource(): void {
    this.evenementService.getAllEvenements().then(data => this.dataSource = data);
  }


  onRemoveAccount(id: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      hasBackdrop: true,
      disableClose: false,
    });

    dialogRef.componentInstance.confirmButtonColor = 'warn';

    dialogRef.afterClosed().pipe(takeUntil(this._onDestroy)).subscribe(isDeleteConfirmed => {
      console.log('removing: ', isDeleteConfirmed);
      if (isDeleteConfirmed) {
        this.evenementService.removeEvenementById(id).then(() => this.fetchDataSource());
      }
    });
  }

}
