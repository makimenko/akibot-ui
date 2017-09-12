import { Injectable } from '@angular/core';
import { SceneService } from "./scene.service";

@Injectable()
export class SceneConfigurationService {

  constructor(private sceneService: SceneService) {
    
  }


  get gridHelperVisible() {
    return this.sceneService.gridHelper.visible;
  }

  set gridHelperVisible(value: boolean) {
    this.sceneService.gridHelper.visible = value;
    this.sceneService.render();
  }

  get axisHelperVisible() {
    return this.sceneService.axisHelper.visible;
  }

  set axisHelperVisible(value: boolean) {
    this.sceneService.axisHelper.visible = value;
    this.sceneService.render();
  }


}
