import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { AuthService } from 'src/app/services/auth.service';
var UsuarioPage = /** @class */ (function () {
    function UsuarioPage(alertService, env, Authorizer, navCtrl) {
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
        this.navCtrl = navCtrl;
    }
    UsuarioPage.prototype.ngOnInit = function () {
        this.ConsultaUsuario();
    };
    UsuarioPage.prototype.goTo = function () {
        var resultado;
        this.alertService.showLoader("Novo usuario...");
        this.navCtrl.navigateRoot('/addusuario');
    };
    UsuarioPage.prototype.delete = function (id) {
        var _this = this;
        console.log("codigo", id);
        var params1 = id;
        document.getElementById("" + id + "").style.display = "none";
        this.Authorizer.QueryStoreProcDelete('deleteUsario', "id", params1).then(function (res) {
            var resultado = res;
            _this.alertService.presentAlert({ pTitle: 'ValParaiso', pSubtitle: 'Success', pMessage: 'usuário excluído com sucesso !' });
        });
    };
    UsuarioPage.prototype.ConsultaUsuario = function () {
        var _this = this;
        var params1 = null;
        this.Authorizer.QueryStoreProc1('ConsultaUsuarioTable', "", params1).then(function (res) {
            var resultado = res;
            try {
                console.log("resultado:", resultado);
                if (resultado.length == 0) {
                    //nenhum modulo encontrado
                    _this.alertService.presentAlert({ pTitle: 'ValParaiso', pSubtitle: 'Menu', pMessage: 'Nenhum usuario encontrado!' });
                }
                else {
                    //mostro os módulos
                    console.log(resultado);
                    _this.ss = resultado;
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: 'ValParaiso', pSubtitle: 'Menu', pMessage: 'Nenhum usuario!' });
            }
        });
    };
    UsuarioPage = tslib_1.__decorate([
        Component({
            selector: 'app-usuario',
            templateUrl: './usuario.page.html',
            styleUrls: ['./usuario.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertService,
            EnvService,
            AuthService,
            NavController])
    ], UsuarioPage);
    return UsuarioPage;
}());
export { UsuarioPage };
//# sourceMappingURL=usuario.page.js.map