import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConsultainfracoesPage } from './consultainfracoes.page';
var routes = [
    {
        path: '',
        component: ConsultainfracoesPage
    }
];
var ConsultainfracoesPageModule = /** @class */ (function () {
    function ConsultainfracoesPageModule() {
    }
    ConsultainfracoesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ConsultainfracoesPage]
        })
    ], ConsultainfracoesPageModule);
    return ConsultainfracoesPageModule;
}());
export { ConsultainfracoesPageModule };
//# sourceMappingURL=consultainfracoes.module.js.map