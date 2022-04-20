import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithNgrxRoutingModule } from './with-ngrx-routing.module';
import { WithNgrxComponent } from './with-ngrx.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { profileReducer } from './store/reducers/profile.reducer';
import { alertsReducer } from './store/reducers/alert.reducer';
import { FormsModule } from '@angular/forms';
import { AlertEffects } from './store/effects/alert.effects';
import { environment } from 'src/environments/environment';
import { ProfileEffects } from './store/effects/profile.effects';


@NgModule({
  declarations: [
    WithNgrxComponent,
    AlertsComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WithNgrxRoutingModule,
    BsDropdownModule.forRoot(),
    StoreModule.forRoot({ profile: profileReducer, alerts: alertsReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([AlertEffects, ProfileEffects])
  ]
})
export class WithNgrxModule { }
