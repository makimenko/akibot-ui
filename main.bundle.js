webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<scene></scene>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_ActivateThree__ = __webpack_require__("../../../../../src/app/js/ActivateThree.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_ActivateThree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_ActivateThree__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scene_scene_component__ = __webpack_require__("../../../../../src/app/scene/scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scene_serices_web_socket_service__ = __webpack_require__("../../../../../src/app/scene/serices/web-socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__scene_scene_component__["a" /* SceneComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__scene_serices_web_socket_service__["a" /* WebSocketService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/js/ActivateThree.js":
/***/ (function(module, exports, __webpack_require__) {

THREE=__webpack_require__("../../../../three/build/three.module.js");

/***/ }),

/***/ "../../../../../src/app/log-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_akibot_log_dist__ = __webpack_require__("../../../../akibot-log/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_akibot_log_dist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_akibot_log_dist__);
/* unused harmony reexport Logger */

var rules = [
    { pattern: new RegExp(".*"), logLevel: __WEBPACK_IMPORTED_MODULE_0_akibot_log_dist__["LogLevel"].Trace }
];

var logFactory = new __WEBPACK_IMPORTED_MODULE_0_akibot_log_dist__["LogFactory"](new __WEBPACK_IMPORTED_MODULE_0_akibot_log_dist__["ChromeLogAppender"](), rules);
//# sourceMappingURL=log-config.js.map

/***/ }),

/***/ "../../../../../src/app/scene/handlers/common-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonUtils; });
var CommonUtils;
(function (CommonUtils) {
    function applyTransformation(object, transformation) {
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
    CommonUtils.applyTransformation = applyTransformation;
})(CommonUtils || (CommonUtils = {}));
//# sourceMappingURL=common-utils.js.map

/***/ }),

/***/ "../../../../../src/app/scene/handlers/grid-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__log_config__ = __webpack_require__("../../../../../src/app/log-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_akibot_common_dist__ = __webpack_require__("../../../../akibot-common/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_akibot_common_dist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_akibot_common_dist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("../../../../three/build/three.module.js");



var GridHandler = (function () {
    function GridHandler(worldHandler) {
        this.worldHandler = worldHandler;
        this.logger = __WEBPACK_IMPORTED_MODULE_0__log_config__["a" /* logFactory */].getLogger(this.constructor.name);
        // TODO: Put into config
        this.globalScale = 0.1;
        this.gap = 0.0; // distance between cells
        this.xyzCoordinatesCount = 3;
        this.cellPointCount = 2 * 3;
        this.obstacleColor = new __WEBPACK_IMPORTED_MODULE_2_three__["Color"](200 / 255, 0 / 255, 0 / 255);
        this.emptyColor = new __WEBPACK_IMPORTED_MODULE_2_three__["Color"](0 / 255, 200 / 255, 0 / 255);
        this.unknownColor = new __WEBPACK_IMPORTED_MODULE_2_three__["Color"](250 / 255, 250 / 255, 250 / 255);
        this.material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            side: __WEBPACK_IMPORTED_MODULE_2_three__["DoubleSide"],
            vertexColors: __WEBPACK_IMPORTED_MODULE_2_three__["VertexColors"],
            transparent: true,
            opacity: 0.5,
            shading: __WEBPACK_IMPORTED_MODULE_2_three__["FlatShading"]
        });
        this.logger.debug("constructor");
        this.onGridUpdateEvent = this.onGridUpdateEvent.bind(this);
        this.worldHandler.sceneComponent.webSocketService.events.on(__WEBPACK_IMPORTED_MODULE_1_akibot_common_dist__["GridUpdateEvent"].name, this.onGridUpdateEvent);
    }
    GridHandler.prototype.onGridUpdateEvent = function (gridUpdateEvent) {
        this.logger.trace("onGridUpdateEvent");
        this.updateMatrix(gridUpdateEvent.data);
    };
    GridHandler.prototype.addGrid = function (gridNode) {
        this.logger.trace("addGrid");
        this.gridNode = gridNode;
        this.addLocationAreaGrid(gridNode.gridConfiguration);
        if (this.gridNode.data != undefined) {
            this.addMatrix(gridNode.data);
        }
    };
    GridHandler.prototype.addLocationAreaGrid = function (gridConfiguration) {
        this.logger.trace("addLocationAreaGrid");
        this.gridConfiguration = gridConfiguration;
        this.gridObject3d = new __WEBPACK_IMPORTED_MODULE_2_three__["Object3D"];
        this.gridObject3d.scale.set(this.globalScale, this.globalScale, this.globalScale);
        this.worldHandler.worldObject3d.add(this.gridObject3d);
    };
    GridHandler.prototype.updateMatrix = function (data) {
        this.logger.trace("Removing grid data");
        this.gridObject3d.remove(this.gridObject3d.children[0]);
        this.addMatrix(data);
    };
    GridHandler.prototype.addMatrix = function (data) {
        this.logger.trace("addMatrix");
        var cellsCount = this.gridNode.data.length * data[0].length;
        var dataGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["BufferGeometry"]();
        var arraySize = cellsCount * this.xyzCoordinatesCount * this.cellPointCount;
        var matrixPositions = new Float32Array(arraySize);
        var matrixColors = new Float32Array(arraySize);
        var color;
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
                }
                else if (data[x][y] == 0) {
                    color = this.emptyColor;
                }
                else {
                    color = this.unknownColor;
                }
                for (var d = 0; d < this.cellPointCount; d++) {
                    matrixColors[ic++] = color.r;
                    matrixColors[ic++] = color.g;
                    matrixColors[ic++] = color.b;
                }
            }
        }
        this.logger.trace("Setting attributes");
        dataGeometry.addAttribute('position', new __WEBPACK_IMPORTED_MODULE_2_three__["BufferAttribute"](matrixPositions, 3));
        dataGeometry.addAttribute('color', new __WEBPACK_IMPORTED_MODULE_2_three__["BufferAttribute"](matrixColors, 3));
        // Creating Mesh and adding to Scene:
        var dataGroup = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](dataGeometry, this.material);
        dataGeometry.computeBoundingBox();
        dataGeometry.computeVertexNormals();
        var offsetVector = this.gridConfiguration.offsetVector;
        dataGroup.position.set(offsetVector.x, offsetVector.y, offsetVector.z);
        this.logger.trace("Adding to scene");
        this.gridObject3d.add(dataGroup);
        this.worldHandler.sceneComponent.render();
    };
    return GridHandler;
}());

//# sourceMappingURL=grid-handler.js.map

/***/ }),

/***/ "../../../../../src/app/scene/handlers/robot-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RobotHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__log_config__ = __webpack_require__("../../../../../src/app/log-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_akibot_common_dist__ = __webpack_require__("../../../../akibot-common/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_akibot_common_dist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_akibot_common_dist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_examples_js_loaders_ColladaLoader__ = __webpack_require__("../../../../three/examples/js/loaders/ColladaLoader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_examples_js_loaders_ColladaLoader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_three_examples_js_loaders_ColladaLoader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_utils__ = __webpack_require__("../../../../../src/app/scene/handlers/common-utils.ts");





var RobotHandler = (function () {
    function RobotHandler(worldHandler) {
        this.worldHandler = worldHandler;
        this.logger = __WEBPACK_IMPORTED_MODULE_0__log_config__["a" /* logFactory */].getLogger(this.constructor.name);
        this.logger.debug("constructor");
        this.onModelLoaded = this.onModelLoaded.bind(this);
        this.onRobotTransformationEvent = this.onRobotTransformationEvent.bind(this);
        this.worldHandler.sceneComponent.webSocketService.events.on(__WEBPACK_IMPORTED_MODULE_1_akibot_common_dist__["RobotTransformationEvent"].name, this.onRobotTransformationEvent);
    }
    RobotHandler.prototype.addRobot = function (robotNode) {
        this.logger.trace("addRobot");
        this.robotObject3d = new __WEBPACK_IMPORTED_MODULE_2_three__["Object3D"]();
        if (this.loader == undefined) {
            this.loader = new __WEBPACK_IMPORTED_MODULE_2_three__["ColladaLoader"]();
        }
        this.loader.load(robotNode.modelFileName, this.onModelLoaded);
    };
    RobotHandler.prototype.onModelLoaded = function (model) {
        this.logger.trace("Adding loaded model");
        this.robotObject3d.add(model.scene);
        //this.robotObject3d.rotateX(common.AngleUtils.degreesToRadians(-90));        
        //this.robotObject3d.translateZ(0);
        this.robotObject3d.updateMatrix();
        this.worldHandler.worldObject3d.add(this.robotObject3d);
        this.worldHandler.sceneComponent.render();
    };
    RobotHandler.prototype.onRobotTransformationEvent = function (robotTransformationEvent) {
        this.logger.trace("onRobotTransformationEvent");
        if (this.robotObject3d != undefined && robotTransformationEvent != undefined) {
            __WEBPACK_IMPORTED_MODULE_4__common_utils__["a" /* CommonUtils */].applyTransformation(this.robotObject3d, robotTransformationEvent.transformation);
            this.worldHandler.sceneComponent.render();
        }
    };
    return RobotHandler;
}());

//# sourceMappingURL=robot-handler.js.map

/***/ }),

/***/ "../../../../../src/app/scene/handlers/world-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorldHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_config__ = __webpack_require__("../../../../../src/app/log-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_akibot_common_dist__ = __webpack_require__("../../../../akibot-common/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_akibot_common_dist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_akibot_common_dist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__robot_handler__ = __webpack_require__("../../../../../src/app/scene/handlers/robot-handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_handler__ = __webpack_require__("../../../../../src/app/scene/handlers/grid-handler.ts");





var WorldHandler = (function () {
    function WorldHandler(sceneComponent) {
        this.sceneComponent = sceneComponent;
        this.logger = __WEBPACK_IMPORTED_MODULE_1__log_config__["a" /* logFactory */].getLogger(this.constructor.name);
        this.logger.info("constructor");
        this.gridHandler = new __WEBPACK_IMPORTED_MODULE_4__grid_handler__["a" /* GridHandler */](this);
        this.robotHandler = new __WEBPACK_IMPORTED_MODULE_3__robot_handler__["a" /* RobotHandler */](this);
        this.onOpen = this.onOpen.bind(this);
        this.onError = this.onError.bind(this);
        this.onWorldContentResponse = this.onWorldContentResponse.bind(this);
        this.sceneComponent.webSocketService.events.addListener("onopen", this.onOpen);
        this.sceneComponent.webSocketService.events.addListener("onerror", this.onError);
    }
    WorldHandler.prototype.onError = function (event) {
        this.logger.error("onError: " + event);
    };
    WorldHandler.prototype.onOpen = function (event) {
        this.logger.debug("onOpen");
        this.requestWorldContent();
    };
    WorldHandler.prototype.requestWorldContent = function () {
        this.logger.trace("Connected to server. Requesting World Content");
        this.sceneComponent.webSocketService.send(new __WEBPACK_IMPORTED_MODULE_2_akibot_common_dist__["WorldContentRequest"]());
        this.sceneComponent.webSocketService.events.once(__WEBPACK_IMPORTED_MODULE_2_akibot_common_dist__["WorldContentResponse"].name, this.onWorldContentResponse);
    };
    WorldHandler.prototype.onWorldContentResponse = function (worldContentResponse) {
        this.logger.debug("onWorldContentResponse");
        this.addWorldNode(worldContentResponse.worldNode);
        this.gridHandler.addGrid(worldContentResponse.worldNode.gridNode);
        this.robotHandler.addRobot(worldContentResponse.worldNode.robotNode);
        this.sceneComponent.render();
    };
    WorldHandler.prototype.addWorldNode = function (worldNode) {
        this.logger.debug("addWorldNode");
        if (this.worldNode != undefined) {
            this.logger.error("TODO: scene clean");
        }
        this.worldNode = worldNode;
        this.logger.trace("Creating worldNodeObject3d");
        this.worldObject3d = new __WEBPACK_IMPORTED_MODULE_0_three__["Object3D"]();
        this.sceneComponent.scene.add(this.worldObject3d);
    };
    return WorldHandler;
}());

//# sourceMappingURL=world-handler.js.map

/***/ }),

/***/ "../../../../../src/app/scene/helpers/AxisHelperObject.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AxisHelperObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("../../../../three/build/three.module.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AxisHelperObject = (function (_super) {
    __extends(AxisHelperObject, _super);
    function AxisHelperObject(size) {
        var _this = _super.call(this, size) || this;
        _this.name = _this.constructor.name;
        _this.renderOrder = 999;
        return _this;
    }
    return AxisHelperObject;
}(__WEBPACK_IMPORTED_MODULE_0_three__["AxisHelper"]));

//# sourceMappingURL=AxisHelperObject.js.map

/***/ }),

/***/ "../../../../../src/app/scene/helpers/GridHelperObject.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridHelperObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("../../../../three/build/three.module.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GridHelperObject = (function (_super) {
    __extends(GridHelperObject, _super);
    function GridHelperObject(size, divisions) {
        var _this = _super.call(this) || this;
        _this.name = _this.constructor.name;
        var gridHelper1 = new __WEBPACK_IMPORTED_MODULE_0_three__["GridHelper"](size, divisions);
        _this.add(gridHelper1);
        var gridHelper2 = new __WEBPACK_IMPORTED_MODULE_0_three__["GridHelper"](size, divisions);
        gridHelper2.rotation.x = Math.PI / 2;
        _this.add(gridHelper2);
        var gridHelper3 = new __WEBPACK_IMPORTED_MODULE_0_three__["GridHelper"](size, divisions);
        gridHelper3.rotation.x = Math.PI / 2;
        gridHelper3.rotation.z = Math.PI / 2;
        _this.add(gridHelper3);
        return _this;
    }
    return GridHelperObject;
}(__WEBPACK_IMPORTED_MODULE_0_three__["Object3D"]));

//# sourceMappingURL=GridHelperObject.js.map

/***/ }),

/***/ "../../../../../src/app/scene/helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AxisHelperObject__ = __webpack_require__("../../../../../src/app/scene/helpers/AxisHelperObject.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__AxisHelperObject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GridHelperObject__ = __webpack_require__("../../../../../src/app/scene/helpers/GridHelperObject.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__GridHelperObject__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/scene/scene.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "canvas {\r\n    width: 100%;\r\n    height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/scene/scene.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas #canvas\r\n        (mousedown)=\"onMouseDown($event)\"\r\n        (mousemove)=\"onMouseMove($event)\"\r\n        (mouseup)=\"onMouseUp($event)\"\r\n        (wheel)=\"onWheel($event)\">\r\n</canvas>"

/***/ }),

/***/ "../../../../../src/app/scene/scene.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_config__ = __webpack_require__("../../../../../src/app/log-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__("../../../../../src/app/scene/helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__serices_web_socket_service__ = __webpack_require__("../../../../../src/app/scene/serices/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_three_examples_js_controls_OrbitControls__ = __webpack_require__("../../../../three/examples/js/controls/OrbitControls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_three_examples_js_controls_OrbitControls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_three_examples_js_controls_OrbitControls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__handlers_world_handler__ = __webpack_require__("../../../../../src/app/scene/handlers/world-handler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SceneComponent = (function () {
    function SceneComponent(webSocketService) {
        this.webSocketService = webSocketService;
        this.logger = __WEBPACK_IMPORTED_MODULE_1__log_config__["a" /* logFactory */].getLogger(this.constructor.name);
        this.fieldOfView = 60;
        this.nearClippingPane = 1;
        this.farClippingPane = 2000;
        this.logger.debug("constructor");
        this.render = this.render.bind(this);
    }
    Object.defineProperty(SceneComponent.prototype, "canvas", {
        get: function () {
            return this.canvasRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    SceneComponent.prototype.createScene = function () {
        this.logger.debug("createScene");
        this.scene = new __WEBPACK_IMPORTED_MODULE_3_three__["Scene"]();
        this.gridHelper = new __WEBPACK_IMPORTED_MODULE_2__helpers__["b" /* GridHelperObject */](300, 10);
        this.gridHelper.visible = false;
        this.scene.add(this.gridHelper);
        this.axisHelper = new __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* AxisHelperObject */](800);
        this.axisHelper.visible = true;
        this.scene.add(this.axisHelper);
    };
    SceneComponent.prototype.createLight = function () {
        this.logger.debug("createLight");
        var light = new __WEBPACK_IMPORTED_MODULE_3_three__["PointLight"](0xffffff, 1, 1000);
        light.position.set(0, 0, 100);
        this.scene.add(light);
        var light = new __WEBPACK_IMPORTED_MODULE_3_three__["PointLight"](0xffffff, 1, 1000);
        light.position.set(0, 0, -100);
        this.scene.add(light);
    };
    SceneComponent.prototype.createCamera = function () {
        this.logger.debug("createCamera");
        var aspectRatio = this.getAspectRatio();
        this.camera = new __WEBPACK_IMPORTED_MODULE_3_three__["PerspectiveCamera"](this.fieldOfView, aspectRatio, this.nearClippingPane, this.farClippingPane);
        // Set position and look at
        this.camera.position.x = -50;
        this.camera.position.y = -200;
        this.camera.position.z = 200;
        this.camera.up = new __WEBPACK_IMPORTED_MODULE_3_three__["Vector3"](0, 0, 1);
        this.cameraTarget = new __WEBPACK_IMPORTED_MODULE_3_three__["Vector3"](0, 0, 0);
        this.camera.lookAt(this.cameraTarget);
    };
    SceneComponent.prototype.getAspectRatio = function () {
        var height = this.canvas.clientHeight;
        if (height === 0) {
            return 0;
        }
        return this.canvas.clientWidth / this.canvas.clientHeight;
    };
    SceneComponent.prototype.startRendering = function () {
        this.logger.debug("startRendering");
        this.renderer = new __WEBPACK_IMPORTED_MODULE_3_three__["WebGLRenderer"]({
            canvas: this.canvas,
            antialias: true
        });
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = __WEBPACK_IMPORTED_MODULE_3_three__["PCFSoftShadowMap"];
        this.renderer.setClearColor(0xffffff, 1);
        this.renderer.autoClear = true;
        var component = this;
        (function render() {
            component.render();
        }());
    };
    SceneComponent.prototype.createWorldHandler = function () {
        this.worldHandler = new __WEBPACK_IMPORTED_MODULE_6__handlers_world_handler__["a" /* WorldHandler */](this);
    };
    SceneComponent.prototype.createControls = function () {
        this.logger.debug("createControls");
        this.controls = new __WEBPACK_IMPORTED_MODULE_3_three__["OrbitControls"](this.camera);
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.addEventListener('change', this.render);
    };
    SceneComponent.prototype.render = function () {
        this.renderer.render(this.scene, this.camera);
    };
    /* EVENTS */
    SceneComponent.prototype.onMouseDown = function (event) {
        event.preventDefault();
    };
    SceneComponent.prototype.onMouseMove = function (event) {
    };
    SceneComponent.prototype.onMouseUp = function (event) {
    };
    SceneComponent.prototype.onWheel = function (event) {
    };
    SceneComponent.prototype.onResize = function (event) {
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        this.logger.debug("onResize: " + this.canvas.clientWidth + ", " + this.canvas.clientHeight);
        this.camera.aspect = this.getAspectRatio();
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.render();
    };
    SceneComponent.prototype.onKeyPress = function (event) {
        this.logger.debug("onKeyPress: " + event.key);
        switch (event.key) {
            case "g":
                this.gridHelper.visible = !this.gridHelper.visible;
                this.render();
                break;
            case "a":
                this.axisHelper.visible = !this.axisHelper.visible;
                this.render();
            default:
                break;
        }
    };
    /* LIFECYCLE */
    SceneComponent.prototype.ngAfterViewInit = function () {
        this.createScene();
        this.createLight();
        this.createCamera();
        this.createWorldHandler();
        this.createControls();
        this.startRendering();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('canvas'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
    ], SceneComponent.prototype, "canvasRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SceneComponent.prototype, "onResize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('document:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SceneComponent.prototype, "onKeyPress", null);
    SceneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'scene',
            template: __webpack_require__("../../../../../src/app/scene/scene.component.html"),
            styles: [__webpack_require__("../../../../../src/app/scene/scene.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__serices_web_socket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__serices_web_socket_service__["a" /* WebSocketService */]) === "function" && _b || Object])
    ], SceneComponent);
    return SceneComponent;
    var _a, _b;
}());

//# sourceMappingURL=scene.component.js.map

/***/ }),

/***/ "../../../../../src/app/scene/serices/web-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_akibot_common_dist__ = __webpack_require__("../../../../akibot-common/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_akibot_common_dist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_akibot_common_dist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_events__ = __webpack_require__("../../../../events/events.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_config__ = __webpack_require__("../../../../../src/app/log-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebSocketService = (function () {
    function WebSocketService() {
        this.logger = __WEBPACK_IMPORTED_MODULE_3__log_config__["a" /* logFactory */].getLogger(this.constructor.name);
        // TODO: Mage connectionString configurable
        this.connectionString = "ws://localhost:3000";
        this.logger.info("constructor");
        this.events = new __WEBPACK_IMPORTED_MODULE_2_events__["EventEmitter"]();
        this.logger.debug("Connecting to: " + this.connectionString);
        this.ws = new WebSocket(this.connectionString);
        this.onOpen = this.onOpen.bind(this);
        this.onMessage = this.onMessage.bind(this);
        this.onError = this.onError.bind(this);
        this.ws.onopen = this.onOpen;
        this.ws.onmessage = this.onMessage;
        this.ws.onerror = this.onError;
    }
    WebSocketService.prototype.onError = function (event) {
        this.logger.debug("onError");
        this.events.emit("onerror", event);
    };
    WebSocketService.prototype.onOpen = function (event) {
        this.logger.debug("onOpen");
        this.events.emit("onopen", event);
    };
    WebSocketService.prototype.onMessage = function (msg) {
        this.logger.debug("onMessage: " + msg.data);
        var message = __WEBPACK_IMPORTED_MODULE_1_akibot_common_dist__["SerializationUtils"].deserialize(__WEBPACK_IMPORTED_MODULE_1_akibot_common_dist__["SerializationUtils"].jsonParse(msg.data), __WEBPACK_IMPORTED_MODULE_1_akibot_common_dist__);
        this.events.emit(message.$name, message);
    };
    WebSocketService.prototype.send = function (message) {
        var jsonString = __WEBPACK_IMPORTED_MODULE_1_akibot_common_dist__["SerializationUtils"].jsonStringify(message);
        this.logger.trace("send: " + jsonString);
        this.ws.send(jsonString);
    };
    WebSocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WebSocketService);
    return WebSocketService;
}());

//# sourceMappingURL=web-socket.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map