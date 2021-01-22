import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GLOBAL} from "../app/app-config";
import {Utils} from "../utils/utils";
import {Member} from "../models/member.model";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public placeholderMembers: Member[];

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getAllMembers(): Promise<Member[]> {
    return this.httpClient.get<Member[]>('http://localhost:9999/membre-service/membres').toPromise();
  }

  getMemberById(id: string): Promise<Member> {
     return this.httpClient.get<Member>('http://localhost:9999/membre-service/membres/'+id).toPromise();


  }

  /**
   * create a new member or update an old member.
   * a new member doesn't have an id
   */
  saveMember(member: any): Promise<Member> {
    return this.httpClient.post<Member>('http://localhost:9999/membre-service/membres/etudiant', member).toPromise();

  }

  removeMemberById(id: string): Promise<void> {
     return this.httpClient.delete<void>('http://localhost:9999/membre-service/members/member/'+id).toPromise();

  }

}
