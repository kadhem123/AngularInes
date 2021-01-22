import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Publication } from 'src/models/publication.model';
import { PublicationService } from 'src/services/publication.service';

@Component({
  selector: 'app-pub-form',
  templateUrl: './pub-form.component.html',
  styleUrls: ['./pub-form.component.scss']
})
export class PubFormComponent implements OnInit {
  currentItemId: string;
  item: Publication;
  form: FormGroup;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private publicationService: PublicationService,) { }

    ngOnInit(): void {
      this.currentItemId = this.activatedRoute.snapshot.params.id;
      if (!!this.currentItemId) {
        /*this.publicationService.getPublicationById(this.currentItemId).then(item => {
          this.item = item;
          this.initForm(item)
        });*/
      } else {
        this.initForm(null);
      }
    }
  initForm(item: any) {
    throw new Error('Method not implemented.');
  }


}
