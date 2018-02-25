import { Component, OnInit } from '@angular/core';
import { AddEventService } from '../../services/add-event.service';
import { Person } from '../../models/person';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  event: any;
 private person: Person = new Person();

  constructor(private addEventService: AddEventService) { }

  ngOnInit() {
    this.addEventService.getEvent().subscribe(
      data => {
        this.event = data;
      });
  }

}
