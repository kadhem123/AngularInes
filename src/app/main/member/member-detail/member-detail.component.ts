import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/models/member.model';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {
  idMember: any;
  member: Member={
    id: null,
    cin: null,
    nom: null,
    prenom: null,
    photo: null,
    datenaissance: null,
    cv: null,
    email: null,
    password: null,
    pubs:[],
    evens: [],
    outils: [],
    dateInscription:null,
    diplome:null,
    encadrant:null,
    etablissement:null,
    grade:null,
    type:null,
};

  
  constructor(  private activatedRoute: ActivatedRoute, private memberService :MemberService) { 

  }

  ngOnInit(): void {
    this.idMember=this.activatedRoute.snapshot.params.id;
    this.memberService.getMemberById(this.idMember).then(data=>this.member=data);
  }


}
