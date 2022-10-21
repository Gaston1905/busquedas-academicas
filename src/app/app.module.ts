import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { angularMaterialModule } from './modules/angularMaterial';
import { NavComponent } from './components/nav/nav.component';
import { ZeroComponent } from './components/pages/zero/zero.component';
import { OneComponent } from './components/pages/one/one.component';
import { TwoComponent } from './components/pages/two/two.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ZeroComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    angularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
