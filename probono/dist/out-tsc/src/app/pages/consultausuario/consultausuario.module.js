import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConsultausuarioPage } from './consultausuario.page';
var routes = [
    {
        path: '',
        component: ConsultausuarioPage
    }
];
var ConsultausuarioPageModule = /** @class */ (function () {
    function ConsultausuarioPageModule() {
    }
    ConsultausuarioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ConsultausuarioPage]
        })
    ], ConsultausuarioPageModule);
    return ConsultausuarioPageModule;
}());
export { ConsultausuarioPageModule };
//# sourceMappingURL=consultausuario.module.js.map