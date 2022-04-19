import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoInputsComponent } from './two-inputs/two-inputs.component';

const routes: Routes = [
  { path: "two-inputs", component: TwoInputsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
