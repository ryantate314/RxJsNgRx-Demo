import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { WithoutNgrxRoutingModule } from './without-ngrx-routing.module';
import { WithoutNgrxComponent } from './without-ngrx.component';

@NgModule({
  declarations: [
    WithoutNgrxComponent
  ],
  imports: [
    CommonModule,
    WithoutNgrxRoutingModule,
    BsDropdownModule.forRoot()
  ]
})
export class WithoutNgrxModule { }
