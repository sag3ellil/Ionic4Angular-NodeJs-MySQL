import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenumedidasPage } from './menumedidas.page';
var routes = [
    {
        path: '',
        component: MenumedidasPage
    }
];
var MenumedidasPageModule = /** @class */ (function () {
    function MenumedidasPageModule() {
    }
    MenumedidasPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MenumedidasPage]
        })
    ], MenumedidasPageModule);
    return MenumedidasPageModule;
}());
export { MenumedidasPageModule };
//# sourceMappingURL=menumedidas.module.js.map