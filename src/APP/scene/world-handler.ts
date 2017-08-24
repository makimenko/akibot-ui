import { EventEmitter } from "events";
import * as THREE from 'three';
import { logFactory } from "../log-config";
import * as common from "akibot-common/dist";
import { WebSocketService } from "./serices/web-socket.service";
import { SceneComponent } from "./scene.component";
import "three/examples/js/loaders/ColladaLoader";


export class WorldHandler {

    private logger = logFactory.getLogger(this.constructor.name);

    private worldObject3d: THREE.Object3D;
    private robotObject3d: THREE.Object3D;
    private gridObject3d: THREE.Object3D;

    private loader: THREE.ColladaLoader;

    constructor(protected sceneComponent: SceneComponent) {
        this.logger.info("constructor");

        this.onOpen = this.onOpen.bind(this);
        this.onError = this.onError.bind(this);
        this.onWorldContentResponse = this.onWorldContentResponse.bind(this);
        this.onModelLoaded = this.onModelLoaded.bind(this);

        this.sceneComponent.webSocketService.events.addListener("onopen", this.onOpen);
        this.sceneComponent.webSocketService.events.addListener("onerror", this.onError);
    }

    public onError(event: Event): any {
        this.logger.error("onError: " + event);
    }

    public onOpen(event: Event): any {
        this.logger.debug("onOpen");
        this.logger.trace("Connected to server. Requesting World Content");
        this.sceneComponent.webSocketService.send(new common.WorldContentRequest());

        this.sceneComponent.webSocketService.events.once(common.WorldContentResponse.name, this.onWorldContentResponse);
    }

    public onWorldContentResponse(worldContentResponse: common.WorldContentResponse) {
        this.logger.debug("onWorldContentResponse");

        if (this.worldObject3d != undefined) {
            this.logger.error("TODO: scene clean");
        }

        this.logger.trace("Creating worldNodeObject3d")
        this.worldObject3d = new THREE.Object3D();
        this.sceneComponent.scene.add(this.worldObject3d);

        this.logger.trace("Creating gridObject3d")
        var gridConfig = worldContentResponse.worldNode.gridConfiguration;
        this.gridObject3d = new THREE.GridHelper(gridConfig.cellCountX * gridConfig.cellSizeMm, gridConfig.cellCountX);
        this.gridObject3d.rotateX(common.AngleUtils.degreesToRadians(90));
        //this.worldObject3d.add(this.gridObject3d);

        this.logger.trace("Creating robotNode");
        this.robotObject3d = new THREE.Object3D();

        if (this.loader == undefined) {
            this.loader = new THREE.ColladaLoader();
        }
        this.loader.load(worldContentResponse.worldNode.robotNode.modelFileName, this.onModelLoaded);
        this.sceneComponent.render();
    }

    public onModelLoaded(model: THREE.ColladaModel) {
        this.logger.trace("Adding loaded model");
        this.robotObject3d.add(model.scene);
        //this.robotObject3d.rotateX(common.AngleUtils.degreesToRadians(-90));        
        this.robotObject3d.translateZ(10);

        this.robotObject3d.updateMatrix();
        this.worldObject3d.add(this.robotObject3d);
        this.sceneComponent.render();
    }

}