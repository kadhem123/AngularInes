import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Outil } from 'src/models/outil.model';
import { OutilService } from 'src/services/outil.service';

@Component({
  selector: 'app-outil-detail',
  templateUrl: './outil-detail.component.html',
  styleUrls: ['./outil-detail.component.scss']
})
export class OutilDetailComponent implements OnInit {

  idOutil: any;
  outil: Outil= new Outil();
  constructor(private activatedRoute: ActivatedRoute, private outilService :OutilService) {

  }
  ngOnInit(): void {
    this.idOutil=this.activatedRoute.snapshot.params.id;
   // this.outilService.getOutilById(this.idOutil).then(data=>this.outil=data);
  }
}
