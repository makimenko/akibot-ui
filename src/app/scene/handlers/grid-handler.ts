import { logFactory } from "../../log-config";
import { SceneComponent } from "../scene.component";
import * as common from "akibot-common/dist";
import * as THREE from 'three';
import { WorldHandler } from "./world-handler";


export class GridHandler {

    private logger = logFactory.getLogger(this.constructor.name);

    private gridObject3d: THREE.Object3D;

    constructor (private worldHandler: WorldHandler) {
        this.logger.debug("constructor");
    }    

    public addLocationAreaGrid(gridConfiguration: common.GridConfiguration) {
        this.logger.trace("addLocationAreaGrid");        
        this.gridObject3d = new THREE.GridHelper(gridConfiguration.cellCountX * gridConfiguration.cellSizeMm, gridConfiguration.cellCountX);
        this.gridObject3d.rotateX(common.AngleUtils.degreesToRadians(90));
        this.worldHandler.worldObject3d.add(this.gridObject3d);
    }

}