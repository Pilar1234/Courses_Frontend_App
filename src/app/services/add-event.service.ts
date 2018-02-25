import { Injectable } from '@angular/core';
import { Event } from '../models/event';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOption = {
  headers: new HttpHeaders({
    'Content Type': 'application/json'
  })
};

@Injectable()
export class AddEventService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080/api/add';

  sendEvent(event) {
    return this.http.post(this.url, event);
  }

  getEvent() {
    return this.http.get(this.url);
  }
}
