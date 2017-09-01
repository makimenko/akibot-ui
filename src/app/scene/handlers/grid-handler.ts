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

    private matrixColors: Float32Array;
    private dataGeometry: THREE.BufferGeometry;

    private material = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        vertexColors: THREE.VertexColors,
        transparent: true,
        opacity: 0.5,
        shading: THREE.FlatShading
    });

    constructor(private worldHandler: WorldHandler) {
        this.logger.debug("constructor");

        this.onGridUpdateEvent = this.onGridUpdateEvent.bind(this);
        this.worldHandler.sceneComponent.webSocketService.events.on(common.GridUpdateEvent.name, this.onGridUpdateEvent);
    }

    private onGridUpdateEvent(gridUpdateEvent: common.GridUpdateEvent) {
        this.logger.trace("onGridUpdateEvent");
        this.updateMatrix(gridUpdateEvent.data);
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

    private updateMatrix(newData: number[][]): void {
        this.logger.trace("Removing grid data");
        //this.gridObject3d.remove(this.gridObject3d.children[0]);
        //this.addMatrix(data);
        var color: THREE.Color;
        var ic = 0;
        var totalUpdates = 0;
        for (var x = 0; x < newData.length; x++) {
            for (var y = 0; y < newData[x].length; y++) {
                if (newData[x][y] != this.gridNode.data[x][y]) {
                    if (newData[x][y] > 0) {
                        color = this.obstacleColor;
                    } else if (newData[x][y] == 0) {
                        color = this.emptyColor;
                    } else {
                        color = this.unknownColor;
                    }
                    for (var d = 0; d < this.cellPointCount; d++) {
                        this.matrixColors[ic+0] = color.r;
                        this.matrixColors[ic+1] = color.g;
                        this.matrixColors[ic+2] = color.b;
                        ic += 3;
                    }
                    totalUpdates ++;
                } else {
                    ic +=  this.cellPointCount*3;
                }
            }
        }
        this.gridNode.data = newData;
        this.dataGeometry.attributes['color'].needsUpdate = true;
        this.worldHandler.sceneComponent.render();
        this.logger.trace("totalUpdates="+totalUpdates);

    }

    private addMatrix(data: number[][]): void {
        this.logger.trace("addMatrix");

        var cellsCount = this.gridNode.data.length * data[0].length;

        this.dataGeometry = new THREE.BufferGeometry();
        var arraySize = cellsCount * this.xyzCoordinatesCount * this.cellPointCount;
        var matrixPositions = new Float32Array(arraySize);
        this.matrixColors = new Float32Array(arraySize);
        var color: THREE.Color;

        var ip = 0;
        var ic = 0;
        var z = 0;

        this.logger.trace("Loop - Number of cells: " + cellsCount);
        for (var x = 0; x < data.length; x++) {
            for (var y = 0; y < data[x].length; y++) {
                // Square has 2 triangles:
                // Triangle 1:
                matrixPositions[ip++] = x
                    * this.gridConfiguration.cellSizeMm
                    + this.gap;
                matrixPositions[ip++] = y
                    * this.gridConfiguration.cellSizeMm
                    + this.gap;
                matrixPositions[ip++] = z;

                matrixPositions[ip++] = x
                    * this.gridConfiguration.cellSizeMm
                    + this.gap;
                matrixPositions[ip++] = y
                    * this.gridConfiguration.cellSizeMm
                    + this.gridConfiguration.cellSizeMm
                    - this.gap;
                matrixPositions[ip++] = z;

                matrixPositions[ip++] = x
                    * this.gridConfiguration.cellSizeMm
                    + this.gridConfiguration.cellSizeMm
                    - this.gap;
                matrixPositions[ip++] = y
                    * this.gridConfiguration.cellSizeMm
                    + this.gridConfiguration.cellSizeMm
                    - this.gap;
                matrixPositions[ip++] = z;

                // Triangle 2:
                matrixPositions[ip++] = x
                    * this.gridConfiguration.cellSizeMm
                    + this.gridConfiguration.cellSizeMm
                    - this.gap;
                matrixPositions[ip++] = y
                    * this.gridConfiguration.cellSizeMm
                    + (this.gridConfiguration.cellSizeMm)
                    - this.gap;
                matrixPositions[ip++] = z;

                matrixPositions[ip++] = x
                    * this.gridConfiguration.cellSizeMm
                    + this.gridConfiguration.cellSizeMm
                    - this.gap;
                matrixPositions[ip++] = y
                    * this.gridConfiguration.cellSizeMm
                    + this.gap;
                matrixPositions[ip++] = z;

                matrixPositions[ip++] = x
                    * this.gridConfiguration.cellSizeMm
                    + this.gap;
                matrixPositions[ip++] = y
                    * this.gridConfiguration.cellSizeMm
                    + this.gap;
                matrixPositions[ip++] = z;

                // Set color
                if (data[x][y] > 0) {
                    color = this.obstacleColor;
                } else if (data[x][y] == 0) {
                    color = this.emptyColor;
                } else {
                    color = this.unknownColor;
                }

                for (var d = 0; d < this.cellPointCount; d++) {
                    this.matrixColors[ic++] = color.r;
                    this.matrixColors[ic++] = color.g;
                    this.matrixColors[ic++] = color.b;
                }
            }
        }

        this.logger.trace("Setting attributes");
        this.dataGeometry.addAttribute('position', new THREE.BufferAttribute(matrixPositions, 3));
        this.dataGeometry.addAttribute('color', new THREE.BufferAttribute(this.matrixColors, 3));

        // Creating Mesh and adding to Scene:
        var dataGroup = new THREE.Mesh(this.dataGeometry, this.material);

        this.dataGeometry.computeBoundingBox();
        this.dataGeometry.computeVertexNormals();

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