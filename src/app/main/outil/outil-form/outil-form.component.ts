import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Outil } from 'src/models/outil.model';
import { MemberService } from 'src/services/member.service';
import { OutilService } from 'src/services/outil.service';

@Component({
  selector: 'app-outil-form',
  templateUrl: './outil-form.component.html',
  styleUrls: ['./outil-form.component.scss']
})
export class OutilFormComponent implements OnInit {
  currentItemId: string;
  item: Outil;
  form: FormGroup;

  constructor
    (private router: Router,
    private activatedRoute: ActivatedRoute,
    private outilService: OutilService,
    )
   {}

  ngOnInit(): void {
    this.currentItemId = this.activatedRoute.snapshot.params.id;
    if (!!this.currentItemId) {
     /* this.outilService.getOutilById(this.currentItemId).then(item => {
        this.item = item;
        this.initForm(item)
      });*/
    } else {
      this.initForm(null);
    }
  }

  initForm(item: Outil) {
    this.form = new FormGroup({

      cin: new FormControl(item?.date, [Validators.required]),
      name: new FormControl(item?.source, [Validators.required]),
    });
  }


  isFormInEditMode(): boolean {
    return !!this.currentItemId;
  }

  onSubmit(): void {
    const objectToSubmit: Outil = {...this.item, ...this.form.value};
    console.log(objectToSubmit);
    //this.outilService.saveOutil(objectToSubmit).then(() => this.router.navigate(['./members']));

  }
  }
