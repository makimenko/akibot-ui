import { logFactory } from "../../log-config";
import { SceneComponent } from "../scene.component";
import * as common from "akibot-common/dist";
import * as THREE from 'three';
import { WorldHandler } from "./world-handler";


export class GridHandler {

    private logger = logFactory.getLogger(this.constructor.name);

    private gridNode: common.GridNode;
    private gridConfiguration: common.GridConfiguration;
    private gridObject3d: THREE.Object3D;

    // TODO: Put into config
    private globalScale: number = 0.1;
    private gap = 0.0; // distance between cells

    private xyzCoordinatesCount = 3;
    private cellPointCount = 2 * 3;
    private obstacleColor = new THREE.Color(200 / 255, 0 / 255, 0 / 255);
    private emptyColor = new THREE.Color(0 / 255, 200 / 255, 0 / 255);
    private unknownColor = new THREE.Color(250 / 255, 250 / 255, 250 / 255);

    private material = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        vertexColors: THREE.VertexColors,
        transparent: true,
        opacity: 0.5,
        shading: THREE.FlatShading
    });

    constructor(private worldHandler: WorldHandler) {
        this.logger.debug("constructor");
    }

    public addGrid(gridNode: common.GridNode) {
        this.logger.trace("addGrid");

        this.gridNode = gridNode;
        this.addLocationAreaGrid(gridNode.gridConfiguration);
        if (this.gridNode.data != undefined) {
            this.addMatrix(gridNode.data);
        }

    }

    public addLocationAreaGrid(gridConfiguration: common.GridConfiguration) {
        this.logger.trace("addLocationAreaGrid");

        this.gridConfiguration = gridConfiguration;
        this.gridObject3d = new THREE.Object3D;
        this.gridObject3d.scale.set(this.globalScale, this.globalScale, this.globalScale);
        this.worldHandler.worldObject3d.add(this.gridObject3d);
        
    }


    private addMatrix(data: number[][]): void {
        this.logger.trace("addMatrix");

        var cellsCount = this.gridNode.data.length * data[0].length;

        var dataGeometry = new THREE.BufferGeometry();
        var arraySize = cellsCount * this.xyzCoordinatesCount * this.cellPointCount;
        var positions = new Float32Array(arraySize);
        var colors = new Float32Array(arraySize);
        var color: THREE.Color;

        var ip = 0;
        var ic = 0;
        var z = 0;
        var r, g, b;

        this.logger.trace("Loop - Number of cells: " + cellsCount);
        for (var x = 0; x < data.length; x++) {
            for (var y = 0; y < data[x].length; y++) {
                // Square has 2 triangles:
                // Triangle 1:
                positions[ip++] = x
                    * this.gridConfiguration.cellSizeMm
                    + this.gap;
                positions[ip++] = y
                    * this.gridConfiguration.cellSizeMm
                    + this.gap;
                positions[ip++] = z;

                positions[ip++] = x
                    * this.gridConfiguration.cellSizeMm
                    + this.gap;
                positions[ip++] = y
                    * this.gridConfiguration.cellSizeMm
                    + this.gridConfiguration.cellSizeMm
                    - this.gap;
                positions[ip++] = z;

                positions[ip++] = x
                    * this.gridConfiguration.cellSizeMm
                    + this.gridConfiguration.cellSizeMm
                    - this.gap;
                positions[ip++] = y
                    * this.gridConfiguration.cellSizeMm
                    + this.gridConfiguration.cellSizeMm
                    - this.gap;
                positions[ip++] = z;

                // Triangle 2:
                positions[ip++] = x
                    * this.gridConfiguration.cellSizeMm
                    + this.gridConfiguration.cellSizeMm
                    - this.gap;
                positions[ip++] = y
                    * this.gridConfiguration.cellSizeMm
                    + (this.gridConfiguration.cellSizeMm)
                    - this.gap;
                positions[ip++] = z;

                positions[ip++] = x
                    * this.gridConfiguration.cellSizeMm
                    + this.gridConfiguration.cellSizeMm
                    - this.gap;
                positions[ip++] = y
                    * this.gridConfiguration.cellSizeMm
                    + this.gap;
                positions[ip++] = z;

                positions[ip++] = x
                    * this.gridConfiguration.cellSizeMm
                    + this.gap;
                positions[ip++] = y
                    * this.gridConfiguration.cellSizeMm
                    + this.gap;
                positions[ip++] = z;

                // Set color
                if (data[x][y] > 0) {
                    color = this.obstacleColor;
                } else if (data[x][y] == 0) {
                    color = this.emptyColor;
                } else {
                    color = this.unknownColor;
                }

                for (var d = 0; d < this.cellPointCount; d++) {
                    colors[ic++] = color.r;
                    colors[ic++] = color.g;
                    colors[ic++] = color.b;
                }
            }
        }

        this.logger.trace("Setting attributes");
        dataGeometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
        dataGeometry.addAttribute('color', new THREE.BufferAttribute(colors, 3));

        // Creating Mesh and adding to Scene:
        var dataGroup = new THREE.Mesh(dataGeometry, this.material);

        dataGeometry.computeBoundingBox();
        dataGeometry.computeVertexNormals();

        var offsetVector = this.gridConfiguration.offsetVector;
        dataGroup.position.set(
            offsetVector.x,
            offsetVector.y,
            offsetVector.z
        );

        this.logger.trace("Adding to scene");
        this.gridObject3d.add(dataGroup);
        this.worldHandler.sceneComponent.render();
    }

}