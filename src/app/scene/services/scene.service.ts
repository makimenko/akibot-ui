import { Injectable } from '@angular/core';
import * as HELPERS from '../helpers';
import * as THREE from 'three';
import { logFactory } from "../../log-config";
import { SceneComponent } from "../scene.component";
import { CameraService } from "./camera.service";

@Injectable()
export class SceneService {

  private logger = logFactory.getLogger(this.constructor.name);
  private sceneComponent: SceneComponent;
  public scene: THREE.Scene;
  private renderer: THREE.WebGLRenderer;


  public gridHelper: HELPERS.GridHelperObject;
  public axisHelper: HELPERS.AxisHelperObject;
  private controls: THREE.OrbitControls;

  constructor(private cameraService: CameraService) {
    this.logger.debug("constructor");
    this.render = this.render.bind(this);
  }

  private createScene() {
    this.logger.debug("createScene");

    this.scene = new THREE.Scene();

    this.gridHelper = new HELPERS.GridHelperObject(300, 10);
    this.gridHelper.visible = false;
    this.scene.add(this.gridHelper);

    this.axisHelper = new HELPERS.AxisHelperObject(800);
    this.axisHelper.visible = true;
    this.scene.add(this.axisHelper);
  }

  private createLight() {
    this.logger.debug("createLight");

    var light = new THREE.PointLight(0xffffff, 1, 1000);
    light.position.set(0, 0, 100);
    this.scene.add(light);

    var light = new THREE.PointLight(0xffffff, 1, 1000);
    light.position.set(0, 0, -100);
    this.scene.add(light);
  }



  private createControls() {
    this.logger.debug("Create controls");
    this.controls = new THREE.OrbitControls(this.cameraService.camera);
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.2;
    this.controls.addEventListener('change', this.render);
    this.cameraService.bindControls(this.controls)
  }

  private createRenderer() {
    this.logger.debug("Create and start renderer");
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.sceneComponent.canvas,
      antialias: true
    });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.sceneComponent.canvas.clientWidth, this.sceneComponent.canvas.clientHeight);

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setClearColor(0xffffff, 1);
    this.renderer.autoClear = true;

    // TODO: refactor
    let x: SceneService = this;
    (function render() {
      x.render();
    }());
  }

  public init(sceneComponent: SceneComponent) {
    this.sceneComponent = sceneComponent;
    this.createScene();
    this.createLight();
    this.cameraService.createCamera(this.sceneComponent.getAspectRatio());
    this.createControls();
    this.createRenderer();
  }

  public render() {
    this.renderer.render(this.scene, this.cameraService.camera);
  }

  public onResize() {
    // fit to free space and do resizing
    this.sceneComponent.canvas.style.width = "100%";
    this.sceneComponent.canvas.style.height = "100%";
    this.cameraService.camera.aspect = this.sceneComponent.getAspectRatio();
    this.cameraService.camera.updateProjectionMatrix();
    this.renderer.setSize(this.sceneComponent.canvas.clientWidth, this.sceneComponent.canvas.clientHeight);
    this.render();
  }

}
