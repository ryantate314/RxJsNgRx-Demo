import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithoutNgrxComponent } from './without-ngrx.component';

const routes: Routes = [{ path: '', component: WithoutNgrxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithoutNgrxRoutingModule { }
