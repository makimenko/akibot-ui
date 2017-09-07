import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import { logFactory } from "../log-config";
import "three/examples/js/controls/OrbitControls";
import { SceneConfigurationService } from "./services/scene-configuration.service";
import { SceneService } from "./services/scene.service";
import { WebSocketService } from "./services/web-socket.service";
import { ResponseHandlerService } from "./services/response-handler.service";

@Component({
    selector: 'app-scene',
    templateUrl: './scene.component.html',
    styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements AfterViewInit {

    @ViewChild('canvas')
    private canvasRef: ElementRef;

    constructor(
        public sceneService: SceneService,
        public ResponseHandlerService: ResponseHandlerService) {  }

    public get canvas(): HTMLCanvasElement {
        return this.canvasRef.nativeElement;
    }

    public getAspectRatio(): number {
        let height = this.canvas.clientHeight;
        if (height === 0) {
            return 0;
        }
        return this.canvas.clientWidth / this.canvas.clientHeight;
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
        // fit to free space and do resizing
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        this.sceneService.onResize();
    }

    ngAfterViewInit() {
        this.sceneService.init(this);
    }

}