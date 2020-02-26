import { Component, OnInit } from '@angular/core';
import { MembersapiService } from '../model/services/membersapi.service';
import { ChurchMember } from '../model/interfaces/church-members';
import { toArray, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-church-member',
  templateUrl: './church-member.component.html',
  styleUrls: ['./church-member.component.css']
})
export class ChurchMemberComponent implements OnInit {
  members: ChurchMember[];

  constructor(private membersApi: MembersapiService) { }

  ngOnInit() {
    this.loadMembers();
  }

  public loadMembers() {
    //x is waht we are getin back from the server
    this.membersApi.getChurchMember().subscribe((members: ChurchMember[]) => {
      console.log(members);
      this.members = members;
      
    }, error => {
      console.log(error);
    });
  }

}
