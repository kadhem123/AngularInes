import { Injectable } from '@angular/core';
import { Evenement } from 'src/models/evenement.model';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  removeEvenementById(id: any) {
    throw new Error('Method not implemented.');
  }
  getAllEvenements() {
    throw new Error('Method not implemented.');
  }
  saveEvenement(objectToSubmit: Evenement) {
    throw new Error('Method not implemented.');
  }
  getEvenementById(currentItemId: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
