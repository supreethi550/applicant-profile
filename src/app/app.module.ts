import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AvatarListComponent } from './applicant-list/applicant-list.component';
import { ProfileEditModalComponent } from './applicant-profile-edit-modal/applicant-profile-edit-modal.component';
import { AvatarCardComponent } from './applicant-card/applicant-card.component';
import { PopOverComponent } from './pop-over/pop-over.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AvatarListComponent,
    ProfileEditModalComponent,
    AvatarCardComponent,
    PopOverComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
