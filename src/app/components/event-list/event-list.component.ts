import { Component, OnInit } from '@angular/core';
import { AddEventService } from '../../services/add-event.service';
import { Person } from '../../models/person';
import { FormControl } from '@angular/forms';
import { AddMemberService } from '../../services/add-member.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  event: any;
  private newPerson: Person = new Person();
  person: any;

  constructor(private addEventService: AddEventService, private addMemberService: AddMemberService) { }

  ngOnInit() {
    this.addEventService.getEvent().subscribe(
      data => {
        this.event = data;
      });

    this.addMemberService.getMember().subscribe(
      data => {
        this.person = data;
      });
  }

  addMember(): void {
    this.addMemberService.sendMember(this.newPerson).subscribe(
      data => {
        alert('Member added successfully');
      });
  }
}
