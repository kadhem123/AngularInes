import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  getPublicationById(currentItemId: string) {
    throw new Error('Method not implemented.');
  }
  removePublicationById(id: any) {
    throw new Error('Method not implemented.');
  }
  getAllPublications() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
