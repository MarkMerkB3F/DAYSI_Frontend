import { Routes } from '@angular/router';
import {NotesSiteComponent} from "./components/sites/notes-site/notes-site.component";
import {HomeSiteComponent} from "./components/sites/home-site/home-site.component";
import {ReportsSiteComponent} from "./components/sites/reports-site/reports-site.component";
import {CalendarSiteComponent} from "./components/sites/calendar-site/calendar-site.component";
import {TasksSiteComponent} from "./components/sites/tasks-site/tasks-site.component";

export const routes: Routes = [
    { path: 'notes-site', component: NotesSiteComponent},
    { path: 'reports-site', component: ReportsSiteComponent },
    { path: 'calendar-site', component: CalendarSiteComponent },
    { path: 'tasks-site', component: TasksSiteComponent },
    { path: '**', component: HomeSiteComponent}
];
