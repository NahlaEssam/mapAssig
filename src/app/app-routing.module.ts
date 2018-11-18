import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponentComponent } from './components/map-component/map-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MapComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
