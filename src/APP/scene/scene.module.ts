import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SceneComponent } from "./scene.component";
import { WebSocketService } from "./services/web-socket.service";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SceneComponent
  ],
  providers: [
    WebSocketService
  ],
  exports: [
    SceneComponent
  ]
})
export class SceneModule { }
