import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { NgModelComponent } from './directives/ng-model/ng-model.component';
import { TwoOneWayDataBindingComponent } from './two-one-way-data-binding/two-one-way-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
   // NgModelComponent,
    TwoOneWayDataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
