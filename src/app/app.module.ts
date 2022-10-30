import { StatisticsComponent } from './components/user/personal/dashboard/statistics/statistics/statistics.component';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { DiaryComponent } from './components/user/personal/dashboard/diary/diary/diary.component';
import { DashboardComponent } from './components/user/personal/dashboard/dashboard/dashboard.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { AboutProjectComponent } from './components/helper/aboutProject/about-project.component';
import { AboutDashboardComponent } from './components/helper/aboutDashboard/about-dashboard.component';
import { AccountSetingsComponent } from './components/user/preferences/accountSettings/account-setings/account-setings.component';
import { ProfileDataComponent } from './components/user/preferences/accountSettings/accountSetings/profile-data/profile-data.component';
import { UserSettingsComponent } from './components/user/preferences/accountSettings/accountSetings/user-settings/user-settings.component';
import { AccesibilityComponent } from './components/user/preferences/accesibility/accesibility/accesibility.component';
import { ContainerHelperComponent } from './components/helper/containerHelper/container-helper/container-helper.component';
import { GradesComponent } from './components/user/personal/dashboard/grades/grades/grades.component';
import { rxjsModule } from './modules/rjxs';
import { primengModule } from './modules/primeng';



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
    AboutProjectComponent,
    AboutDashboardComponent,
    AccountSetingsComponent,
    ProfileDataComponent,
    UserSettingsComponent,
    AccesibilityComponent,
    ContainerHelperComponent,
    DashboardComponent,
    DiaryComponent,
    GradesComponent,
    StatisticsComponent,
  ],
  entryComponents: [LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    angularMaterialModule,
    rxjsModule,
    FullCalendarModule,
    primengModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
