import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { AuthService } from 'src/app/services/auth.service';
var principalPage = /** @class */ (function () {
    function principalPage(navCtrl, alertService, Authorizer, env) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.Authorizer = Authorizer;
        this.env = env;
        this.AppName = 'AMCZA';
        this.AppVersion = '0.0.1';
        this.AppGreetings = 'Bem-Vindos ao AMCZA!';
    }
    principalPage.prototype.itemSelected = function (item) {
        //if(item.name ==='Produtos'){
        this.alertService.presentToast("Acessando...: " + item.name);
        this.navCtrl.navigateRoot(item.route);
        //}
    };
    principalPage.prototype.ngOnInit = function () {
        if (!sessionStorage.SessionHashkey) {
            this.navCtrl.navigateRoot('/login');
        }
        this.items = [
            {
                id: 1,
                name: "Usuários",
                icon: "assets/imgs/fa-user.jpg",
                details: "Procure aqui o que você precisa encontrar.",
                route: "/usuario"
            }
        ];
        this.items.push({
            id: 2,
            name: "Localização",
            icon: "assets/imgs/fa-street-view.jpg",
            details: "Consulte os preços de forma rápido usando a camera do seu celular.",
            route: "/localizacao"
        });
        /* this.items.push( {
           id : 4,
           name : "Promoções",
           icon : "assets/imgs/Promocoes.png",
           details: "Encontre todas as promoções e aproveite.",
           route :"/login"
         });*/
        this.items.push({
            id: 5,
            name: "Consulta Consolidada",
            icon: "assets/imgs/fa-search-minus.jpg",
            details: "Produtos marcados como favoritos.",
            route: "/consultaconsolidada"
        });
        this.items.push({
            id: 6,
            name: "Consulta Usuário",
            icon: "assets/imgs/fa-file-text.jpg",
            details: "Tudo que você colocou no carrinho, salvou ou comprou antes.",
            route: "/consultausuario"
        });
        this.items.push({
            id: 6,
            name: "Consulta Infrações",
            icon: "assets/imgs/fa-file-text-o.jpg",
            details: "Atendimento no Caixa, Expedição ou OnLine.",
            route: "/consultainfracoes"
        });
        var dataMenu = {
            'usuario': sessionStorage.getItem('SessionCodigoUsuario'),
            'menu': '0',
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        /* this.Authorizer.QueryStoreProc('ConsultaMenu', dataMenu).then( res => {
           let resultado: any = res;
           try{
             if(resultado.length==0){
               //nenhum modulo encontrado
               this.alertService.presentAlert({pTitle:'MOP',pSubtitle:'Menu',pMessage:'Nenhum módulo encontrado!'} );
             }else{
               //mostro os módulos
               this.items = resultado;
             }
           }catch(err){
             this.alertService.presentAlert({pTitle:'MOP',pSubtitle:'Menu',pMessage:'Nenhum módulo encontrado!'} );
           }
         });  */
    };
    principalPage = tslib_1.__decorate([
        Component({
            selector: 'app-principal',
            templateUrl: './principal.page.html',
            styleUrls: ['./principal.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            AlertService,
            AuthService,
            EnvService])
    ], principalPage);
    return principalPage;
}());
export { principalPage };
//# sourceMappingURL=principal.page.js.map