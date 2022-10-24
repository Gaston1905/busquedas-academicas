import { EigthComponent } from './components/pages/eigth/eigth.component';
import { SevenComponent } from './components/pages/seven/seven.component';
import { SixComponent } from './components/pages/six/six.component';
import { FiveComponent } from './components/pages/five/five.component';
import { FourComponent } from './components/pages/four/four.component';
import { ThreeComponent } from './components/pages/three/three.component';
import { TwoComponent } from './components/pages/two/two.component';
import { ZeroComponent } from './components/pages/zero/zero.component';
import { OneComponent } from './components/pages/one/one.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'zero', component: ZeroComponent},
  {path: 'one', component: OneComponent},
  {path: 'two', component: TwoComponent},
  {path: 'three', component: ThreeComponent},
  {path: 'four', component: FourComponent},
  {path: 'five', component: FiveComponent},
  {path: 'six', component: SixComponent},
  {path: 'seven', component: SevenComponent},
  {path: 'eigth', component: EigthComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
