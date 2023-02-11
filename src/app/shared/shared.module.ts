import { LoginComponent } from 'src/app/auth/login/login.component';
import { angularMaterialModule } from './../modules/angularMaterial';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    angularMaterialModule,
    RouterModule
  ],
  entryComponents: [
    LoginComponent
  ],
  exports: [
    NavComponent,
    HomeComponent,
    FooterComponent
  ]
})
export class SharedModule { }
