import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { WithoutNgrxRoutingModule } from './without-ngrx-routing.module';
import { WithoutNgrxComponent } from './without-ngrx.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ProfileComponent } from './profile/profile.component';
import { mockBackendProvider } from '../common/mock-backend.interceptor';
import { ProfileService } from '../common/profile.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    WithoutNgrxComponent,
    AlertsComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WithoutNgrxRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    ProfileService
  ]
})
export class WithoutNgrxModule {
  static forRoot(): ModuleWithProviders<WithoutNgrxModule> {
    return {
      ngModule: WithoutNgrxModule,
      providers: [
        mockBackendProvider
      ]
    };
  }
}
