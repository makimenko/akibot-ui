import { Injectable } from '@angular/core';
import { logFactory } from "../../log-config";
import { SceneService } from "./scene.service";
import { WebSocketService } from "./web-socket.service";
import { GridHandlerService } from "./grid-handler.service";
import { RobotHandlerService } from "./robot-handler.service";
import * as common from "akibot-common/dist";
import { WorldHandlerService } from "./world-handler.service";

@Injectable()
export class ResponseHandlerService {

  private logger = logFactory.getLogger(this.constructor.name);

  constructor(
    private sceneService: SceneService,
    private webSocketService: WebSocketService,
    private gridHandlerService: GridHandlerService,
    private robotHandlerService: RobotHandlerService,
    private worldHandlerService: WorldHandlerService
  ) {

    this.onOpen = this.onOpen.bind(this);
    this.onError = this.onError.bind(this);
    this.onWorldContentResponse = this.onWorldContentResponse.bind(this);
    this.onGyroscopeCalibrationResponse = this.onGyroscopeCalibrationResponse.bind(this);

    this.webSocketService.events.addListener("onopen", this.onOpen);
    this.webSocketService.events.addListener("onerror", this.onError);

    this.webSocketService.events.on(common.WorldContentResponse.name, this.onWorldContentResponse);
    this.webSocketService.events.on(common.GyroscopeCalibrationResponse.name, this.onGyroscopeCalibrationResponse);
  }

  private onError(event: Event): any {
    this.logger.error("onError: " + JSON.stringify(event));
  }

  private onOpen(event: Event): any {
    this.logger.debug("onOpen: Requesting world content");
    this.worldHandlerService.requestWorldContent();
  }

  private onWorldContentResponse(worldContentResponse: common.WorldContentResponse) {
    this.logger.debug("onWorldContentResponse");

    //if (this.worldHandlerService.worldNode != undefined) {
    this.worldHandlerService.addWorldNode(worldContentResponse.worldNode);
    this.gridHandlerService.addGrid(worldContentResponse.worldNode.gridNode);
    this.robotHandlerService.addRobot(worldContentResponse.worldNode.robotNode);

    this.sceneService.render();
  }

  private onGyroscopeCalibrationResponse(gyroscopeCalibrationResponse: common.GyroscopeCalibrationResponse) {
    this.logger.debug("onGyroscopeCalibrationResponse: " + JSON.stringify(gyroscopeCalibrationResponse));

  }

}
