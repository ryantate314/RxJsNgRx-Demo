import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs.component';
import { TwoInputsComponent } from './two-inputs/two-inputs.component';

const routes: Routes = [
  { path: "two-inputs", component: TwoInputsComponent },
  { path: '', component: RxjsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
