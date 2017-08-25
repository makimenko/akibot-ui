import { EventEmitter } from "events";
import * as THREE from 'three';
import { logFactory } from "../../log-config";
import * as common from "akibot-common/dist";
import { WebSocketService } from "../serices/web-socket.service";
import { SceneComponent } from "../scene.component";
import { RobotHandler } from "./robot-handler";
import { GridHandler } from "./grid-handler";


export class WorldHandler {

    private logger = logFactory.getLogger(this.constructor.name);

    public worldNode: common.WorldNode;
    public worldObject3d: THREE.Object3D;

    private gridHandler: GridHandler;
    private robotHandler: RobotHandler;

    constructor(public sceneComponent: SceneComponent) {
        this.logger.info("constructor");

        this.gridHandler = new GridHandler(this);
        this.robotHandler = new RobotHandler(this);

        this.onOpen = this.onOpen.bind(this);
        this.onError = this.onError.bind(this);
        this.onWorldContentResponse = this.onWorldContentResponse.bind(this);

        this.sceneComponent.webSocketService.events.addListener("onopen", this.onOpen);
        this.sceneComponent.webSocketService.events.addListener("onerror", this.onError);
    }

    private onError(event: Event): any {
        this.logger.error("onError: " + event);
    }

    private onOpen(event: Event): any {
        this.logger.debug("onOpen");
        this.requestWorldContent();
    }

    private requestWorldContent() {
        this.logger.trace("Connected to server. Requesting World Content");
        this.sceneComponent.webSocketService.send(new common.WorldContentRequest());
        this.sceneComponent.webSocketService.events.once(common.WorldContentResponse.name, this.onWorldContentResponse);
    }

    private onWorldContentResponse(worldContentResponse: common.WorldContentResponse) {
        this.logger.debug("onWorldContentResponse");

        this.addWorldNode(worldContentResponse.worldNode);
        this.gridHandler.addLocationAreaGrid(worldContentResponse.worldNode.gridConfiguration);
        this.robotHandler.addRobot(worldContentResponse.worldNode.robotNode);

        this.sceneComponent.render();
    }

    private addWorldNode(worldNode: common.WorldNode) {
        this.logger.debug("addWorldNode");
        if (this.worldNode != undefined) {
            this.logger.error("TODO: scene clean");
        }
        this.worldNode = worldNode;

        this.logger.trace("Creating worldNodeObject3d")
        this.worldObject3d = new THREE.Object3D();
        this.sceneComponent.scene.add(this.worldObject3d);
    }


}