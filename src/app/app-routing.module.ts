import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: 'rxjs', loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule) },
  { path: 'withoutNgrx', loadChildren: () => import('./without-ngrx/without-ngrx.module').then(m => m.WithoutNgrxModule) },
  { path: 'withNgrx', loadChildren: () => import('./with-ngrx/with-ngrx.module').then(m => m.WithNgrxModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
