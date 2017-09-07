import { Injectable } from "@angular/core";
import { logFactory } from "../../log-config";
import * as common from "akibot-common/dist";
import * as THREE from 'three';
import "three/examples/js/loaders/ColladaLoader";
import { WorldHandlerService } from "./world-handler.service";
import { TransformationUtils } from "./utils/transformation-utils";
import { WebSocketService } from "./web-socket.service";
import { SceneService } from "./scene.service";


@Injectable()
export class RobotHandlerService {

    private logger = logFactory.getLogger(this.constructor.name);

    private loader: THREE.ColladaLoader;
    private robotObject3d: THREE.Object3D;

    constructor(
        private worldHandlerService: WorldHandlerService,
        private webSocketService: WebSocketService,
        private sceneService: SceneService
    ) {
        this.logger.debug("constructor");
        this.onModelLoaded = this.onModelLoaded.bind(this);
        this.onRobotTransformationEvent = this.onRobotTransformationEvent.bind(this);
        this.webSocketService.events.on(common.RobotTransformationEvent.name, this.onRobotTransformationEvent);
    }

    public addRobot(robotNode: common.RobotNode) {
        this.logger.trace("addRobot");
        this.robotObject3d = new THREE.Object3D();

        if (this.loader == undefined) {
            this.loader = new THREE.ColladaLoader();
        }
        this.loader.load(robotNode.modelFileName, this.onModelLoaded);
    }

    public onModelLoaded(model: THREE.ColladaModel) {
        this.logger.trace("Adding loaded model");
        this.robotObject3d.add(model.scene);
        //this.robotObject3d.rotateX(common.AngleUtils.degreesToRadians(-90));        
        //this.robotObject3d.translateZ(0);

        this.robotObject3d.updateMatrix();
        this.worldHandlerService.worldObject3d.add(this.robotObject3d);
        this.sceneService.render();
    }

    public onRobotTransformationEvent(robotTransformationEvent: common.RobotTransformationEvent) {
        this.logger.trace("onRobotTransformationEvent");
        if (this.robotObject3d != undefined && robotTransformationEvent != undefined) {
            TransformationUtils.applyTransformation(this.robotObject3d, robotTransformationEvent.transformation);
            this.sceneService.render();
        }
    }


}