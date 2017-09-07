import { Injectable } from "@angular/core";
import { EventEmitter } from "events";
import * as THREE from 'three';
import { logFactory } from "../../log-config";
import * as common from "akibot-common/dist";
import { WebSocketService } from "./web-socket.service";
import { SceneService } from "./scene.service";
import { RobotHandlerService } from "./robot-handler.service";
import { GridHandlerService } from "./grid-handler.service";

@Injectable()
export class WorldHandlerService {

    private logger = logFactory.getLogger(this.constructor.name);

    public worldNode: common.WorldNode;
    public worldObject3d: THREE.Object3D;

    constructor(
        private sceneService: SceneService,
        private webSocketService: WebSocketService
    ) {
        this.logger.info("constructor");

    }

    public requestWorldContent() {
        this.logger.trace("Connected to server. Requesting World Content");
        this.webSocketService.send(new common.WorldContentRequest());
    }

    public addWorldNode(worldNode: common.WorldNode) {
        this.logger.debug("addWorldNode");
        if (this.worldNode != undefined) {
            this.logger.debug("Cleanup schene");
            // remove world node and all childs from WebGL scene
            this.sceneService.scene.remove(this.worldObject3d);
            this.sceneService.render();
        }
        this.worldNode = worldNode;

        this.logger.trace("Creating worldNodeObject3d")
        this.worldObject3d = new THREE.Object3D();
        this.sceneService.scene.add(this.worldObject3d);
    }


}