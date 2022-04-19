import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithNgrxRoutingModule } from './with-ngrx-routing.module';
import { WithNgrxComponent } from './with-ngrx.component';


@NgModule({
  declarations: [
    WithNgrxComponent
  ],
  imports: [
    CommonModule,
    WithNgrxRoutingModule
  ]
})
export class WithNgrxModule { }
