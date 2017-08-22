import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import * as HELPERS from './helpers';
import * as THREE from 'three';
import { WebSocketService } from "./serices/web-socket.service";
import { WorldHandler } from "./world-handler";

@Component({
    selector: 'scene',
    templateUrl: './scene.component.html',
    styleUrls: ['./scene.component.css']
})
export class SceneComponent implements AfterViewInit {

    private worldHandler : WorldHandler;
    private renderer: THREE.WebGLRenderer;
    private camera: THREE.PerspectiveCamera;
    private cameraTarget: THREE.Vector3;
    public scene: THREE.Scene;

    public fieldOfView: number = 60;
    public nearClippingPane: number = 1;
    public farClippingPane: number = 1100;

    public gridHelper: HELPERS.GridHelperObject;
    public axisHelper: HELPERS.AxisHelperObject;

    @ViewChild('canvas')
    private canvasRef: ElementRef;

    constructor(public webSocketService: WebSocketService) {
        console.log("SceneComponent.constructor");
    }

    private get canvas(): HTMLCanvasElement {
        return this.canvasRef.nativeElement;
    }

    private createScene() {
        this.scene = new THREE.Scene();

        this.gridHelper = new HELPERS.GridHelperObject(300, 10);
        this.gridHelper.visible = false;
        this.scene.add(this.gridHelper);

        this.axisHelper = new HELPERS.AxisHelperObject(800);
        this.axisHelper.visible = true;
        this.scene.add(this.axisHelper);
    }

    private createCamera() {
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
            //requestAnimationFrame(render);
            component.render();
        }());
    }

    private createWorldHandler() {
        this.worldHandler = new WorldHandler(this);
    }

    public render() {
        this.renderer.render(this.scene, this.camera);
    }

    /* EVENTS */

    public onMouseDown(event: MouseEvent) {
        console.log("onMouseDown");
        event.preventDefault();
    }

    public onMouseMove(event: MouseEvent) {
        //console.log("onMouseMove");
    }

    public onMouseUp(event: MouseEvent) {
        console.log("onMouseUp");
    }

    public onWheel(event: MouseWheelEvent) {
        console.log("onWheel");
    }

    @HostListener('window:resize', ['$event'])
    public onResize(event: Event) {
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        console.log("onResize: " + this.canvas.clientWidth + ", " + this.canvas.clientHeight);

        this.camera.aspect = this.getAspectRatio();
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.render();
    }

    @HostListener('document:keypress', ['$event'])
    public onKeyPress(event: KeyboardEvent) {
        console.log("onKeyPress: " + event.key);
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
        this.createCamera();
        this.startRendering();
        this.createWorldHandler();        
    }

}