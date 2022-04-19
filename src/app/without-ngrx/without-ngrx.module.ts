import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithoutNgrxRoutingModule } from './without-ngrx-routing.module';
import { WithoutNgrxComponent } from './without-ngrx.component';


@NgModule({
  declarations: [
    WithoutNgrxComponent
  ],
  imports: [
    CommonModule,
    WithoutNgrxRoutingModule
  ]
})
export class WithoutNgrxModule { }
