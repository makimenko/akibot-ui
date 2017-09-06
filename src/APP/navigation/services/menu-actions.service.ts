import { Injectable } from '@angular/core';
import { logFactory } from "../../log-config";
import { SideNavigationService } from "./side-navigation.service";
import { WebSocketService } from "../../scene/services/web-socket.service";
import * as common from 'akibot-common/dist';

@Injectable()
export class MenuActionsService {

  private logger = logFactory.getLogger(this.constructor.name);

  constructor(public webSocketService: WebSocketService) {
    this.logger.debug("constructor");
  }

  public onGyroscopeCalibrationRequest() {
    this.logger.debug("onGyroscopeCalibrationRequest");
    
    // TODO: Show dialog
    var gyroscopeCalibrationRequest = new common.GyroscopeCalibrationRequest(10000, 100);
    this.webSocketService.send(gyroscopeCalibrationRequest);
  }

}
