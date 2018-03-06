import { Injectable } from '@angular/core';
import { Person } from '../models/person'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOption = {
  headers: new HttpHeaders({
    'Content Type': 'application/json'
  })
};

@Injectable()
export class AddMemberService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080/api/addMember';

  sendMember(member) {
    return this.http.post(this.url, member);
  }

  getMember() {
    return this.http.get(this.url);
  }
}
