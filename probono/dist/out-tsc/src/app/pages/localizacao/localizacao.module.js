import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LocalizacaoPage } from './localizacao.page';
var routes = [
    {
        path: '',
        component: LocalizacaoPage
    }
];
var LocalizacaoPageModule = /** @class */ (function () {
    function LocalizacaoPageModule() {
    }
    LocalizacaoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [LocalizacaoPage]
        })
    ], LocalizacaoPageModule);
    return LocalizacaoPageModule;
}());
export { LocalizacaoPageModule };
//# sourceMappingURL=localizacao.module.js.map