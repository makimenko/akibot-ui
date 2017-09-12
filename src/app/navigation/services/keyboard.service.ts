import { Injectable } from '@angular/core';
import { logFactory } from "../../log-config";
import { WebSocketService } from '../../scene/services/web-socket.service';
import { WheelSetCommand, WHEEL_SET_DIRECTION } from 'akibot-common/dist';
import { SceneConfigurationService } from '../../scene/services/scene-configuration.service';

@Injectable()
export class KeyboardService {
  private logger = logFactory.getLogger(this.constructor.name);

  private STOP = new WheelSetCommand(WHEEL_SET_DIRECTION.Stop, 1);
  private FORWARD = new WheelSetCommand(WHEEL_SET_DIRECTION.Forward, 1);
  private LEFT = new WheelSetCommand(WHEEL_SET_DIRECTION.Left, 1);
  private RIGHT = new WheelSetCommand(WHEEL_SET_DIRECTION.Right, 1);
  private BACKWARD = new WheelSetCommand(WHEEL_SET_DIRECTION.Backward, 1);
  private moving: boolean = false;


  constructor(
    public webSocketService: WebSocketService,
    public sceneConfigurationService: SceneConfigurationService
  ) {
    this.logger.debug("constructor");
  }


  public onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'w':
        this.onForward();
        break;
      case 'a':
        this.onLeft();
        break;
      case 'd':
        this.onRight();
        break;
      case 's':
        this.onBackward();
        break;
      case 'g':
        this.onGridHelperToggle();
        break;
      case 'h':
        this.onAxisHelperToggle();
        break;
      default:
        this.onDefault();
        break;
    }
  }

  public onDefault() {
    this.logger.debug("DEFAULT");
  }

  public onKeyUp(event: KeyboardEvent) {
    if (this.moving) {
      this.logger.debug("Stop");
      this.webSocketService.send(this.STOP);
      this.moving = false;
    }
  }

  public startMoveTo(direction: WheelSetCommand) {
    this.moving = true;
    this.webSocketService.send(direction);
  }

  public onForward() {
    this.logger.debug("Forward");
    this.startMoveTo(this.FORWARD);
  }

  public onLeft() {
    this.logger.debug("Left");
    this.startMoveTo(this.LEFT);
  }

  public onRight() {
    this.logger.debug("Right");
    this.startMoveTo(this.RIGHT);
  }

  public onBackward() {
    this.logger.debug("Backward");
    this.startMoveTo(this.BACKWARD);
  }

  public onGridHelperToggle() {
    this.sceneConfigurationService.gridHelperVisible = !this.sceneConfigurationService.gridHelperVisible;
  }


  public onAxisHelperToggle() {
    this.sceneConfigurationService.axisHelperVisible = !this.sceneConfigurationService.axisHelperVisible;
  }

}
