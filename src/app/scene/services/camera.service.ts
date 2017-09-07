import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { logFactory } from "../../log-config";


@Injectable()
export class CameraService {

  private logger = logFactory.getLogger(this.constructor.name);
  public camera: THREE.PerspectiveCamera;
  private cameraTarget: THREE.Vector3;

  private controls: THREE.OrbitControls;

  private fieldOfView: number = 60;
  private nearClippingPane: number = 1;
  private farClippingPane: number = 2000;

  constructor() {
    this.logger.debug("constructor");

  }

  public createCamera(aspectRatio: number) {
    this.logger.debug("Create camera");
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    );
    this.camera.up = new THREE.Vector3(0, 0, 1);
    this.cameraTarget = new THREE.Vector3(0, 0, 0);
    this.camera.lookAt(this.cameraTarget);

    this.defaultPosition();
  }

  public defaultPosition() {
    this.logger.debug("Move camera to default position");

    // Set position
    this.camera.position.x = -50;
    this.camera.position.y = -200;
    this.camera.position.z = 200;
    this.cameraTarget.set(0, 0, 0);
    
    if (this.controls != undefined) {
      this.controls.update();
      
      // actually reset()  is enough... but will keep code above for future
      this.controls.reset(); 
    }
  }

  public bindControls(controls: THREE.OrbitControls) {
    this.controls = controls;
  }

}
