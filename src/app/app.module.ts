import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoInputsComponent } from './two-inputs/two-inputs.component';
import { NodeDiagramComponent } from './shared/node-diagram/node-diagram.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoInputsComponent,
    NodeDiagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
