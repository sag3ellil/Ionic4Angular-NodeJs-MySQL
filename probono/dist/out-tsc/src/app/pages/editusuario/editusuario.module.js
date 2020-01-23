import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EditusuarioPage } from './editusuario.page';
var routes = [
    {
        path: '',
        component: EditusuarioPage
    }
];
var EditusuarioPageModule = /** @class */ (function () {
    function EditusuarioPageModule() {
    }
    EditusuarioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EditusuarioPage]
        })
    ], EditusuarioPageModule);
    return EditusuarioPageModule;
}());
export { EditusuarioPageModule };
//# sourceMappingURL=editusuario.module.js.map