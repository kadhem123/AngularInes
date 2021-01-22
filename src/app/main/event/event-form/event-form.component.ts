import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evenement } from 'src/models/evenement.model';
import { Publication } from 'src/models/publication.model';
import { EvenementService } from 'src/services/evenement.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  currentItemId: string;
  item: Evenement;
  form: FormGroup;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private evenementService: EvenementService,) { }

    ngOnInit(): void {
      this.currentItemId = this.activatedRoute.snapshot.params.id;
      if (!!this.currentItemId) {
        /*this.evenementService .getEvenementById(this.currentItemId).then(item => {
          this.item = item;
          this.initForm(item)
        });*/
      } else {
        this.initForm(null);
      }
    }
    initForm(item: Evenement) {
      this.form = new FormGroup({

        titre: new FormControl(item?.titre, [Validators.required]),
        date: new FormControl(item?.date, [Validators.required]),
        lieu: new FormControl(item?.lieu, [Validators.required]),

      });
    }
    isFormInEditMode(): boolean {
      return !!this.currentItemId;
    }

    onSubmit(): void {
      const objectToSubmit: Evenement= {...this.item, ...this.form.value};
      console.log(objectToSubmit);
      this.evenementService.saveEvenement(objectToSubmit).then(() => this.router.navigate(['./evenements']));

    }

}
