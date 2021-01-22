import { Injectable } from '@angular/core';
import { Outil } from 'src/models/outil.model';

@Injectable({
  providedIn: 'root'
})
export class OutilService {
  getOutilById(currentItemId: string) {
    throw new Error('Method not implemented.');
  }
  saveOutil(objectToSubmit: Outil) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
