import { Evenement } from "./evenement.model";
import { Outil } from "./outil.model";
import { Publication } from "./publication.model";

export class Teacher {
    id: string;
    cin: string;
    nom: string;
    prenom: string;
    photo: string;
    datenaissance: string;
    cv: string;
    email: string;
    password: string;
    etablissement: string;
    grade: string;
    pubs: Publication[];
    evens: Evenement[];
    outils: Outil[];
  
  
  }