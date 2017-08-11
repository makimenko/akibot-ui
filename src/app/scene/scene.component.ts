import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as HELPERS from './helpers';
import * as THREE from 'three';

@Component({
    selector: 'scene',
    templateUrl: './scene.component.html',
    styleUrls: ['./scene.component.css']
})
export class SceneComponent implements AfterViewInit {

    private renderer: THREE.WebGLRenderer;
    private camera: THREE.PerspectiveCamera;
    private cameraTarget: THREE.Vector3;
    private scene: THREE.Scene;

    public fieldOfView: number = 60;
    public nearClippingPane: number = 1;
    public farClippingPane: number = 1100;

    public gridHelper: HELPERS.GridHelperObject;
    public axisHelper: HELPERS.AxisHelperObject;

    @ViewChild('canvas')
    private canvasRef: ElementRef;

    constructor() {
        console.log("SceneComponent.constructor");
    }

    private get canvas(): HTMLCanvasElement {
        return this.canvasRef.nativeElement;
    }

    private createScene() {
        this.scene = new THREE.Scene();

        this.gridHelper = new HELPERS.GridHelperObject(300, 10);
        this.scene.add(this.gridHelper);

        this.axisHelper = new HELPERS.AxisHelperObject(800);
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
            requestAnimationFrame(render);
            component.renderer.render(component.scene, component.camera);
        }());
    }



    /* EVENTS */

    public onDragEnter(event: DragEvent) {
        this.canvas.style.opacity = 0.5.toString();
    }

    public onDragLeave(event: DragEvent) {
        this.canvas.style.opacity = 1.0.toString();
    }

    public onDragOver(event: DragEvent) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    }


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

    public onResize(event: Event) {
        this.camera.aspect = this.getAspectRatio();
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    }

    /* LIFECYCLE */
    ngAfterViewInit() {
        this.createScene();
        this.createCamera();
        this.startRendering();
    }

}