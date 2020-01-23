import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConsultaconsolidadaPage } from './consultaconsolidada.page';
var routes = [
    {
        path: '',
        component: ConsultaconsolidadaPage
    }
];
var ConsultaconsolidadaPageModule = /** @class */ (function () {
    function ConsultaconsolidadaPageModule() {
    }
    ConsultaconsolidadaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ConsultaconsolidadaPage]
        })
    ], ConsultaconsolidadaPageModule);
    return ConsultaconsolidadaPageModule;
}());
export { ConsultaconsolidadaPageModule };
//# sourceMappingURL=consultaconsolidada.module.js.map