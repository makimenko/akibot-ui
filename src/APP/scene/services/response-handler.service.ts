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

    this.webSocketService.events.addListener("onopen", this.onOpen);
    this.webSocketService.events.addListener("onerror", this.onError);

    this.webSocketService.events.once(common.WorldContentResponse.name, this.onWorldContentResponse);
  }

  private onError(event: Event): any {
    this.logger.error("onError: " + event);
  }

  private onOpen(event: Event): any {
    this.logger.debug("onOpen");
    this.worldHandlerService.requestWorldContent();
  }

  private onWorldContentResponse(worldContentResponse: common.WorldContentResponse) {
    this.logger.debug("onWorldContentResponse");

    this.worldHandlerService.addWorldNode(worldContentResponse.worldNode);
    this.gridHandlerService.addGrid(worldContentResponse.worldNode.gridNode);
    this.robotHandlerService.addRobot(worldContentResponse.worldNode.robotNode);

    this.sceneService.render();
  }

}
