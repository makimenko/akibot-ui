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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page></app-page>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_js_ActivateThree__ = __webpack_require__("../../../../../src/app/scene/js/ActivateThree.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_js_ActivateThree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scene_js_ActivateThree__);
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
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__design_material2_module__ = __webpack_require__("../../../../../src/app/design/material2.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_module__ = __webpack_require__("../../../../../src/app/navigation/navigation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scene_scene_module__ = __webpack_require__("../../../../../src/app/scene/scene.module.ts");
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
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__design_material2_module__["a" /* Material2Module */],
                __WEBPACK_IMPORTED_MODULE_7__scene_scene_module__["a" /* SceneModule */],
                __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_module__["a" /* NavigationModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/design/material2.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Material2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Material2Module = (function () {
    function Material2Module() {
    }
    Material2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdCoreModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MdProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MdProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MdRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MdSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MdSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MdSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MdSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MdSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MdSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MdTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MdTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MdToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MdTooltipModule */]
            ]
        })
    ], Material2Module);
    return Material2Module;
}());

//# sourceMappingURL=material2.module.js.map

/***/ }),

/***/ "../../../../../src/app/log-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_akibot_log_dist__ = __webpack_require__("../../../../akibot-log/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_akibot_log_dist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_akibot_log_dist__);
/* unused harmony reexport Logger */

var rules = [
    { pattern: new RegExp(".*"), logLevel: __WEBPACK_IMPORTED_MODULE_0_akibot_log_dist__["LogLevel"].Debug }
];

var logFactory = new __WEBPACK_IMPORTED_MODULE_0_akibot_log_dist__["LogFactory"](new __WEBPACK_IMPORTED_MODULE_0_akibot_log_dist__["ChromeLogAppender"](), rules);
//# sourceMappingURL=log-config.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/dialog/configure-view-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Configure View</h1>\r\n\r\n<md-slide-toggle tabindex=\"1\" [(ngModel)]=\"sceneConfigurationService.gridHelperVisible\">Show Grid Helper</md-slide-toggle>\r\n<md-slide-toggle tabindex=\"2\" [(ngModel)]=\"sceneConfigurationService.axisHelperVisible\">Show Axis Helper</md-slide-toggle>\r\n\r\n<div md-dialog-actions>\r\n    <button md-button md-dialog-close>Close</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/navigation/dialog/configure-view-dialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigureViewDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scene_services_scene_configuration_service__ = __webpack_require__("../../../../../src/app/scene/services/scene-configuration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigureViewDialog = (function () {
    function ConfigureViewDialog(dialogRef, sceneConfigurationService) {
        this.dialogRef = dialogRef;
        this.sceneConfigurationService = sceneConfigurationService;
    }
    ConfigureViewDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'configure-view-dialog',
            template: __webpack_require__("../../../../../src/app/navigation/dialog/configure-view-dialog.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__scene_services_scene_configuration_service__["a" /* SceneConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__scene_services_scene_configuration_service__["a" /* SceneConfigurationService */]) === "function" && _b || Object])
    ], ConfigureViewDialog);
    return ConfigureViewDialog;
    var _a, _b;
}());

//# sourceMappingURL=configure-view-dialog.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/dialog/gyroscope-calibration-request-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Gyroscope Calibration</h1>\r\n<div md-dialog-content>\r\n    <p>Please define request parameters</p>\r\n    <md-form-field>\r\n        <input mdInput tabindex=\"1\" required [(ngModel)]=\"data.maxTimeMs\" placeholder=\"Calibration time (ms)\">\r\n    </md-form-field>\r\n    <md-form-field>\r\n        <input mdInput tabindex=\"2\" required [(ngModel)]=\"data.intervalMs\" placeholder=\"Interval (ms)\">\r\n    </md-form-field>\r\n</div>\r\n<div md-dialog-actions>\r\n    <button md-button [md-dialog-close]=\"data\" tabindex=\"3\">Send</button>\r\n    <button md-button (click)=\"this.dialogRef.close()\" tabindex=\"-1\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/navigation/dialog/gyroscope-calibration-request-dialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GyroscopeCalibrationRequestDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var GyroscopeCalibrationRequestDialog = (function () {
    function GyroscopeCalibrationRequestDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    GyroscopeCalibrationRequestDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gyroscope-calibration-request-dialog',
            template: __webpack_require__("../../../../../src/app/navigation/dialog/gyroscope-calibration-request-dialog.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object, Object])
    ], GyroscopeCalibrationRequestDialog);
    return GyroscopeCalibrationRequestDialog;
    var _a;
}());

//# sourceMappingURL=gyroscope-calibration-request-dialog.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<button md-raised-button color=\"accent\" (click)=\"onSideNavToggle()\">\n  <md-icon>\n    <span class=\"{{sideNavigationService.getChosenToggleCommand()}}\"></span>\n  </md-icon>\n</button>\n\n<button md-raised-button color=\"primary\" [mdMenuTriggerFor]=\"menuRequest\">\n  <span>Request</span>\n</button>\n\n<md-menu #menuRequest=\"mdMenu\">\n  <button md-menu-item (click)=\"menuWorldContentRequest()\">\n    <md-icon><span class=\"fa fa-globe\"></span></md-icon>\n    <span>WorldContentRequest</span>\n  </button>\n  <button md-menu-item (click)=\"menuGyroscopeCalibrationRequest()\">\n    <md-icon><span class=\"fa fa-compass\"></span></md-icon>\n    <span>GyroscopeCalibrationRequest</span>\n  </button>\n</md-menu>\n\n\n<button md-raised-button color=\"primary\" [mdMenuTriggerFor]=\"menuView\">\n  <span>View</span>\n</button>\n\n<md-menu #menuView=\"mdMenu\">\n\n  <button md-menu-item  (click)=\"cameraService.defaultPosition()\">\n    <md-icon><span class=\"fa fa-video-camera\"></span></md-icon>\n    <span>Reset Camera</span>\n  </button>\n\n  <button md-menu-item (click)=\"menuConfigureView()\">\n   <md-icon><span class=\"fa fa-sliders\"></span></md-icon>\n    <span>Configure View</span>\n  </button>\n\n</md-menu>"

/***/ }),

/***/ "../../../../../src/app/navigation/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_actions_service__ = __webpack_require__("../../../../../src/app/navigation/services/menu-actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_side_navigation_service__ = __webpack_require__("../../../../../src/app/navigation/services/side-navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_gyroscope_calibration_request_dialog__ = __webpack_require__("../../../../../src/app/navigation/dialog/gyroscope-calibration-request-dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scene_services_web_socket_service__ = __webpack_require__("../../../../../src/app/scene/services/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_akibot_common_dist__ = __webpack_require__("../../../../akibot-common/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_akibot_common_dist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_akibot_common_dist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialog_configure_view_dialog__ = __webpack_require__("../../../../../src/app/navigation/dialog/configure-view-dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scene_services_camera_service__ = __webpack_require__("../../../../../src/app/scene/services/camera.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MenuComponent = (function () {
    function MenuComponent(dialog, menuActionsService, sideNavigationService, webSocketService, cameraService) {
        this.dialog = dialog;
        this.menuActionsService = menuActionsService;
        this.sideNavigationService = sideNavigationService;
        this.webSocketService = webSocketService;
        this.cameraService = cameraService;
    }
    MenuComponent.prototype.onSideNavToggle = function () {
        this.sideNavigationService.sideNavOpened = !this.sideNavigationService.sideNavOpened;
    };
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.menuWorldContentRequest = function () {
        var worldContentRequest = new __WEBPACK_IMPORTED_MODULE_6_akibot_common_dist__["WorldContentRequest"]();
        this.webSocketService.send(worldContentRequest);
    };
    MenuComponent.prototype.menuGyroscopeCalibrationRequest = function () {
        var _this = this;
        var input = {
            maxTimeMs: 10000, intervalMs: 100
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialog_gyroscope_calibration_request_dialog__["a" /* GyroscopeCalibrationRequestDialog */], {
            data: input
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined) {
                var gyroscopeCalibrationRequest = new __WEBPACK_IMPORTED_MODULE_6_akibot_common_dist__["GyroscopeCalibrationRequest"](result.maxTimeMs, result.intervalMs);
                _this.webSocketService.send(gyroscopeCalibrationRequest);
            }
        });
    };
    MenuComponent.prototype.menuConfigureView = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__dialog_configure_view_dialog__["a" /* ConfigureViewDialog */]);
        dialogRef.afterClosed().subscribe(function () {
        });
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/navigation/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_actions_service__["a" /* MenuActionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_actions_service__["a" /* MenuActionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_side_navigation_service__["a" /* SideNavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_side_navigation_service__["a" /* SideNavigationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__scene_services_web_socket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__scene_services_web_socket_service__["a" /* WebSocketService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__scene_services_camera_service__["a" /* CameraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__scene_services_camera_service__["a" /* CameraService */]) === "function" && _e || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scene_services_web_socket_service__ = __webpack_require__("../../../../../src/app/scene/services/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__ = __webpack_require__("../../../../../src/app/navigation/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_page_component__ = __webpack_require__("../../../../../src/app/navigation/page/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/navigation/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/navigation/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_menu_actions_service__ = __webpack_require__("../../../../../src/app/navigation/services/menu-actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_side_navigation_service__ = __webpack_require__("../../../../../src/app/navigation/services/side-navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__design_material2_module__ = __webpack_require__("../../../../../src/app/design/material2.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__scene_scene_module__ = __webpack_require__("../../../../../src/app/scene/scene.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dialog_gyroscope_calibration_request_dialog__ = __webpack_require__("../../../../../src/app/navigation/dialog/gyroscope-calibration-request-dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dialog_configure_view_dialog__ = __webpack_require__("../../../../../src/app/navigation/dialog/configure-view-dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__scene_services_scene_configuration_service__ = __webpack_require__("../../../../../src/app/scene/services/scene-configuration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var NavigationModule = (function () {
    function NavigationModule() {
    }
    NavigationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_9__design_material2_module__["a" /* Material2Module */],
                __WEBPACK_IMPORTED_MODULE_10__scene_scene_module__["a" /* SceneModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_4__page_page_component__["a" /* PageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidenav_sidenav_component__["a" /* SideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_6__toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dialog_gyroscope_calibration_request_dialog__["a" /* GyroscopeCalibrationRequestDialog */],
                __WEBPACK_IMPORTED_MODULE_13__dialog_configure_view_dialog__["a" /* ConfigureViewDialog */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__scene_services_web_socket_service__["a" /* WebSocketService */],
                __WEBPACK_IMPORTED_MODULE_7__services_menu_actions_service__["a" /* MenuActionsService */],
                __WEBPACK_IMPORTED_MODULE_8__services_side_navigation_service__["a" /* SideNavigationService */],
                __WEBPACK_IMPORTED_MODULE_14__scene_services_scene_configuration_service__["a" /* SceneConfigurationService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__dialog_gyroscope_calibration_request_dialog__["a" /* GyroscopeCalibrationRequestDialog */],
                __WEBPACK_IMPORTED_MODULE_13__dialog_configure_view_dialog__["a" /* ConfigureViewDialog */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__page_page_component__["a" /* PageComponent */]
            ]
        })
    ], NavigationModule);
    return NavigationModule;
}());

//# sourceMappingURL=navigation.module.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/page/page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n<app-sidenav></app-sidenav>"

/***/ }),

/***/ "../../../../../src/app/navigation/page/page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/page/page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageComponent = (function () {
    function PageComponent() {
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page',
            template: __webpack_require__("../../../../../src/app/navigation/page/page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/page/page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageComponent);
    return PageComponent;
}());

//# sourceMappingURL=page.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/services/menu-actions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuActionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_config__ = __webpack_require__("../../../../../src/app/log-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuActionsService = (function () {
    function MenuActionsService() {
        this.logger = __WEBPACK_IMPORTED_MODULE_1__log_config__["a" /* logFactory */].getLogger(this.constructor.name);
        this.logger.debug("constructor");
    }
    MenuActionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MenuActionsService);
    return MenuActionsService;
}());

//# sourceMappingURL=menu-actions.service.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/services/side-navigation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_config__ = __webpack_require__("../../../../../src/app/log-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideNavigationService = (function () {
    function SideNavigationService() {
        this.logger = __WEBPACK_IMPORTED_MODULE_1__log_config__["a" /* logFactory */].getLogger(this.constructor.name);
        this.sideNavOpened = false;
        this.chosenToggleCommand = "orientation";
        this.toggleCommandList = [
            {
                value: "orientation",
                icon: "fa fa-eye"
            },
            {
                value: "move",
                icon: "fa fa-arrows"
            }
        ];
        this.logger.debug("constructor");
    }
    SideNavigationService.prototype.getChosenToggleCommand = function () {
        var _this = this;
        var res;
        this.toggleCommandList.forEach(function (element) {
            if (element.value == _this.chosenToggleCommand) {
                res = element.icon;
            }
        });
        return res;
    };
    SideNavigationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SideNavigationService);
    return SideNavigationService;
}());

//# sourceMappingURL=side-navigation.service.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\n  <md-sidenav mode=\"over\" opened=\"{{sideNavigationService.sideNavOpened}}\" (close)=\"onCloseSideNav()\">\n    <br/>\n    <md-button-toggle-group [(ngModel)]=\"sideNavigationService.chosenToggleCommand\" vertical>\n      <md-button-toggle *ngFor=\"let item of sideNavigationService.toggleCommandList\" value=\"{{item.value}}\">\n        <md-icon>\n          <span class=\"{{item.icon}}\"></span>\n        </md-icon>\n      </md-button-toggle>\n    </md-button-toggle-group>\n  </md-sidenav>\n  <div>\n    <app-scene></app-scene>\n  </div>\n</md-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/navigation/sidenav/sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-sidenav,\nmd-sidenav.md-locked-open,\nmd-sidenav.md-closed.md-locked-open-add-active {\n  min-width: 70px !important;\n  width: 80vw !important;\n  max-width: 70px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_side_navigation_service__ = __webpack_require__("../../../../../src/app/navigation/services/side-navigation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideNavComponent = (function () {
    function SideNavComponent(sideNavigationService) {
        this.sideNavigationService = sideNavigationService;
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent.prototype.onCloseSideNav = function () {
        this.sideNavigationService.sideNavOpened = false;
    };
    SideNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidenav',
            template: __webpack_require__("../../../../../src/app/navigation/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/sidenav/sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_side_navigation_service__["a" /* SideNavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_side_navigation_service__["a" /* SideNavigationService */]) === "function" && _a || Object])
    ], SideNavComponent);
    return SideNavComponent;
    var _a;
}());

//# sourceMappingURL=sidenav.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n    <app-menu></app-menu>\n    <span class=\"toolbar-spacer\"></span>\n    <md-slide-toggle [(ngModel)]=\"connectionStatusService.connected\" (change)=\"onConnectionChange($event)\">Connection</md-slide-toggle>\n</md-toolbar>"

/***/ }),

/***/ "../../../../../src/app/navigation/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\nmd-toolbar {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  z-index: 1;\n  position: relative; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_services_connection_status_service__ = __webpack_require__("../../../../../src/app/scene/services/connection-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scene_services_web_socket_service__ = __webpack_require__("../../../../../src/app/scene/services/web-socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolbarComponent = (function () {
    function ToolbarComponent(connectionStatusService, webSocketService) {
        this.connectionStatusService = connectionStatusService;
        this.webSocketService = webSocketService;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.onConnectionChange = function (event) {
        if (event.checked) {
            this.webSocketService.connect();
        }
        else {
            this.webSocketService.disconnect();
        }
    };
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-toolbar',
            template: __webpack_require__("../../../../../src/app/navigation/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__scene_services_connection_status_service__["a" /* ConnectionStatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__scene_services_connection_status_service__["a" /* ConnectionStatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__scene_services_web_socket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__scene_services_web_socket_service__["a" /* WebSocketService */]) === "function" && _b || Object])
    ], ToolbarComponent);
    return ToolbarComponent;
    var _a, _b;
}());

//# sourceMappingURL=toolbar.component.js.map

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

/***/ "../../../../../src/app/scene/js/ActivateThree.js":
/***/ (function(module, exports, __webpack_require__) {

THREE=__webpack_require__("../../../../three/build/three.module.js");

/***/ }),

/***/ "../../../../../src/app/scene/scene.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas #canvas\r\n        (mousedown)=\"onMouseDown($event)\"\r\n        (mousemove)=\"onMouseMove($event)\"\r\n        (mouseup)=\"onMouseUp($event)\"\r\n        (wheel)=\"onWheel($event)\">\r\n</canvas>"

/***/ }),

/***/ "../../../../../src/app/scene/scene.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "canvas {\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/scene/scene.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three_examples_js_controls_OrbitControls__ = __webpack_require__("../../../../three/examples/js/controls/OrbitControls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three_examples_js_controls_OrbitControls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_three_examples_js_controls_OrbitControls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_scene_service__ = __webpack_require__("../../../../../src/app/scene/services/scene.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_response_handler_service__ = __webpack_require__("../../../../../src/app/scene/services/response-handler.service.ts");
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
    function SceneComponent(sceneService, ResponseHandlerService) {
        this.sceneService = sceneService;
        this.ResponseHandlerService = ResponseHandlerService;
    }
    Object.defineProperty(SceneComponent.prototype, "canvas", {
        get: function () {
            return this.canvasRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    SceneComponent.prototype.getAspectRatio = function () {
        var height = this.canvas.clientHeight;
        if (height === 0) {
            return 0;
        }
        return this.canvas.clientWidth / this.canvas.clientHeight;
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
        // fit to free space and do resizing
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        this.sceneService.onResize();
    };
    SceneComponent.prototype.ngAfterViewInit = function () {
        this.sceneService.init(this);
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
    SceneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-scene',
            template: __webpack_require__("../../../../../src/app/scene/scene.component.html"),
            styles: [__webpack_require__("../../../../../src/app/scene/scene.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_scene_service__["a" /* SceneService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_scene_service__["a" /* SceneService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_response_handler_service__["a" /* ResponseHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_response_handler_service__["a" /* ResponseHandlerService */]) === "function" && _c || Object])
    ], SceneComponent);
    return SceneComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=scene.component.js.map

/***/ }),

/***/ "../../../../../src/app/scene/scene.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scene_component__ = __webpack_require__("../../../../../src/app/scene/scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_web_socket_service__ = __webpack_require__("../../../../../src/app/scene/services/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_scene_configuration_service__ = __webpack_require__("../../../../../src/app/scene/services/scene-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_scene_service__ = __webpack_require__("../../../../../src/app/scene/services/scene.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_world_handler_service__ = __webpack_require__("../../../../../src/app/scene/services/world-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_robot_handler_service__ = __webpack_require__("../../../../../src/app/scene/services/robot-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_grid_handler_service__ = __webpack_require__("../../../../../src/app/scene/services/grid-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_response_handler_service__ = __webpack_require__("../../../../../src/app/scene/services/response-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_connection_status_service__ = __webpack_require__("../../../../../src/app/scene/services/connection-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_camera_service__ = __webpack_require__("../../../../../src/app/scene/services/camera.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var SceneModule = (function () {
    function SceneModule() {
    }
    SceneModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__scene_component__["a" /* SceneComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_web_socket_service__["a" /* WebSocketService */],
                __WEBPACK_IMPORTED_MODULE_4__services_scene_configuration_service__["a" /* SceneConfigurationService */],
                __WEBPACK_IMPORTED_MODULE_5__services_scene_service__["a" /* SceneService */],
                __WEBPACK_IMPORTED_MODULE_8__services_grid_handler_service__["a" /* GridHandlerService */],
                __WEBPACK_IMPORTED_MODULE_7__services_robot_handler_service__["a" /* RobotHandlerService */],
                __WEBPACK_IMPORTED_MODULE_6__services_world_handler_service__["a" /* WorldHandlerService */],
                __WEBPACK_IMPORTED_MODULE_9__services_response_handler_service__["a" /* ResponseHandlerService */],
                __WEBPACK_IMPORTED_MODULE_10__services_connection_status_service__["a" /* ConnectionStatusService */],
                __WEBPACK_IMPORTED_MODULE_11__services_camera_service__["a" /* CameraService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__scene_component__["a" /* SceneComponent */]
            ]
        })
    ], SceneModule);
    return SceneModule;
}());

//# sourceMappingURL=scene.module.js.map

/***/ }),

/***/ "../../../../../src/app/scene/services/camera.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_config__ = __webpack_require__("../../../../../src/app/log-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CameraService = (function () {
    function CameraService() {
        this.logger = __WEBPACK_IMPORTED_MODULE_2__log_config__["a" /* logFactory */].getLogger(this.constructor.name);
        this.fieldOfView = 60;
        this.nearClippingPane = 1;
        this.farClippingPane = 2000;
        this.logger.debug("constructor");
    }
    CameraService.prototype.createCamera = function (aspectRatio) {
        this.logger.debug("Create camera");
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](this.fieldOfView, aspectRatio, this.nearClippingPane, this.farClippingPane);
        this.camera.up = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 1);
        this.cameraTarget = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0);
        this.camera.lookAt(this.cameraTarget);
        this.defaultPosition();
    };
    CameraService.prototype.defaultPosition = function () {
        this.logger.debug("Move camera to default position");
        // Set position
        this.camera.position.x = -50;
        this.camera.position.y = -200;
        this.camera.position.z = 200;
        this.cameraTarget.set(0, 0, 0);
        if (this.controls != undefined) {
            this.controls.update();
            // actually reset()  is enough... but will keep code above for future
            this.controls.reset();
        }
    };
    CameraService.prototype.bindControls = function (controls) {
        this.controls = controls;
    };
    CameraService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CameraService);
    return CameraService;
}());

//# sourceMappingURL=camera.service.js.map

/***/ }),

/***/ "../../../../../src/app/scene/services/connection-status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionStatusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConnectionStatusService = (function () {
    function ConnectionStatusService() {
        this.connected = false;
    }
    ConnectionStatusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConnectionStatusService);
    return ConnectionStatusService;
}());

//# sourceMappingURL=connection-status.service.js.map

/***/ }),

/***/ "../../../../../src/app/scene/services/grid-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_config__ = __webpack_require__("../../../../../src/app/log-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_akibot_common_dist__ = __webpack_require__("../../../../akibot-common/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_akibot_common_dist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_akibot_common_dist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__world_handler_service__ = __webpack_require__("../../../../../src/app/scene/services/world-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__web_socket_service__ = __webpack_require__("../../../../../src/app/scene/services/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scene_service__ = __webpack_require__("../../../../../src/app/scene/services/scene.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GridHandlerService = (function () {
    function GridHandlerService(webSocketService, worldHandlerService, sceneService) {
        this.webSocketService = webSocketService;
        this.worldHandlerService = worldHandlerService;
        this.sceneService = sceneService;
        this.logger = __WEBPACK_IMPORTED_MODULE_1__log_config__["a" /* logFactory */].getLogger(this.constructor.name);
        // TODO: Put into config
        this.globalScale = 0.1;
        this.gap = 0.0; // distance between cells
        this.xyzCoordinatesCount = 3;
        this.cellPointCount = 2 * 3;
        this.obstacleColor = new __WEBPACK_IMPORTED_MODULE_3_three__["Color"](200 / 255, 0 / 255, 0 / 255);
        this.emptyColor = new __WEBPACK_IMPORTED_MODULE_3_three__["Color"](0 / 255, 200 / 255, 0 / 255);
        this.unknownColor = new __WEBPACK_IMPORTED_MODULE_3_three__["Color"](250 / 255, 250 / 255, 250 / 255);
        this.material = new __WEBPACK_IMPORTED_MODULE_3_three__["MeshBasicMaterial"]({
            side: __WEBPACK_IMPORTED_MODULE_3_three__["DoubleSide"],
            vertexColors: __WEBPACK_IMPORTED_MODULE_3_three__["VertexColors"],
            transparent: true,
            opacity: 0.5,
            shading: __WEBPACK_IMPORTED_MODULE_3_three__["FlatShading"]
        });
        this.logger.debug("constructor");
        this.onGridUpdateEvent = this.onGridUpdateEvent.bind(this);
        this.webSocketService.events.on(__WEBPACK_IMPORTED_MODULE_2_akibot_common_dist__["GridUpdateEvent"].name, this.onGridUpdateEvent);
    }
    GridHandlerService.prototype.onGridUpdateEvent = function (gridUpdateEvent) {
        this.logger.trace("onGridUpdateEvent");
        if (this.worldHandlerService.worldNode != undefined)
            this.updateMatrix(gridUpdateEvent.data);
    };
    GridHandlerService.prototype.addGrid = function (gridNode) {
        this.logger.trace("addGrid");
        this.gridNode = gridNode;
        this.addLocationAreaGrid(gridNode.gridConfiguration);
        if (this.gridNode.data != undefined) {
            this.addMatrix(gridNode.data);
        }
    };
    GridHandlerService.prototype.addLocationAreaGrid = function (gridConfiguration) {
        this.logger.trace("addLocationAreaGrid");
        this.gridConfiguration = gridConfiguration;
        this.gridObject3d = new __WEBPACK_IMPORTED_MODULE_3_three__["Object3D"];
        this.gridObject3d.scale.set(this.globalScale, this.globalScale, this.globalScale);
        this.worldHandlerService.worldObject3d.add(this.gridObject3d);
    };
    GridHandlerService.prototype.updateMatrix = function (newData) {
        this.logger.trace("Removing grid data");
        //this.gridObject3d.remove(this.gridObject3d.children[0]);
        //this.addMatrix(data);
        var color;
        var ic = 0;
        var totalUpdates = 0;
        for (var x = 0; x < newData.length; x++) {
            for (var y = 0; y < newData[x].length; y++) {
                if (newData[x][y] != this.gridNode.data[x][y]) {
                    if (newData[x][y] > 0) {
                        color = this.obstacleColor;
                    }
                    else if (newData[x][y] == 0) {
                        color = this.emptyColor;
                    }
                    else {
                        color = this.unknownColor;
                    }
                    for (var d = 0; d < this.cellPointCount; d++) {
                        this.matrixColors[ic + 0] = color.r;
                        this.matrixColors[ic + 1] = color.g;
                        this.matrixColors[ic + 2] = color.b;
                        ic += 3;
                    }
                    totalUpdates++;
                }
                else {
                    ic += this.cellPointCount * 3;
                }
            }
        }
        this.gridNode.data = newData;
        this.dataGeometry.attributes['color'].needsUpdate = true;
        this.sceneService.render();
        this.logger.trace("totalUpdates=" + totalUpdates);
    };
    GridHandlerService.prototype.addMatrix = function (data) {
        this.logger.trace("addMatrix");
        var cellsCount = this.gridNode.data.length * data[0].length;
        this.dataGeometry = new __WEBPACK_IMPORTED_MODULE_3_three__["BufferGeometry"]();
        var arraySize = cellsCount * this.xyzCoordinatesCount * this.cellPointCount;
        var matrixPositions = new Float32Array(arraySize);
        this.matrixColors = new Float32Array(arraySize);
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
                    this.matrixColors[ic++] = color.r;
                    this.matrixColors[ic++] = color.g;
                    this.matrixColors[ic++] = color.b;
                }
            }
        }
        this.logger.trace("Setting attributes");
        this.dataGeometry.addAttribute('position', new __WEBPACK_IMPORTED_MODULE_3_three__["BufferAttribute"](matrixPositions, 3));
        this.dataGeometry.addAttribute('color', new __WEBPACK_IMPORTED_MODULE_3_three__["BufferAttribute"](this.matrixColors, 3));
        // Creating Mesh and adding to Scene:
        var dataGroup = new __WEBPACK_IMPORTED_MODULE_3_three__["Mesh"](this.dataGeometry, this.material);
        this.dataGeometry.computeBoundingBox();
        this.dataGeometry.computeVertexNormals();
        var offsetVector = this.gridConfiguration.offsetVector;
        dataGroup.position.set(offsetVector.x, offsetVector.y, offsetVector.z);
        this.logger.trace("Adding to scene");
        this.gridObject3d.add(dataGroup);
        this.sceneService.render();
    };
    GridHandlerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__web_socket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__web_socket_service__["a" /* WebSocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__world_handler_service__["a" /* WorldHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__world_handler_service__["a" /* WorldHandlerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__scene_service__["a" /* SceneService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__scene_service__["a" /* SceneService */]) === "function" && _c || Object])
    ], GridHandlerService);
    return GridHandlerService;
    var _a, _b, _c;
}());

//# sourceMappingURL=grid-handler.service.js.map

/***/ }),

/***/ "../../../../../src/app/scene/services/response-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_config__ = __webpack_require__("../../../../../src/app/log-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scene_service__ = __webpack_require__("../../../../../src/app/scene/services/scene.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__web_socket_service__ = __webpack_require__("../../../../../src/app/scene/services/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_handler_service__ = __webpack_require__("../../../../../src/app/scene/services/grid-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__robot_handler_service__ = __webpack_require__("../../../../../src/app/scene/services/robot-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_akibot_common_dist__ = __webpack_require__("../../../../akibot-common/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_akibot_common_dist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_akibot_common_dist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__world_handler_service__ = __webpack_require__("../../../../../src/app/scene/services/world-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResponseHandlerService = (function () {
    function ResponseHandlerService(sceneService, webSocketService, gridHandlerService, robotHandlerService, worldHandlerService) {
        this.sceneService = sceneService;
        this.webSocketService = webSocketService;
        this.gridHandlerService = gridHandlerService;
        this.robotHandlerService = robotHandlerService;
        this.worldHandlerService = worldHandlerService;
        this.logger = __WEBPACK_IMPORTED_MODULE_1__log_config__["a" /* logFactory */].getLogger(this.constructor.name);
        this.onOpen = this.onOpen.bind(this);
        this.onError = this.onError.bind(this);
        this.onWorldContentResponse = this.onWorldContentResponse.bind(this);
        this.onGyroscopeCalibrationResponse = this.onGyroscopeCalibrationResponse.bind(this);
        this.webSocketService.events.addListener("onopen", this.onOpen);
        this.webSocketService.events.addListener("onerror", this.onError);
        this.webSocketService.events.on(__WEBPACK_IMPORTED_MODULE_6_akibot_common_dist__["WorldContentResponse"].name, this.onWorldContentResponse);
        this.webSocketService.events.on(__WEBPACK_IMPORTED_MODULE_6_akibot_common_dist__["GyroscopeCalibrationResponse"].name, this.onGyroscopeCalibrationResponse);
    }
    ResponseHandlerService.prototype.onError = function (event) {
        this.logger.error("onError: " + event);
    };
    ResponseHandlerService.prototype.onOpen = function (event) {
        this.logger.debug("onOpen: Requesting world content");
        this.worldHandlerService.requestWorldContent();
    };
    ResponseHandlerService.prototype.onWorldContentResponse = function (worldContentResponse) {
        this.logger.debug("onWorldContentResponse");
        //if (this.worldHandlerService.worldNode != undefined) {
        this.worldHandlerService.addWorldNode(worldContentResponse.worldNode);
        this.gridHandlerService.addGrid(worldContentResponse.worldNode.gridNode);
        this.robotHandlerService.addRobot(worldContentResponse.worldNode.robotNode);
        this.sceneService.render();
    };
    ResponseHandlerService.prototype.onGyroscopeCalibrationResponse = function (gyroscopeCalibrationResponse) {
        this.logger.debug("onGyroscopeCalibrationResponse: " + JSON.stringify(gyroscopeCalibrationResponse));
    };
    ResponseHandlerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__scene_service__["a" /* SceneService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__scene_service__["a" /* SceneService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__web_socket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__web_socket_service__["a" /* WebSocketService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__grid_handler_service__["a" /* GridHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__grid_handler_service__["a" /* GridHandlerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__robot_handler_service__["a" /* RobotHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__robot_handler_service__["a" /* RobotHandlerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__world_handler_service__["a" /* WorldHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__world_handler_service__["a" /* WorldHandlerService */]) === "function" && _e || Object])
    ], ResponseHandlerService);
    return ResponseHandlerService;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=response-handler.service.js.map

/***/ }),

/***/ "../../../../../src/app/scene/services/robot-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RobotHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_config__ = __webpack_require__("../../../../../src/app/log-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_akibot_common_dist__ = __webpack_require__("../../../../akibot-common/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_akibot_common_dist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_akibot_common_dist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_examples_js_loaders_ColladaLoader__ = __webpack_require__("../../../../three/examples/js/loaders/ColladaLoader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_examples_js_loaders_ColladaLoader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_three_examples_js_loaders_ColladaLoader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__world_handler_service__ = __webpack_require__("../../../../../src/app/scene/services/world-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_transformation_utils__ = __webpack_require__("../../../../../src/app/scene/services/utils/transformation-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__web_socket_service__ = __webpack_require__("../../../../../src/app/scene/services/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scene_service__ = __webpack_require__("../../../../../src/app/scene/services/scene.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RobotHandlerService = (function () {
    function RobotHandlerService(worldHandlerService, webSocketService, sceneService) {
        this.worldHandlerService = worldHandlerService;
        this.webSocketService = webSocketService;
        this.sceneService = sceneService;
        this.logger = __WEBPACK_IMPORTED_MODULE_1__log_config__["a" /* logFactory */].getLogger(this.constructor.name);
        this.logger.debug("constructor");
        this.onModelLoaded = this.onModelLoaded.bind(this);
        this.onRobotTransformationEvent = this.onRobotTransformationEvent.bind(this);
        this.webSocketService.events.on(__WEBPACK_IMPORTED_MODULE_2_akibot_common_dist__["RobotTransformationEvent"].name, this.onRobotTransformationEvent);
    }
    RobotHandlerService.prototype.addRobot = function (robotNode) {
        this.logger.trace("addRobot");
        this.robotObject3d = new __WEBPACK_IMPORTED_MODULE_3_three__["Object3D"]();
        if (this.loader == undefined) {
            this.loader = new __WEBPACK_IMPORTED_MODULE_3_three__["ColladaLoader"]();
        }
        this.loader.load(robotNode.modelFileName, this.onModelLoaded);
    };
    RobotHandlerService.prototype.onModelLoaded = function (model) {
        this.logger.trace("Adding loaded model");
        this.robotObject3d.add(model.scene);
        //this.robotObject3d.rotateX(common.AngleUtils.degreesToRadians(-90));        
        //this.robotObject3d.translateZ(0);
        this.robotObject3d.updateMatrix();
        this.worldHandlerService.worldObject3d.add(this.robotObject3d);
        this.sceneService.render();
    };
    RobotHandlerService.prototype.onRobotTransformationEvent = function (robotTransformationEvent) {
        this.logger.trace("onRobotTransformationEvent");
        if (this.robotObject3d != undefined && robotTransformationEvent != undefined) {
            __WEBPACK_IMPORTED_MODULE_6__utils_transformation_utils__["a" /* TransformationUtils */].applyTransformation(this.robotObject3d, robotTransformationEvent.transformation);
            this.sceneService.render();
        }
    };
    RobotHandlerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__world_handler_service__["a" /* WorldHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__world_handler_service__["a" /* WorldHandlerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__web_socket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__web_socket_service__["a" /* WebSocketService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__scene_service__["a" /* SceneService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__scene_service__["a" /* SceneService */]) === "function" && _c || Object])
    ], RobotHandlerService);
    return RobotHandlerService;
    var _a, _b, _c;
}());

//# sourceMappingURL=robot-handler.service.js.map

/***/ }),

/***/ "../../../../../src/app/scene/services/scene-configuration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_service__ = __webpack_require__("../../../../../src/app/scene/services/scene.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SceneConfigurationService = (function () {
    function SceneConfigurationService(sceneService) {
        this.sceneService = sceneService;
        // TODO: make it nicer (native->instance)
        this._gridHelperVisible = sceneService.gridHelper.visible;
        this._axisHelperVisible = sceneService.axisHelper.visible;
    }
    Object.defineProperty(SceneConfigurationService.prototype, "gridHelperVisible", {
        get: function () {
            return this._gridHelperVisible;
        },
        set: function (value) {
            this._gridHelperVisible = value;
            this.sceneService.gridHelper.visible = this._gridHelperVisible;
            this.sceneService.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SceneConfigurationService.prototype, "axisHelperVisible", {
        get: function () {
            return this._axisHelperVisible;
        },
        set: function (value) {
            this._axisHelperVisible = value;
            this.sceneService.axisHelper.visible = this._axisHelperVisible;
            this.sceneService.render();
        },
        enumerable: true,
        configurable: true
    });
    SceneConfigurationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__scene_service__["a" /* SceneService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__scene_service__["a" /* SceneService */]) === "function" && _a || Object])
    ], SceneConfigurationService);
    return SceneConfigurationService;
    var _a;
}());

//# sourceMappingURL=scene-configuration.service.js.map

/***/ }),

/***/ "../../../../../src/app/scene/services/scene.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("../../../../../src/app/scene/helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_config__ = __webpack_require__("../../../../../src/app/log-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__camera_service__ = __webpack_require__("../../../../../src/app/scene/services/camera.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SceneService = (function () {
    function SceneService(cameraService) {
        this.cameraService = cameraService;
        this.logger = __WEBPACK_IMPORTED_MODULE_3__log_config__["a" /* logFactory */].getLogger(this.constructor.name);
        this.logger.debug("constructor");
        this.render = this.render.bind(this);
    }
    SceneService.prototype.createScene = function () {
        this.logger.debug("createScene");
        this.scene = new __WEBPACK_IMPORTED_MODULE_2_three__["Scene"]();
        this.gridHelper = new __WEBPACK_IMPORTED_MODULE_1__helpers__["b" /* GridHelperObject */](300, 10);
        this.gridHelper.visible = false;
        this.scene.add(this.gridHelper);
        this.axisHelper = new __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* AxisHelperObject */](800);
        this.axisHelper.visible = true;
        this.scene.add(this.axisHelper);
    };
    SceneService.prototype.createLight = function () {
        this.logger.debug("createLight");
        var light = new __WEBPACK_IMPORTED_MODULE_2_three__["PointLight"](0xffffff, 1, 1000);
        light.position.set(0, 0, 100);
        this.scene.add(light);
        var light = new __WEBPACK_IMPORTED_MODULE_2_three__["PointLight"](0xffffff, 1, 1000);
        light.position.set(0, 0, -100);
        this.scene.add(light);
    };
    SceneService.prototype.createControls = function () {
        this.logger.debug("Create controls");
        this.controls = new __WEBPACK_IMPORTED_MODULE_2_three__["OrbitControls"](this.cameraService.camera);
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.addEventListener('change', this.render);
        this.cameraService.bindControls(this.controls);
    };
    SceneService.prototype.createRenderer = function () {
        this.logger.debug("Create and start renderer");
        this.renderer = new __WEBPACK_IMPORTED_MODULE_2_three__["WebGLRenderer"]({
            canvas: this.sceneComponent.canvas,
            antialias: true
        });
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(this.sceneComponent.canvas.clientWidth, this.sceneComponent.canvas.clientHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = __WEBPACK_IMPORTED_MODULE_2_three__["PCFSoftShadowMap"];
        this.renderer.setClearColor(0xffffff, 1);
        this.renderer.autoClear = true;
        // TODO: refactor
        var x = this;
        (function render() {
            x.render();
        }());
    };
    SceneService.prototype.init = function (sceneComponent) {
        this.sceneComponent = sceneComponent;
        this.createScene();
        this.createLight();
        this.cameraService.createCamera(this.sceneComponent.getAspectRatio());
        this.createControls();
        this.createRenderer();
    };
    SceneService.prototype.render = function () {
        this.renderer.render(this.scene, this.cameraService.camera);
    };
    SceneService.prototype.onResize = function () {
        this.cameraService.camera.aspect = this.sceneComponent.getAspectRatio();
        this.cameraService.camera.updateProjectionMatrix();
        this.renderer.setSize(this.sceneComponent.canvas.clientWidth, this.sceneComponent.canvas.clientHeight);
        this.render();
    };
    SceneService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__camera_service__["a" /* CameraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__camera_service__["a" /* CameraService */]) === "function" && _a || Object])
    ], SceneService);
    return SceneService;
    var _a;
}());

//# sourceMappingURL=scene.service.js.map

/***/ }),

/***/ "../../../../../src/app/scene/services/utils/transformation-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransformationUtils; });
var TransformationUtils;
(function (TransformationUtils) {
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
    TransformationUtils.applyTransformation = applyTransformation;
})(TransformationUtils || (TransformationUtils = {}));
//# sourceMappingURL=transformation-utils.js.map

/***/ }),

/***/ "../../../../../src/app/scene/services/web-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_akibot_common_dist__ = __webpack_require__("../../../../akibot-common/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_akibot_common_dist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_akibot_common_dist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_events__ = __webpack_require__("../../../../events/events.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_config__ = __webpack_require__("../../../../../src/app/log-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connection_status_service__ = __webpack_require__("../../../../../src/app/scene/services/connection-status.service.ts");
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
    function WebSocketService(connectionStatusService) {
        this.connectionStatusService = connectionStatusService;
        this.logger = __WEBPACK_IMPORTED_MODULE_3__log_config__["a" /* logFactory */].getLogger(this.constructor.name);
        // TODO: Mage connectionString configurable: raspberrypi/localhost
        this.connectionList = [
            "ws://localhost:3000",
            "ws://raspberrypi:3000"
        ];
        this.logger.info("constructor");
        this.events = new __WEBPACK_IMPORTED_MODULE_2_events__["EventEmitter"]();
        this.onOpen = this.onOpen.bind(this);
        this.onMessage = this.onMessage.bind(this);
        this.onError = this.onError.bind(this);
        this.onClose = this.onClose.bind(this);
        this.connect();
    }
    WebSocketService.prototype.connectNext = function () {
        this.connectIndex++;
        if (this.connectionList.length > this.connectIndex) {
            var conn = this.connectionList[this.connectIndex];
            this.logger.debug("Connecting to: " + conn);
            this.ws = new WebSocket(conn);
            this.ws.onopen = this.onOpen;
            this.ws.onmessage = this.onMessage;
            this.ws.onerror = this.onError;
            this.ws.onclose = this.onClose;
        }
        else {
            throw new Error("Failed to connect");
        }
    };
    WebSocketService.prototype.connect = function () {
        this.connectIndex = -1;
        this.connectNext();
    };
    WebSocketService.prototype.disconnect = function () {
        this.ws.close();
    };
    WebSocketService.prototype.onOpen = function (event) {
        this.logger.debug("onOpen");
        this.events.emit("onopen", event);
        this.connectionStatusService.connected = true;
    };
    WebSocketService.prototype.onClose = function (event) {
        this.logger.warn("WebSocket closed");
        this.connectionStatusService.connected = false;
    };
    WebSocketService.prototype.onError = function (event) {
        if (!this.connectionStatusService.connected) {
            this.logger.warn("Trying to reconnect to alternative server");
            this.connectNext();
        }
        else {
            this.logger.error("onError: " + JSON.stringify(event));
            this.events.emit("onerror", event);
            this.connectionStatusService.connected = false;
        }
    };
    WebSocketService.prototype.onMessage = function (msg) {
        this.logger.trace("onMessage: " + msg.data);
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__connection_status_service__["a" /* ConnectionStatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__connection_status_service__["a" /* ConnectionStatusService */]) === "function" && _a || Object])
    ], WebSocketService);
    return WebSocketService;
    var _a;
}());

//# sourceMappingURL=web-socket.service.js.map

/***/ }),

/***/ "../../../../../src/app/scene/services/world-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorldHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_config__ = __webpack_require__("../../../../../src/app/log-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_akibot_common_dist__ = __webpack_require__("../../../../akibot-common/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_akibot_common_dist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_akibot_common_dist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__web_socket_service__ = __webpack_require__("../../../../../src/app/scene/services/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scene_service__ = __webpack_require__("../../../../../src/app/scene/services/scene.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WorldHandlerService = (function () {
    function WorldHandlerService(sceneService, webSocketService) {
        this.sceneService = sceneService;
        this.webSocketService = webSocketService;
        this.logger = __WEBPACK_IMPORTED_MODULE_2__log_config__["a" /* logFactory */].getLogger(this.constructor.name);
        this.logger.info("constructor");
    }
    WorldHandlerService.prototype.requestWorldContent = function () {
        this.logger.trace("Connected to server. Requesting World Content");
        this.webSocketService.send(new __WEBPACK_IMPORTED_MODULE_3_akibot_common_dist__["WorldContentRequest"]());
    };
    WorldHandlerService.prototype.addWorldNode = function (worldNode) {
        this.logger.debug("addWorldNode");
        if (this.worldNode != undefined) {
            this.logger.debug("Cleanup schene");
            // remove world node and all childs from WebGL scene
            this.sceneService.scene.remove(this.worldObject3d);
            this.sceneService.render();
        }
        this.worldNode = worldNode;
        this.logger.trace("Creating worldNodeObject3d");
        this.worldObject3d = new __WEBPACK_IMPORTED_MODULE_1_three__["Object3D"]();
        this.sceneService.scene.add(this.worldObject3d);
    };
    WorldHandlerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__scene_service__["a" /* SceneService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__scene_service__["a" /* SceneService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__web_socket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__web_socket_service__["a" /* WebSocketService */]) === "function" && _b || Object])
    ], WorldHandlerService);
    return WorldHandlerService;
    var _a, _b;
}());

//# sourceMappingURL=world-handler.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





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