import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConsultasgeoPage } from './consultasgeo.page';
var routes = [
    {
        path: '',
        component: ConsultasgeoPage
    }
];
var ConsultasgeoPageModule = /** @class */ (function () {
    function ConsultasgeoPageModule() {
    }
    ConsultasgeoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ConsultasgeoPage]
        })
    ], ConsultasgeoPageModule);
    return ConsultasgeoPageModule;
}());
export { ConsultasgeoPageModule };
//# sourceMappingURL=consultasgeo.module.js.map