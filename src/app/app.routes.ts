import { Routes } from '@angular/router';
import {NotesSiteComponent} from "./components/sites/notes-site/notes-site.component";
import {HomeSiteComponent} from "./components/sites/home-site/home-site.component";
import {ReportsSiteComponent} from "./components/sites/reports-site/reports-site.component";
import {CalendarSiteComponent} from "./components/sites/calendar-site/calendar-site.component";
import {TasksSiteComponent} from "./components/sites/tasks-site/tasks-site.component";
import {LoginSiteComponent} from "./components/sites/login-site/login-site.component";

export const routes: Routes = [
    { path: 'login', component: LoginSiteComponent },
    { path: 'notes', component: NotesSiteComponent },
    { path: 'reports', component: ReportsSiteComponent },
    { path: 'calendar', component: CalendarSiteComponent },
    { path: 'tasks', component: TasksSiteComponent },
    { path: '**', component: HomeSiteComponent}
];
