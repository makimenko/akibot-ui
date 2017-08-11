webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scene_scene_component__ = __webpack_require__("../../../../../src/app/scene/scene.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__scene_scene_component__["a" /* SceneComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/scene/scene.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    color: #ffffff;\r\n}\r\n\r\ncanvas {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#info {\r\n    position: abslute;\r\n    top: 0;\r\n    \r\n    width: 100%;\r\n    padding: 5px;\r\n\r\n    color: #ffffff;\r\n    font-family: monospace;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/scene/scene.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas #canvas\r\n        (window:resize)=\"onResize($event)\"\r\n        (dragenter)=\"onDragEnter($event)\"\r\n        (dragleave)=\"onDragLeave($event)\"\r\n        (dragover)=\"onDragOver($event)\"\r\n        (drop)=\"onDrop($event)\"\r\n        (mousedown)=\"onMouseDown($event)\"\r\n        (mousemove)=\"onMouseMove($event)\"\r\n        (mouseup)=\"onMouseUp($event)\"\r\n        (wheel)=\"onWheel($event)\">\r\n</canvas>"

/***/ }),

/***/ "../../../../../src/app/scene/scene.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneComponent; });
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
    /* DEPENDENCY INJECTION (CONSTRUCTOR) */
    function SceneComponent() {
        this.fieldOfView = 75;
        this.nearClippingPane = 1;
        this.farClippingPane = 1100;
        this.widthSegments = 60;
        this.heightSegments = 40;
        this.radius = 500;
        this.texture = 'assets/textures/2294472375_24a3b8ef46_o.jpg';
        /* USER INTERACTION PROPERTIES */
        this.isUserInteracting = false;
        this.latitude = 0;
        this.longitude = 0;
        this.onPointerDownPointerX = 0;
        this.onPointerDownPointerY = 0;
        this.onPointerDownLongitude = 0;
        this.onPointerDownLatitude = 0;
        this.phi = 0;
        this.theta = 0;
    }
    Object.defineProperty(SceneComponent.prototype, "canvas", {
        /* RENDERING PROPERTIES */
        get: function () {
            return this.canvasRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /* STAGING, ANIMATION, AND RENDERING */
    /**
     * Create the scene.
     */
    SceneComponent.prototype.createScene = function () {
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["a" /* Scene */]();
    };
    /**
     * Create the camera.
     */
    SceneComponent.prototype.createCamera = function () {
        var aspectRatio = this.getAspectRatio();
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["b" /* PerspectiveCamera */](this.fieldOfView, aspectRatio, this.nearClippingPane, this.farClippingPane);
        this.cameraTarget = new __WEBPACK_IMPORTED_MODULE_1_three__["c" /* Vector3 */](0, 0, 0);
    };
    SceneComponent.prototype.createPanorama = function () {
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["d" /* SphereGeometry */](this.radius, this.widthSegments, this.heightSegments);
        geometry.scale(-1, 1, 1);
        var map = new __WEBPACK_IMPORTED_MODULE_1_three__["e" /* TextureLoader */]()
            .load(this.texture);
        this.material = new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* MeshBasicMaterial */]({ map: map });
        var mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["g" /* Mesh */](geometry, this.material);
        this.scene.add(mesh);
    };
    /**
     * Get aspect ratio of the view.
     */
    SceneComponent.prototype.getAspectRatio = function () {
        var height = this.canvas.clientHeight;
        if (height === 0) {
            return 0;
        }
        return this.canvas.clientWidth / this.canvas.clientHeight;
    };
    /**
     * Rotate the camera.
     */
    SceneComponent.prototype.rotateCamera = function () {
        if (this.isUserInteracting === false) {
            this.longitude += 0.1;
        }
        this.latitude = Math.max(-85, Math.min(85, this.latitude));
        this.phi = __WEBPACK_IMPORTED_MODULE_1_three__["h" /* Math */].degToRad(90 - this.latitude);
        this.theta = __WEBPACK_IMPORTED_MODULE_1_three__["h" /* Math */].degToRad(this.longitude);
        this.cameraTarget.x = 500 * Math.sin(this.phi) * Math.cos(this.theta);
        this.cameraTarget.y = 500 * Math.cos(this.phi);
        this.cameraTarget.z = 500 * Math.sin(this.phi) * Math.sin(this.theta);
        this.camera.lookAt(this.cameraTarget);
    };
    /**
     * Start the rendering loop.
     */
    SceneComponent.prototype.startRendering = function () {
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["i" /* WebGLRenderer */]({ canvas: this.canvas });
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        var component = this;
        (function render() {
            requestAnimationFrame(render);
            component.rotateCamera();
            component.renderer.render(component.scene, component.camera);
        }());
    };
    /* EVENTS */
    SceneComponent.prototype.onDragEnter = function (event) {
        this.canvas.style.opacity = 0.5.toString();
    };
    SceneComponent.prototype.onDragLeave = function (event) {
        this.canvas.style.opacity = 1.0.toString();
    };
    SceneComponent.prototype.onDragOver = function (event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    };
    SceneComponent.prototype.onDrop = function (event) {
        event.preventDefault();
        var component = this;
        var reader = new FileReader();
        reader.addEventListener('load', function onDroppedFileLoad() {
            component.material.map.image.src = reader.result;
            component.material.map.needsUpdate = true;
        });
        reader.readAsDataURL(event.dataTransfer.files[0]);
        this.canvas.style.opacity = 1.0.toString();
    };
    SceneComponent.prototype.onMouseDown = function (event) {
        console.log("onMouseDown");
        event.preventDefault();
        this.isUserInteracting = true;
        this.onPointerDownPointerX = event.clientX;
        this.onPointerDownPointerY = event.clientY;
        this.onPointerDownLatitude = this.latitude;
        this.onPointerDownLongitude = this.longitude;
    };
    SceneComponent.prototype.onMouseMove = function (event) {
        if (this.isUserInteracting !== true) {
            // Propagate event
            return true;
        }
        this.latitude = (event.clientY - this.onPointerDownPointerY) * 0.1 + this.onPointerDownLatitude;
        this.longitude = (this.onPointerDownPointerX - event.clientX) * 0.1 + this.onPointerDownLongitude;
    };
    SceneComponent.prototype.onMouseUp = function (event) {
        this.isUserInteracting = false;
    };
    SceneComponent.prototype.onWheel = function (event) {
        this.camera.fov += event.deltaY * 0.05;
        this.camera.updateProjectionMatrix();
    };
    SceneComponent.prototype.onResize = function (event) {
        this.camera.aspect = this.getAspectRatio();
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    };
    /* LIFECYCLE */
    SceneComponent.prototype.ngAfterViewInit = function () {
        this.createScene();
        this.createCamera();
        this.createPanorama();
        this.startRendering();
    };
    return SceneComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], SceneComponent.prototype, "fieldOfView", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('nearClipping'),
    __metadata("design:type", Number)
], SceneComponent.prototype, "nearClippingPane", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('farClipping'),
    __metadata("design:type", Number)
], SceneComponent.prototype, "farClippingPane", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], SceneComponent.prototype, "widthSegments", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], SceneComponent.prototype, "heightSegments", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], SceneComponent.prototype, "radius", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], SceneComponent.prototype, "texture", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('canvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], SceneComponent.prototype, "canvasRef", void 0);
SceneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'scene',
        template: __webpack_require__("../../../../../src/app/scene/scene.component.html"),
        styles: [__webpack_require__("../../../../../src/app/scene/scene.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SceneComponent);

var _a;
//# sourceMappingURL=scene.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map