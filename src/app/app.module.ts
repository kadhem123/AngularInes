import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { MemberListComponent } from './main/member/member-list/member-list.component';
import { MemberFormComponent } from './main/member/member-form/member-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "../@root/shared.module";
import { LayoutComponent } from './layout/layout.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventFormComponent } from './event/event-form/event-form.component';
import { PubFormComponent } from './main/pub/pub-form/pub-form.component';
import { PubliconListComponent } from './main/pub/publicon-list/publicon-list.component';

import { MemberDetailComponent } from './main/member/member-detail/member-detail.component';

import { OutilFormComponent } from './main/outil/outil-form/outil-form.component';
import { EventDetailComponent } from './main/event/event-detail/event-detail.component';
import { PubDetailComponent } from './main/pub/pub-detail/pub-detail.component';
import { OutilDetailComponent } from './main/outil/outil-detail/outil-detail.component';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    MemberListComponent,
    MemberFormComponent,
    EventListComponent,
    EventFormComponent,
    PubFormComponent,
    PubliconListComponent,

    MemberDetailComponent,

    OutilFormComponent,
    EventDetailComponent,
    PubDetailComponent,
    OutilDetailComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
