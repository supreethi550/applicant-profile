import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvatarListComponent } from './applicant-list/applicant-list.component';

const appRoutes: Routes = [
  { path: '', component: AvatarListComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
