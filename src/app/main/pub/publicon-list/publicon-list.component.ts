import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ConfirmDialogComponent } from 'src/@root/components/confirm-dialog/confirm-dialog.component';
import { Publication } from 'src/models/publication.model';
import { PublicationService } from 'src/services/publication.service';

@Component({
  selector: 'app-publicon-list',
  templateUrl: './publicon-list.component.html',
  styleUrls: ['./publicon-list.component.scss']
})
export class PubliconListComponent implements OnInit {

  protected _onDestroy = new Subject<void>();
//   acttions bsh nhot fha l buttons
  displayedColumns: string[] = ['id', 'type', 'titre', 'lien', 'date', 'sourcePDF', 'actions'];
  dataSource: Publication[] = [];
//dialog tebe3 ang material haja hakka , ki tji tfasakh yjiblk ak l alert

  constructor(
    private publicationService :PublicationService,
    private dialog: MatDialog,
  ) { }

// bsh tfasakh bihom element m tab
  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  ngOnInit(): void {
    this.fetchDataSource();
  }
  //get all publications fonction bsh naamlha ne
//  tejbed les elements mservice (hya tahkimaa service , w service ycommuniqui maa l backend)
  private fetchDataSource(): void {
    //this.publicationService.getAllPublications().then(data => this.dataSource = data);
  }
  //les publications tsobhomf variable , w baad taaml affectation b .then
// on remove account kolha teb3a mta3 suite alerte , bsh matnjmsh tfaskh
// removePublicationById lezzm nzidha fl publication
  onRemoveAccount(id: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      hasBackdrop: true,
      disableClose: false,
    });

    dialogRef.componentInstance.confirmButtonColor = 'warn';

    dialogRef.afterClosed().pipe(takeUntil(this._onDestroy)).subscribe(isDeleteConfirmed => {
      console.log('removing: ', isDeleteConfirmed);
      if (isDeleteConfirmed) {
       // this.publicationService.removePublicationById(id).then(() => this.fetchDataSource());
      }
    });
  }

}
