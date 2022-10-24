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
import { ThreeComponent } from './components/pages/three/three.component';
import { FourComponent } from './components/pages/four/four.component';
import { FiveComponent } from './components/pages/five/five.component';
import { SixComponent } from './components/pages/six/six.component';
import { SevenComponent } from './components/pages/seven/seven.component';
import { EigthComponent } from './components/pages/eigth/eigth.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { AboutProjectComponent } from './components/helper/about-project/about-project.component';
import { AboutDashboardComponent } from './components/helper/about-dashboard/about-dashboard.component';
import { AccountSetingsComponent } from './components/user/preferences/accountSettings/account-setings/account-setings.component';
import { ProfileDataComponent } from './components/user/preferences/accountSettings/accountSetings/profile-data/profile-data.component';
import { UserSettingsComponent } from './components/user/preferences/accountSettings/accountSetings/user-settings/user-settings.component';
import { AccesibilityComponent } from './components/user/preferences/accountSettings/accountSetings/accesibility/accesibility.component';
import { ContainerHelperComponent } from './helper/containerHelper/container-helper/container-helper.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ZeroComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    SevenComponent,
    EigthComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterFormComponent,
    AboutProjectComponent,
    AboutDashboardComponent,
    AccountSetingsComponent,
    ProfileDataComponent,
    UserSettingsComponent,
    AccesibilityComponent,
    ContainerHelperComponent,
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
