import { EventEmitter } from "events";
import * as THREE from 'three';
import { logFactory } from "../log-config";
import * as common from "akibot-common/dist";
import { WebSocketService } from "./serices/web-socket.service";

export class WorldHandler {

    private logger = logFactory.getLogger(this.constructor.name);
    private worldNodeObject3d: THREE.Object3D;

    constructor(private scene: THREE.Scene, private webSocketService: WebSocketService) {
        this.logger.info("constructor");

        this.onOpen = this.onOpen.bind(this);
        this.onError = this.onError.bind(this);
        this.onWorldContentResponse = this.onWorldContentResponse.bind(this);

        this.webSocketService.events.addListener("onopen", this.onOpen);
        this.webSocketService.events.addListener("onerror", this.onError);
    }

    public onError(event: Event): any {
        this.logger.error("onError: " + event);
    }

    public onOpen(event: Event): any {
        this.logger.debug("onOpen");
        this.logger.trace("Connected to server. Requesting World Content");
        this.webSocketService.send(new common.WorldContentRequest());

        this.webSocketService.events.once(common.WorldContentResponse.name, this.onWorldContentResponse);
    }

    public onWorldContentResponse(worldContentResponse: common.WorldContentResponse) {
        this.logger.debug("onWorldContentResponse");
        
        if (this.worldNodeObject3d == undefined) {
            this.logger.trace("Creating worldNodeObject3d first time")
            this.worldNodeObject3d = new THREE.Object3D();
            this.worldNodeObject3d.name = worldContentResponse.worldNode.name;
            this.scene.add(this.worldNodeObject3d);
        }

    }


}