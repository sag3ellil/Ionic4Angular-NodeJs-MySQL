import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
var OcorrenciacivilPage = /** @class */ (function () {
    function OcorrenciacivilPage(navCtrl, alertService, env, Authorizer) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
        this.SrcPhotoAvatar = "assets/imgs/perfil.png";
        this.segs = [
            {
                id: 1,
                segmento: 'Bombeiros'
            },
            {
                id: 2,
                segmento: 'Policia Militar'
            }
        ];
    }
    OcorrenciacivilPage.prototype.ionViewWillEnter = function () {
        // Disparado quando o roteamento de componentes está prestes a se animar.    
        console.log("ionViewWillEnter");
    };
    OcorrenciacivilPage.prototype.ionViewDidEnter = function () {
        // Disparado quando o roteamento de componentes terminou de ser animado.        
        console.log("ionViewDidEnter");
        //this.setValueFieldsForm();
        this.PopulaSeguimento(0);
    };
    OcorrenciacivilPage.prototype.ionViewWillLeave = function () {
        // Disparado quando o roteamento de componentes está prestes a ser animado.    
        console.log("ionViewWillLeave");
    };
    OcorrenciacivilPage.prototype.ionViewDidLeave = function () {
        // Disparado quando o roteamento de componentes terminou de ser animado.    
        console.log("ionViewDidLeave");
    };
    OcorrenciacivilPage.prototype.setValueFieldsForm = function () {
        this.Codigo = sessionStorage.getItem("SessionCodigoUsuario");
        this.Nome = "Gilson";
        this.SobreNome = "DeLima";
        this.Email = "gilson.delima@gmail.com";
        this.Telefone = "61-98204-9030";
        this.Celular = "61-98204-9030";
    };
    OcorrenciacivilPage.prototype.PopulaSeguimento = function (item) {
        var _this = this;
        console.log(item);
        console.log(sessionStorage.getItem('SessionCodigoUsuario'));
        console.log(sessionStorage.getItem("SessionHashkey"));
        var paramsSeguimentos = {
            'usuario': sessionStorage.getItem('SessionCodigoUsuario'),
            'todos': '',
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        this.Authorizer.QueryStoreProc('ConsultaMunicipios', '', paramsSeguimentos).then(function (res) {
            var resultado = res;
            console.log("resultado");
            console.log(resultado);
            try {
                if (resultado.length == 0) {
                    //nenhum modulo encontrado
                    _this.alertService.presentAlert({ pTitle: 'MOP', pSubtitle: 'Menu', pMessage: 'Nenhum segmento encontrado!' });
                }
                else {
                    //mostro os módulos
                    console.log(resultado);
                    _this.segs = resultado;
                    _this.GruposValues = resultado;
                    //console.log(JSON.stringify(this.SeguimentoValues));
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: 'MOP', pSubtitle: 'Menu', pMessage: 'Nenhum segmento!' });
            }
        });
    };
    OcorrenciacivilPage.prototype.PopulaGrupos = function (event) {
        var _this = this;
        console.log(event.detail.value);
        //this.segs = this.segs.filter((item) => { return item.id == event })[0].segs;
        var paramsGrupo = {
            'usuario': sessionStorage.getItem('SessionCodigoUsuario'),
            'segmento': '',
            'nivel': '',
            'grupo': event.detail.value,
            'todos': '',
            'nome': '',
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        this.Authorizer.QueryStoreProc('ConsultaGrupos', '', paramsGrupo).then(function (res) {
            var resultado = res;
            try {
                if (resultado.length == 0) {
                    //nenhum modulo encontrado
                    _this.alertService.presentAlert({ pTitle: 'MOP', pSubtitle: 'Menu', pMessage: 'Nenhum segmento encontrado!' });
                }
                else {
                    //mostro os módulos
                    console.log(resultado);
                    //this.segs = resultado;
                    //this.SeguimentoValues = resultado;          
                    //console.log(JSON.stringify(this.SeguimentoValues));
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: 'MOP', pSubtitle: 'Menu', pMessage: 'Nenhum segmento!' });
            }
        });
    };
    OcorrenciacivilPage.prototype.ngOnInit = function () {
        // this.DataSet = JSON.parse(sessionStorage.SessionUser);      
        //this.setValue(); 
    };
    OcorrenciacivilPage.prototype.pesquisar = function (form) {
        //this.alertService.showLoader('Carregando... aguarde!!!');
        //this.alertService.presentAlert({pTitle:'e-Cupom33',pSubtitle:'Teste',pMessage:'TESTANDO DIALOG'} );
        //this.alertService.presentAlertConfirm({pTitleConfirm: 'e-Cupom33', pMessage:'Confirmar procedimento?',pTextBtnCancel:'Não',pTextOkay:'Sim' });
        //this.alertService.presentToast("Mensagem Toast: Logando...");
        //let pwd : any = Md5.hashStr(form.value.password);
        var _this = this;
        this.Authorizer.Login(form).then(function (res) {
            //console.log("Resultado Json:", res);
            var resultado = res[0];
            if (resultado.success == true) {
                //this.env.UserSession.codigo = resultado.codigo;    
                //this.env.UserSession.nome = resultado.nome;    
                //this.env.UserSession.perfil = resultado.perfil;    
                _this.alertService.showLoader(resultado.message);
                _this.navCtrl.navigateRoot('/menu/options');
            }
        });
    };
    OcorrenciacivilPage.prototype.UsuarioUpdate = function (form) {
        //form.value.senha = Md5.hashStr(form.value.senha);
        var _this = this;
        this.Authorizer.Login(form).then(function (res) {
            //console.log("Resultado Json:", res);
            var resultado = res[0];
            if (resultado.success == true) {
                //this.env.UserSession.codigo = resultado.codigo;    
                //this.env.UserSession.nome = resultado.nome;    
                //this.env.UserSession.perfil = resultado.perfil;    
                _this.alertService.showLoader(resultado.message);
                _this.navCtrl.navigateRoot('/menu/options');
            }
        });
    };
    OcorrenciacivilPage = tslib_1.__decorate([
        Component({
            selector: 'app-ocorrenciacivil',
            templateUrl: './ocorrenciacivil.page.html',
            styleUrls: ['./ocorrenciacivil.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            AlertService,
            EnvService,
            AuthService])
    ], OcorrenciacivilPage);
    return OcorrenciacivilPage;
}());
export { OcorrenciacivilPage };
//# sourceMappingURL=ocorrenciacivil.page.js.map