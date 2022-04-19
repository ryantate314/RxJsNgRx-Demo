import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component'

import { TwoInputsComponent } from './two-inputs/two-inputs.component';
import { NodeDiagramComponent } from './shared/node-diagram/node-diagram.component';


@NgModule({
  declarations: [
    RxjsComponent,
    TwoInputsComponent,
    NodeDiagramComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
