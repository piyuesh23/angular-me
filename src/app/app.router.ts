import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntitylistComponent } from './entitylist/entitylist.component';
import { HomeComponent } from './home/home.component';
import { ContactformComponent } from './contactform/contactform.component';
import { ContributionsComponent } from './contributions/contributions.component';

export const router: Routes = [
    { path: '', component: HomeComponent },
    { path: 'posts', component: EntitylistComponent },
    { path: 'contributions', component: ContributionsComponent },
    { path: 'contact', component: ContactformComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
