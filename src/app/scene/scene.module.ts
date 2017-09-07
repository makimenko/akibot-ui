import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SceneComponent } from "./scene.component";
import { WebSocketService } from "./services/web-socket.service";
import { SceneConfigurationService } from './services/scene-configuration.service';
import { SceneService } from './services/scene.service';
import { WorldHandlerService } from "./services/world-handler.service";
import { RobotHandlerService } from "./services/robot-handler.service";
import { GridHandlerService } from "./services/grid-handler.service";
import { ResponseHandlerService } from './services/response-handler.service';
import { ConnectionStatusService } from './services/connection-status.service';
import { CameraService } from './services/camera.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SceneComponent
  ],
  providers: [
    WebSocketService,
    SceneConfigurationService,
    SceneService,
    GridHandlerService,
    RobotHandlerService,
    WorldHandlerService,
    ResponseHandlerService,
    ConnectionStatusService,
    CameraService
  ],
  exports: [
    SceneComponent
  ]
})
export class SceneModule { }
