import * as THREE from 'three';

export class GridHelperObject extends THREE.Object3D {

    constructor(size: number, divisions: number) {
        super();
        this.name = this.constructor.name;

        var gridHelper1 = new THREE.GridHelper(size, divisions);
        this.add(gridHelper1);

        var gridHelper2 = new THREE.GridHelper(size, divisions);
        gridHelper2.rotation.x = Math.PI / 2;
        this.add(gridHelper2);

        var gridHelper3 = new THREE.GridHelper(size, divisions);
        gridHelper3.rotation.x = Math.PI / 2;
        gridHelper3.rotation.z = Math.PI / 2;
        this.add(gridHelper3);
    }

}