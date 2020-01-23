import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OcorrenciacivilPage } from './ocorrenciacivil.page';
var routes = [
    {
        path: '',
        component: OcorrenciacivilPage
    }
];
var OcorrenciacivilPageModule = /** @class */ (function () {
    function OcorrenciacivilPageModule() {
    }
    OcorrenciacivilPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [OcorrenciacivilPage]
        })
    ], OcorrenciacivilPageModule);
    return OcorrenciacivilPageModule;
}());
export { OcorrenciacivilPageModule };
//# sourceMappingURL=ocorrenciacivil.module.js.map