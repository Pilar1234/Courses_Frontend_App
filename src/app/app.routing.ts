import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEventComponent } from './components/new-event/new-event.component';
import { EventListComponent } from './components/event-list/event-list.component';

const appRoutes: Routes = [
    {
        path: 'NewEvent',
        component: NewEventComponent
    },
    {
        path: 'EventList',
        component: EventListComponent
    },
    {
        path: '',
        redirectTo: '/EventList',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
