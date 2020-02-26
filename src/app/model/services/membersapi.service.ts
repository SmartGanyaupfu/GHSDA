import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChurchMember } from '../interfaces/church-members';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembersapiService {
  membersBaseUrl = environment.churchMembersApiUrl;

  constructor(private httpClient: HttpClient) { }


  public getChurchMember(): Observable<ChurchMember[]> {
    return this.httpClient.get<ChurchMember[]>(`${this.membersBaseUrl}users`)
  }
}
