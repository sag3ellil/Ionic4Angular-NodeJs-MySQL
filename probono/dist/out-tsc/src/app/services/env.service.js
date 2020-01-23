import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var EnvService = /** @class */ (function () {
    function EnvService() {
        //API_HOST   = "http://200.196.251.212"; 
        //API_HOST = "http://200.187.30.26";
        //API_HOST = "http://177.1.213.214";
        this.API_HOST = "http://localhost";
        //API_HOST = "http://192.168.15.13";  
        this.API_URL = "/ServiceMopSite/api/Geral";
        // API_URL = "/ServiceMopSite/api/Geral";  
        this.APP_NAME = "ValParaiso";
    }
    EnvService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], EnvService);
    return EnvService;
}());
export { EnvService };
//# sourceMappingURL=env.service.js.map