import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import { logFactory } from "../log-config";
import * as HELPERS from './helpers';
import * as THREE from 'three';
import { WebSocketService } from "./services/web-socket.service";
import "three/examples/js/controls/OrbitControls";
import { WorldHandler } from "./handlers/world-handler";


@Component({
    selector: 'app-scene',
    templateUrl: './scene.component.html',
    styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements AfterViewInit {

    private logger = logFactory.getLogger(this.constructor.name);

    private worldHandler: WorldHandler;
    private renderer: THREE.WebGLRenderer;
    private camera: THREE.PerspectiveCamera;
    private cameraTarget: THREE.Vector3;

    public scene: THREE.Scene;

    private fieldOfView: number = 60;
    private nearClippingPane: number = 1;
    private farClippingPane: number = 2000;

    private gridHelper: HELPERS.GridHelperObject;
    private axisHelper: HELPERS.AxisHelperObject;

    private controls: THREE.OrbitControls;

    @ViewChild('canvas')
    private canvasRef: ElementRef;

    constructor(public webSocketService: WebSocketService) {
        this.logger.debug("constructor");
        this.render = this.render.bind(this);
    }

    private get canvas(): HTMLCanvasElement {
        return this.canvasRef.nativeElement;
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
        this.logger.debug("createCamera");

        let aspectRatio = this.getAspectRatio();
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

    private getAspectRatio(): number {
        let height = this.canvas.clientHeight;
        if (height === 0) {
            return 0;
        }
        return this.canvas.clientWidth / this.canvas.clientHeight;
    }

    private startRendering() {
        this.logger.debug("startRendering");
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        });
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setClearColor(0xffffff, 1);
        this.renderer.autoClear = true;

        let component: SceneComponent = this;

        (function render() {
            component.render();
        }());
    }

    private createWorldHandler() {
        this.worldHandler = new WorldHandler(this);
    }

    private createControls() {
        this.logger.debug("createControls");
        this.controls = new THREE.OrbitControls(this.camera);
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.addEventListener('change', this.render);
    }

    public render() {
        this.renderer.render(this.scene, this.camera);
    }

    /* EVENTS */

    public onMouseDown(event: MouseEvent) {
        event.preventDefault();
    }

    public onMouseMove(event: MouseEvent) {

    }

    public onMouseUp(event: MouseEvent) {

    }

    public onWheel(event: MouseWheelEvent) {

    }

    @HostListener('window:resize', ['$event'])
    public onResize(event: Event) {
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        this.logger.debug("onResize: " + this.canvas.clientWidth + ", " + this.canvas.clientHeight);

        this.camera.aspect = this.getAspectRatio();
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.render();
    }

    
    public onKeyPress(event: KeyboardEvent) {
        this.logger.debug("onKeyPress: " + event.key);
        switch (event.key) {
            case "g":
                this.gridHelper.visible = !this.gridHelper.visible;
                this.render();
                break;
            case "a":
                this.axisHelper.visible = !this.axisHelper.visible;
                this.render();
            default:
                break;
        }
    }

    /* LIFECYCLE */
    ngAfterViewInit() {
        this.createScene();
        this.createLight();
        this.createCamera();
        this.createWorldHandler();
        this.createControls();

        this.startRendering();
    }

}