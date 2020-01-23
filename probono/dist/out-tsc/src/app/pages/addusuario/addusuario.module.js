import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddusuarioPage } from './addusuario.page';
import { ReactiveFormsModule } from '@angular/forms';
var routes = [
    {
        path: '',
        component: AddusuarioPage
    }
];
var AddusuarioPageModule = /** @class */ (function () {
    function AddusuarioPageModule() {
    }
    AddusuarioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AddusuarioPage]
        })
    ], AddusuarioPageModule);
    return AddusuarioPageModule;
}());
export { AddusuarioPageModule };
//# sourceMappingURL=addusuario.module.js.map