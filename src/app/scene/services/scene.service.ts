import { Injectable } from '@angular/core';
import * as HELPERS from '../helpers';
import * as THREE from 'three';
import { logFactory } from "../../log-config";
import { SceneComponent } from "../scene.component";

@Injectable()
export class SceneService {

  private logger = logFactory.getLogger(this.constructor.name);

  private sceneComponent: SceneComponent;
  
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private cameraTarget: THREE.Vector3;

  public scene: THREE.Scene;

  private fieldOfView: number = 60;
  private nearClippingPane: number = 1;
  private farClippingPane: number = 2000;

  public gridHelper: HELPERS.GridHelperObject;
  public axisHelper: HELPERS.AxisHelperObject;
  private controls: THREE.OrbitControls;

  constructor() {
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

  private createCamera() {
    this.logger.debug("Create camera");

    let aspectRatio = this.sceneComponent.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    );

    // Set position and look at
    this.camera.position.x = -50;
    this.camera.position.y = -200;
    this.camera.position.z = 200;
    this.camera.up = new THREE.Vector3(0, 0, 1);

    this.cameraTarget = new THREE.Vector3(0, 0, 0);
    this.camera.lookAt(this.cameraTarget);
  }


  private createControls() {
    this.logger.debug("Create controls");
    this.controls = new THREE.OrbitControls(this.camera);
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.2;
    this.controls.addEventListener('change', this.render);
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
    this.createCamera();
    this.createControls();
    this.createRenderer();
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
  }

  public onResize() {
    this.camera.aspect = this.sceneComponent.getAspectRatio();
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.sceneComponent.canvas.clientWidth, this.sceneComponent.canvas.clientHeight);
    this.render();
  }

}
