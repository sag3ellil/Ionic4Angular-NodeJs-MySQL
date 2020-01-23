import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenutermosPage } from './menutermos.page';
var routes = [
    {
        path: '',
        component: MenutermosPage
    }
];
var MenutermosPageModule = /** @class */ (function () {
    function MenutermosPageModule() {
    }
    MenutermosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MenutermosPage]
        })
    ], MenutermosPageModule);
    return MenutermosPageModule;
}());
export { MenutermosPageModule };
//# sourceMappingURL=menutermos.module.js.map