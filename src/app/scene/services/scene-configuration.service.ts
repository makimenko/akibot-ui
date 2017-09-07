import { Injectable } from '@angular/core';
import { SceneService } from "./scene.service";

@Injectable()
export class SceneConfigurationService {

  private _gridHelperVisible: boolean;
  private _axisHelperVisible: boolean;

  constructor(private sceneService: SceneService) {
    // TODO: make it nicer (native->instance)
    this._gridHelperVisible = sceneService.gridHelper.visible;
    this._axisHelperVisible = sceneService.axisHelper.visible;
  }

  get gridHelperVisible() {
    return this._gridHelperVisible;
  }

  set gridHelperVisible(value: boolean) {
    this._gridHelperVisible = value;
    this.sceneService.gridHelper.visible = this._gridHelperVisible;
    this.sceneService.render();
  }

  get axisHelperVisible() {
    return this._axisHelperVisible;
  }

  set axisHelperVisible(value: boolean) {
    this._axisHelperVisible = value;
    this.sceneService.axisHelper.visible = this._axisHelperVisible;
    this.sceneService.render();
  }


}
