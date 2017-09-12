import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import { logFactory } from "../log-config";
import "three/examples/js/controls/OrbitControls";
import { SceneConfigurationService } from "./services/scene-configuration.service";
import { SceneService } from "./services/scene.service";
import { WebSocketService } from "./services/web-socket.service";
import { ResponseHandlerService } from "./services/response-handler.service";
import { SideNavigationService } from '../navigation/services/side-navigation.service';
import { KeyboardService } from '../navigation/services/keyboard.service';

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
        public ResponseHandlerService: ResponseHandlerService,
        public sideNavigationService: SideNavigationService,
        public keyboardService: KeyboardService
    ) { }

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
        this.sceneService.onResize();
    }

    @HostListener('window:keydown', ['$event'])
    public onKeyDown(event: KeyboardEvent) {
        if (this.sideNavigationService.keyboardEnabled && !event.repeat) {
            this.keyboardService.onKeyDown(event);
        }
    }

    @HostListener('window:keyup', ['$event'])
    public onKeyUp(event: KeyboardEvent) {
        if (this.sideNavigationService.keyboardEnabled) {
            this.keyboardService.onKeyUp(event);
        }
    }


    ngAfterViewInit() {
        this.sceneService.init(this);
    }

}