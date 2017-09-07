import * as THREE from 'three';

export class AxisHelperObject extends THREE.AxisHelper {

    constructor(size: number) {
        super(size);
        this.name = this.constructor.name;
        this.renderOrder = 999;
    }

}