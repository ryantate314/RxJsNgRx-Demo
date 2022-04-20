import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WithNgrxComponent } from './with-ngrx.component';

const routes: Routes = [
  {
    path: '',
    component: WithNgrxComponent,
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
export class WithNgrxRoutingModule { }
