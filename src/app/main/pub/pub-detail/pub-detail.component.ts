import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Publication } from 'src/models/publication.model';
import { PublicationService } from 'src/services/publication.service';

@Component({
  selector: 'app-pub-detail',
  templateUrl: './pub-detail.component.html',
  styleUrls: ['./pub-detail.component.scss']
})
export class PubDetailComponent implements OnInit {
  idPub: any;
  publication: Publication = new Publication();
  constructor( private activatedRoute: ActivatedRoute, private publicationService :PublicationService) {

  }

  ngOnInit(): void {
    this.idPub=this.activatedRoute.snapshot.params.id;
   // this.publicationService.getPublicationById(this.idPub).then(data=>this.publication=data);
  }


}
