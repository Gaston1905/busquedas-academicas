import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { EditorModule } from 'primeng/editor';
import { ChartModule } from 'primeng/chart';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    EditorModule,
    ChartModule
  ]
})

export class primengModule {}
