import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this._APP = {
            "VersionEngineAPI": "1.1.5",
            "Version": "1.0.0",
            "HostDevAPI": "http://192.168.1.3:8081",
            "HostDevLevelAPI": "http://192.168.15.10:8081",
            "HostHomoAPI": "http://200.196.251.212:8081",
            "HostProdAPI": "http://200.196.251.212:8081"
        };
        this.sleep = function (time) {
            return new Promise(function (resolve) { return setTimeout(resolve, time); });
        };
        this.initializeApp();
        //this.showLoader();
    }
    Object.defineProperty(AppComponent.prototype, "APP", {
        get: function () {
            return this._APP;
        },
        set: function (value) {
            this._APP = value;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent.prototype.delay = function (ms) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); }).then(function () {
                            return console.log("fired");
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map