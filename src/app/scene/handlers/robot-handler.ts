import { SceneComponent } from "../scene.component";
import { logFactory } from "../../log-config";
import * as common from "akibot-common/dist";
import * as THREE from 'three';
import "three/examples/js/loaders/ColladaLoader";
import { WorldHandler } from "./world-handler";


export class RobotHandler {

    private logger = logFactory.getLogger(this.constructor.name);

    private loader: THREE.ColladaLoader;
    private robotObject3d: THREE.Object3D;

    constructor(private worldHandler: WorldHandler) {
        this.logger.debug("constructor");
        this.onModelLoaded = this.onModelLoaded.bind(this);
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
        this.worldHandler.worldObject3d.add(this.robotObject3d);
        this.worldHandler.sceneComponent.render();
    }


}