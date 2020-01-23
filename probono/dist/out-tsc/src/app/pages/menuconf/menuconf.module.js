import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuconfPage } from './menuconf.page';
var routes = [
    {
        path: '',
        component: MenuconfPage
    }
];
var MenuconfPageModule = /** @class */ (function () {
    function MenuconfPageModule() {
    }
    MenuconfPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MenuconfPage]
        })
    ], MenuconfPageModule);
    return MenuconfPageModule;
}());
export { MenuconfPageModule };
//# sourceMappingURL=menuconf.module.js.map