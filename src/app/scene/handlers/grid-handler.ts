import { logFactory } from "../../log-config";
import { SceneComponent } from "../scene.component";
import * as common from "akibot-common/dist";
import * as THREE from 'three';
import { WorldHandler } from "./world-handler";


export class GridHandler {

    private logger = logFactory.getLogger(this.constructor.name);

    private gridConfiguration: common.GridConfiguration;
    private gridObject3d: THREE.Object3D;

    constructor(private worldHandler: WorldHandler) {
        this.logger.debug("constructor");
    }

    public addGrid(gridNode: common.GridNode) {
        this.addLocationAreaGrid(gridNode.gridConfiguration);
    }

    public addLocationAreaGrid(gridConfiguration: common.GridConfiguration) {
        this.logger.trace("addLocationAreaGrid");
        this.gridConfiguration = gridConfiguration;
        this.gridObject3d = new THREE.GridHelper(gridConfiguration.cellCount * gridConfiguration.cellSizeMm, gridConfiguration.cellCount);
        this.gridObject3d.rotateX(common.AngleUtils.degreesToRadians(90));
        this.worldHandler.worldObject3d.add(this.gridObject3d);
    }


    private addMatrix() {

        /*
        this.gridConfiguration.cellSizeMm
        this.gridDetail.cellSizeMm = node.geometry.gridConfiguration.cellSizeMm;
        cellsCount = this.gridDetail.grid.length
            * this.gridDetail.grid[0].length;

        var gap = 0.0; // distance between cells
        this.gridDetail.gridGeometry = new THREE.BufferGeometry();
        var arraySize = cellsCount * this.gridDetail.xyzCoordinatesCount
            * this.gridDetail.cellPointCount;
        var positions = new Float32Array(arraySize);
        var colors = new Float32Array(arraySize);
        var color;

        var ip = 0;
        var ic = 0;
        var z = 0;
        var r, g, b;

        for (var x = 0; x < this.gridDetail.grid.length; x++) {
            for (var y = 0; y < this.gridDetail.grid[x].length; y++) {
                // Square has 2 triangles:
                // Triangle 1:
                positions[ip++] = x * this.gridDetail.cellSizeMm
                    * this.gridDetail.cellScale + gap;
                positions[ip++] = y * this.gridDetail.cellSizeMm
                    * this.gridDetail.cellScale + gap;
                positions[ip++] = z;

                positions[ip++] = x * this.gridDetail.cellSizeMm
                    * this.gridDetail.cellScale + gap;
                positions[ip++] = y
                    * this.gridDetail.cellSizeMm
                    * this.gridDetail.cellScale
                    + (this.gridDetail.cellSizeMm * this.gridDetail.cellScale)
                    - gap;
                positions[ip++] = z;

                positions[ip++] = x
                    * this.gridDetail.cellSizeMm
                    * this.gridDetail.cellScale
                    + (this.gridDetail.cellSizeMm * this.gridDetail.cellScale)
                    - gap;
                positions[ip++] = y
                    * this.gridDetail.cellSizeMm
                    * this.gridDetail.cellScale
                    + (this.gridDetail.cellSizeMm * this.gridDetail.cellScale)
                    - gap;
                positions[ip++] = z;

                // Triangle 2:
                positions[ip++] = x
                    * this.gridDetail.cellSizeMm
                    * this.gridDetail.cellScale
                    + (this.gridDetail.cellSizeMm * this.gridDetail.cellScale)
                    - gap;
                positions[ip++] = y
                    * this.gridDetail.cellSizeMm
                    * this.gridDetail.cellScale
                    + (this.gridDetail.cellSizeMm * this.gridDetail.cellScale)
                    - gap;
                positions[ip++] = z;

                positions[ip++] = x
                    * this.gridDetail.cellSizeMm
                    * this.gridDetail.cellScale
                    + (this.gridDetail.cellSizeMm * this.gridDetail.cellScale)
                    - gap;
                positions[ip++] = y * this.gridDetail.cellSizeMm
                    * this.gridDetail.cellScale + gap;
                positions[ip++] = z;

                positions[ip++] = x * this.gridDetail.cellSizeMm
                    * this.gridDetail.cellScale + gap;
                positions[ip++] = y * this.gridDetail.cellSizeMm
                    * this.gridDetail.cellScale + gap;
                positions[ip++] = z;

                // Set color
                if (this.gridDetail.grid[x][y] > 0) {
                    color = this.gridDetail.obstacleColor;
                } else if (this.gridDetail.grid[x][y] == 0) {
                    color = this.gridDetail.emptyColor;
                } else {
                    color = this.gridDetail.unknownColor;
                }

                for (var d = 0; d < this.gridDetail.cellPointCount; d++) {
                    colors[ic++] = color.r;
                    colors[ic++] = color.g;
                    colors[ic++] = color.b;
                }
            }
        }

        this.gridDetail.gridGeometry.addAttribute('position',
            new THREE.BufferAttribute(positions, 3));
        this.gridDetail.gridGeometry.addAttribute('color',
            new THREE.BufferAttribute(colors, 3));

        // Creating Mesh and adding to Scene:
        this.gridDetail.gridGroup = new THREE.Mesh(
            this.gridDetail.gridGeometry, this.gridDetail.material);
        this.gridDetail.gridGroup.name = node.name;

        this.gridDetail.gridGeometry.computeBoundingBox();
        this.gridDetail.gridGeometry.computeVertexNormals();

        offsetVector = node.geometry.gridConfiguration.offsetVector;
        transformation = node.transformation;
        if (transformation == null) {
            transformation = {
                position: offsetVector
            }
        } else {
            transformation.position.x += offsetVector.x;
            transformation.position.y += offsetVector.y;
        }
        AkiScene.applyTransformation(this.gridDetail.gridGroup, transformation);

        parentSceneNode.add(this.gridDetail.gridGroup);
        this.render();

        */

    }

}