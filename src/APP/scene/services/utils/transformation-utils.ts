import * as THREE from 'three';
import * as common from "akibot-common/dist";

export module TransformationUtils {

    export function applyTransformation(object: THREE.Object3D, transformation: common.NodeTransformation3D) {
        if (object != undefined && transformation != undefined) {
            if (transformation.position != undefined) {
                object.position.set(transformation.position.x, transformation.position.y, transformation.position.z);
            }
            if (transformation.scale != undefined) {
                object.scale.set(transformation.scale.x, transformation.scale.y, transformation.scale.z);
            }
            if (transformation.rotation != undefined) {
                object.rotation.set(transformation.rotation.x, transformation.rotation.y, transformation.rotation.z);
            }
        }
    }

}