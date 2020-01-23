import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EnvService } from 'src/app/services/env.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
var MenuPage = /** @class */ (function () {
    function MenuPage(router, env, Authorizer, alertService, navCtrl) {
        var _this = this;
        this.router = router;
        this.env = env;
        this.Authorizer = Authorizer;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.selectedPath = '';
        this.selecteMenu = '';
        this.pages = [
            {
                title: 'Menu Principal',
                url: '/menu/options',
                icon: 'menu'
            },
            {
                title: 'Minha Conta',
                url: '/menu/minhaconta',
                icon: 'person'
            }
        ];
        this.pages1 = [
            {
                title: 'CONSULTAS GERAL',
                url: '/menuconsultasgeral',
                icon: 'search'
            },
            {
                title: 'MEDIDAS',
                url: '/menumapa',
                icon: 'speedometer'
            },
            {
                title: 'CONFIGURACAO',
                url: '/menuconf',
                icon: 'build'
            },
            {
                title: 'MAPA',
                url: '/menumapa',
                icon: 'map'
            },
            {
                title: 'TERMOS',
                url: '/menutermos',
                icon: 'outlet'
            },
            {
                title: 'VISTORIAS',
                url: '/menuvisitorias',
                icon: 'eye'
            }
        ];
        this.router.events.subscribe(function (event) {
            if (event && event.url) {
                _this.selectedPath = event.url;
            }
        });
    }
    MenuPage.prototype.ngOnInit = function () {
        /*
        let dataMenu = {
          'usuario': sessionStorage.getItem('SessionCodigoUsuario'),
          'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        */
        /*
        let dataMenu = {
          'usuario': sessionStorage.getItem('SessionCodigoUsuario'),
          'menu': '1',
          'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        */
        /*
        this.Authorizer.QueryStoreProc('ConsultaMenu2', dataMenu).then( res => {
          let resultado: any = res;
          try{
            if(resultado.length==0){
              //nenhum modulo encontrado
              this.alertService.presentAlert({pTitle:'MOP',pSubtitle:'Menu',pMessage:'Nenhum módulo encontrado!'} );
            }else{
              //mostro os módulos
              for(var i = 0; i < resultado.length; i++) {
                this.pages.push( {
                  title: resultado[i].modulo,
                  url: '/menu/options',
                  icon : resultado[i].imagem
                });
              }
            }
          }catch(err){
            this.alertService.presentAlert({pTitle:'MOP',pSubtitle:'Menu',pMessage:'Nenhum módulo encontrado!'} );
          }
        });
        */
        /*
        this.pages.push( {
          title: 'Configurações',
          url: '/menu/options/tabs/config',
          icon : 'settings'
        });
        */
    };
    MenuPage = tslib_1.__decorate([
        Component({
            selector: 'app-menu',
            templateUrl: './menu.page.html',
            styleUrls: ['./menu.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            EnvService,
            AuthService,
            AlertService,
            NavController])
    ], MenuPage);
    return MenuPage;
}());
export { MenuPage };
//# sourceMappingURL=menu.page.js.map