import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { PropertyBindingComponent } from './other/property-binding.component';
import { EventBindingComponent } from './other/event-binding.component';
import { TwoWayBindingComponent } from './other/two-way-binding.component';
import { LifecycleComponent } from './lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
