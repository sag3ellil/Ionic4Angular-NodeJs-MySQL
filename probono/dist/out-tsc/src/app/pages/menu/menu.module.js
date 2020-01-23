import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';
var routes = [
    {
        path: '',
        component: MenuPage,
        children: [
            {
                path: 'options',
                loadChildren: '../menuoptions/menuoptions.module#OptionsPageModule'
            },
            {
                path: 'minhaconta',
                loadChildren: '../minhaconta/minhaconta.module#MinhaContaPageModule'
            },
            {
                path: 'second/details',
                loadChildren: '../details/details.module#DetailsPageModule'
            },
            {
                path: 'consultasgeo',
                loadChildren: '../consultasgeo/consultasgeo.module#ConsultasgeoPageModule'
            },
            {
                path: 'ocorrenciacivil',
                loadChildren: '../ocorrenciacivil/ocorrenciacivil.module#OcorrenciacivilPageModule'
            }
        ]
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MenuPage]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());
export { MenuPageModule };
//# sourceMappingURL=menu.module.js.map