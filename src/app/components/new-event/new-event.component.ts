import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Event } from '../../models/event';
import { AddEventService } from '../../services/add-event.service';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css'],

})
export class NewEventComponent implements OnInit {
  form:FormGroup;
    minNumber = new FormControl('', [Validators.min(1), Validators.required]);
    touched = new FormControl('', Validators.required);


  private newEvent: Event = new Event();
  private eventAdded: boolean;

  constructor(private fb: FormBuilder, private toastr: ToastsManager, private addEventService: AddEventService) {

  }

  createEvent(): void {
    this.addEventService.sendEvent(this.newEvent).subscribe(
      data => {
        alert('Event created successfully');
      });
  }

  private newMethod() {
    this.toastr.success('Event created succesfully', 'Success!');
  }

  ngOnInit() {
  }

}
