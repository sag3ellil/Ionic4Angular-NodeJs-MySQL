import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { Md5 } from 'ts-md5/dist/md5';
import { ViewChild, ElementRef, Renderer } from '@angular/core';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(renderer, modalController, Authorizer, env, navCtrl, alertService) {
        this.renderer = renderer;
        this.modalController = modalController;
        this.Authorizer = Authorizer;
        this.env = env;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.validations = {
            'nome': [
                { messageID: 100, message: 'Nome do usuário requerido.' },
                { messageID: 101, message: 'Sobrenome do usuário requerido.' }
            ]
        };
    }
    RegisterPage.prototype.ngAfterViewInit = function () {
        // this.firstNameElement.nativeElement.focus();
    };
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.LoginMain = function () {
        this.navCtrl.navigateRoot('login');
    };
    RegisterPage.prototype.Register = function (form) {
        var _this = this;
        //this.alertService.showLoader('Carregando... aguarde!!!');
        //this.alertService.presentAlert({pTitle:'e-Cupom33',pSubtitle:'Teste',pMessage:'TESTANDO DIALOG'} );
        //this.alertService.presentAlertConfirm({pTitleConfirm: 'e-Cupom33', pMessage:'Confirmar procedimento?',pTextBtnCancel:'Não',pTextOkay:'Sim' });
        //this.alertService.presentToast("Mensagem Toast: Logando...");  
        form.value.password = Md5.hashStr(form.value.password);
        // this.Authorizer.Register(form, "spCadastroUsuarioSistema").then( res => {
        this.Authorizer.Register(form).then(function (res) {
            //console.log("Resultado Json:", res);
            var resultado = res[0];
            if (resultado.success == true) {
                _this.navCtrl.navigateRoot('/login');
            }
            ;
            //this.alertService.showLoader(resultado.message);
            //this.alertService.presentAlert({pTitle:'ATENÇÃO',pSubtitle:'Criação de Conta',pMessage:resultado.message} );
            if (resultado.messageID == 100) {
                //this.firstNameElement.nativeElement.focus();
                //form.controls.nome.focus();
            }
        });
    };
    tslib_1.__decorate([
        ViewChild('fnome'),
        tslib_1.__metadata("design:type", ElementRef)
    ], RegisterPage.prototype, "firstNameElement", void 0);
    tslib_1.__decorate([
        ViewChild('form'),
        tslib_1.__metadata("design:type", Object)
    ], RegisterPage.prototype, "form", void 0);
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer,
            ModalController,
            AuthService,
            EnvService,
            NavController,
            AlertService])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map