import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SceneComponent } from "./scene.component";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SceneComponent
  ],
  providers: [

  ],
  exports: [
    SceneComponent
  ]
})
export class SceneModule { }
