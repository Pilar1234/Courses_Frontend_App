import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './app.material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewEventComponent } from './components/new-event/new-event.component';

import { AddEventService } from './services/add-event.service';
import { HttpClientModule } from '@angular/common/http';
import { EventListComponent } from './components/event-list/event-list.component';
import { AddMemberService } from './services/add-member.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewEventComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    ToastModule.forRoot(),
    HttpClientModule,
    routing,
    MaterialModule
  ],
  providers: [
    AddEventService,
    AddMemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
