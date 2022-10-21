import { TwoComponent } from './components/pages/two/two.component';
import { ZeroComponent } from './components/pages/zero/zero.component';
import { OneComponent } from './components/pages/one/one.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'zero', component: ZeroComponent},
  {path: 'one', component: OneComponent},
  {path: 'two', component: TwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
