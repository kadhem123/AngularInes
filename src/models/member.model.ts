import { Evenement } from "./evenement.model";
import { Outil } from "./outil.model";
import { Publication } from "./publication.model";
import { Teacher } from "./teacher.model";

export interface Member {
  id: string,
  cin: string,
  nom: string,
  prenom: string,
  photo: string,
  datenaissance: string,
  cv: string,
  email: string,
  password: string,
  pubs: Publication[],
  evens: Evenement[],
  outils: Outil[],
  dateInscription: string,
  diplome: string,
  encadrant: Teacher,
  etablissement: string,
  grade: string,
  type: string,

}