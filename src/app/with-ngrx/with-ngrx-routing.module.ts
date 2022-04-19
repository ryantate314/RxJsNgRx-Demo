import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithNgrxComponent } from './with-ngrx.component';

const routes: Routes = [{ path: '', component: WithNgrxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithNgrxRoutingModule { }
