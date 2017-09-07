import { Injectable } from '@angular/core';
import { logFactory } from "../../log-config";
import { SideNavigationService } from "./side-navigation.service";
import { WebSocketService } from "../../scene/services/web-socket.service";
import * as common from 'akibot-common/dist';

@Injectable()
export class MenuActionsService {

  private logger = logFactory.getLogger(this.constructor.name);

  constructor() {
    this.logger.debug("constructor");
  }



}
