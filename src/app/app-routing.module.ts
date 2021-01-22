import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./main/dashboard/dashboard.component";
import {MemberListComponent} from "./main/member/member-list/member-list.component";
import {MemberFormComponent} from "./main/member/member-form/member-form.component";
import { PubliconListComponent } from './main/pub/publicon-list/publicon-list.component';
import { PubFormComponent } from './main/pub/pub-form/pub-form.component';
import { MemberDetailComponent } from './main/member/member-detail/member-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  {
    path: 'members',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MemberListComponent,
      },
      {
        path: 'create',
        pathMatch: 'full',
        component: MemberFormComponent,
      },
      {
        path: ':id/edit',
        pathMatch: 'full',
        component: MemberFormComponent,
      },
      {
        path: ':id/detail',
        pathMatch: 'full',
        component: MemberDetailComponent,
      },
      {
        path: '**',
        redirectTo: '',
      }
    ]
  },
  {
    path: 'publications',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PubliconListComponent,
      },
      {
        path: 'create',
        pathMatch: 'full',
        component: PubFormComponent,
      },
      {
        path: ':id/edit',
        pathMatch: 'full',
        component: PubFormComponent,
      },
      {
        path: '**',
        redirectTo: '',
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
