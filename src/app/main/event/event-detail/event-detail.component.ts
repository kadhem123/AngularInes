import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evenement } from 'src/models/evenement.model';
import { EvenementService } from 'src/services/evenement.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  idEvent: any;
  evenement: Evenement= new Evenement();
  constructor(private activatedRoute: ActivatedRoute, private evenementService :EvenementService) { 

  }

  ngOnInit(): void {
    this.idEvent=this.activatedRoute.snapshot.params.id;
    this.evenementService.getEvenementById(this.idEvent).then(data=>this.evenement=data);
  }


}
