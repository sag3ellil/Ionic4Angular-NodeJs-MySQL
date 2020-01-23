import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuvistoriasPage } from './menuvistorias.page';
var routes = [
    {
        path: '',
        component: MenuvistoriasPage
    }
];
var MenuvistoriasPageModule = /** @class */ (function () {
    function MenuvistoriasPageModule() {
    }
    MenuvistoriasPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MenuvistoriasPage]
        })
    ], MenuvistoriasPageModule);
    return MenuvistoriasPageModule;
}());
export { MenuvistoriasPageModule };
//# sourceMappingURL=menuvistorias.module.js.map