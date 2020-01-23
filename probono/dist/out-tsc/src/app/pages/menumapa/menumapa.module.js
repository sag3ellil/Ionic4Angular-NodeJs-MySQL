import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenumapaPage } from './menumapa.page';
var routes = [
    {
        path: '',
        component: MenumapaPage
    }
];
var MenumapaPageModule = /** @class */ (function () {
    function MenumapaPageModule() {
    }
    MenumapaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MenumapaPage]
        })
    ], MenumapaPageModule);
    return MenumapaPageModule;
}());
export { MenumapaPageModule };
//# sourceMappingURL=menumapa.module.js.map