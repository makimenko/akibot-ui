// Facing issues with THREE.ColladaLoader, exception: export 'ColladaLoader' was not found in 'three'
// Some info in internet:
// https://stackoverflow.com/questions/42434398/how-to-use-threejs-collada-loader-with-typescript-angular-cli
// 
// TODO: do better
// Workaround:
// 1. added scripts into .angular-cli.json
//     "../node_modules/three/build/three.js",
//     "../node_modules/three/examples/js/loaders/ColladaLoader.js"
// 2. defined THREE as any

declare var THREE: any;

export module ColladaLoaderUtils {
    var loader = new THREE.ColladaLoader();

    export function load(modelName:string, readyCallback:any, progressCallback?:any, failCallback?:any) {        
        loader.load(modelName, readyCallback, progressCallback, failCallback);
    }

}