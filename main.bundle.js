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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
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

/***/ "../../../../../src/app/scene/helpers/AxisHelperObject.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AxisHelperObject; });
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
}(__WEBPACK_IMPORTED_MODULE_0_three__["h" /* AxisHelper */]));

//# sourceMappingURL=AxisHelperObject.js.map

/***/ }),

/***/ "../../../../../src/app/scene/helpers/GridHelperObject.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridHelperObject; });
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
        var gridHelper1 = new __WEBPACK_IMPORTED_MODULE_0_three__["f" /* GridHelper */](size, divisions);
        _this.add(gridHelper1);
        var gridHelper2 = new __WEBPACK_IMPORTED_MODULE_0_three__["f" /* GridHelper */](size, divisions);
        gridHelper2.rotation.x = Math.PI / 2;
        _this.add(gridHelper2);
        var gridHelper3 = new __WEBPACK_IMPORTED_MODULE_0_three__["f" /* GridHelper */](size, divisions);
        gridHelper3.rotation.x = Math.PI / 2;
        gridHelper3.rotation.z = Math.PI / 2;
        _this.add(gridHelper3);
        return _this;
    }
    return GridHelperObject;
}(__WEBPACK_IMPORTED_MODULE_0_three__["g" /* Object3D */]));

//# sourceMappingURL=GridHelperObject.js.map

/***/ }),

/***/ "../../../../../src/app/scene/helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AxisHelperObject__ = __webpack_require__("../../../../../src/app/scene/helpers/AxisHelperObject.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__AxisHelperObject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GridHelperObject__ = __webpack_require__("../../../../../src/app/scene/helpers/GridHelperObject.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__GridHelperObject__["a"]; });


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("../../../../../src/app/scene/helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("../../../../three/build/three.module.js");
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
    function SceneComponent() {
        this.fieldOfView = 60;
        this.nearClippingPane = 1;
        this.farClippingPane = 1100;
        console.log("SceneComponent.constructor");
    }
    Object.defineProperty(SceneComponent.prototype, "canvas", {
        get: function () {
            return this.canvasRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    SceneComponent.prototype.createScene = function () {
        this.scene = new __WEBPACK_IMPORTED_MODULE_2_three__["a" /* Scene */]();
        this.gridHelper = new __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* GridHelperObject */](300, 10);
        this.gridHelper.visible = false;
        this.scene.add(this.gridHelper);
        this.axisHelper = new __WEBPACK_IMPORTED_MODULE_1__helpers__["b" /* AxisHelperObject */](800);
        this.axisHelper.visible = false;
        this.scene.add(this.axisHelper);
    };
    SceneComponent.prototype.createCamera = function () {
        var aspectRatio = this.getAspectRatio();
        this.camera = new __WEBPACK_IMPORTED_MODULE_2_three__["b" /* PerspectiveCamera */](this.fieldOfView, aspectRatio, this.nearClippingPane, this.farClippingPane);
        // Set position and look at
        this.camera.position.x = -50;
        this.camera.position.y = -200;
        this.camera.position.z = 200;
        this.camera.up = new __WEBPACK_IMPORTED_MODULE_2_three__["c" /* Vector3 */](0, 0, 1);
        this.cameraTarget = new __WEBPACK_IMPORTED_MODULE_2_three__["c" /* Vector3 */](0, 0, 0);
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
        this.renderer = new __WEBPACK_IMPORTED_MODULE_2_three__["d" /* WebGLRenderer */]({
            canvas: this.canvas,
            antialias: true
        });
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = __WEBPACK_IMPORTED_MODULE_2_three__["e" /* PCFSoftShadowMap */];
        this.renderer.setClearColor(0xffffff, 1);
        this.renderer.autoClear = true;
        var component = this;
        (function render() {
            //requestAnimationFrame(render);
            component.render();
        }());
    };
    SceneComponent.prototype.render = function () {
        this.renderer.render(this.scene, this.camera);
    };
    /* EVENTS */
    SceneComponent.prototype.onMouseDown = function (event) {
        console.log("onMouseDown");
        event.preventDefault();
    };
    SceneComponent.prototype.onMouseMove = function (event) {
        //console.log("onMouseMove");
    };
    SceneComponent.prototype.onMouseUp = function (event) {
        console.log("onMouseUp");
    };
    SceneComponent.prototype.onWheel = function (event) {
        console.log("onWheel");
    };
    SceneComponent.prototype.onResize = function (event) {
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        console.log("onResize: " + this.canvas.clientWidth + ", " + this.canvas.clientHeight);
        this.camera.aspect = this.getAspectRatio();
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.render();
    };
    SceneComponent.prototype.onKeyPress = function (event) {
        console.log("onKeyPress: " + event.key);
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
        this.createCamera();
        this.startRendering();
    };
    return SceneComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('canvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], SceneComponent.prototype, "canvasRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SceneComponent.prototype, "onResize", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('document:keypress', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SceneComponent.prototype, "onKeyPress", null);
SceneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
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