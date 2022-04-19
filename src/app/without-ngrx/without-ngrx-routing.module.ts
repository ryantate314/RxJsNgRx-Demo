import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WithoutNgrxComponent } from './without-ngrx.component';

const routes: Routes = [
  {
    path: '',
    component: WithoutNgrxComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'alerts', component: AlertsComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithoutNgrxRoutingModule { }
