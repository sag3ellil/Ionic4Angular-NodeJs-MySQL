import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuconsultasgeralPage } from './menuconsultasgeral.page';
var routes = [
    {
        path: '',
        component: MenuconsultasgeralPage
    }
];
var MenuconsultasgeralPageModule = /** @class */ (function () {
    function MenuconsultasgeralPageModule() {
    }
    MenuconsultasgeralPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MenuconsultasgeralPage]
        })
    ], MenuconsultasgeralPageModule);
    return MenuconsultasgeralPageModule;
}());
export { MenuconsultasgeralPageModule };
//# sourceMappingURL=menuconsultasgeral.module.js.map