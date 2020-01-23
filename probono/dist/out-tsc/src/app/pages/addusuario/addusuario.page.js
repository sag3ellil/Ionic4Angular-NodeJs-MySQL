import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
import { NavController, Events, ModalController } from '@ionic/angular';
//import { NgForm } from '@angular/forms';
//import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { FormBuilder, Validators } from '@angular/forms';
import { cpfValidator } from 'src/app/pages/addusuario/cpfValidator';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { DevicesmodalPage } from '../devicesmodal/devicesmodal.page'
var AddusuarioPage = /** @class */ (function () {
    function AddusuarioPage(navCtrl, alertService, env, Authorizer, Eventos, modalController, formBuilder
    //,
    // 
    // public submitAttempt,
    ) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
        this.Eventos = Eventos;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.segs = [
            {
                id: 0,
                segmento: 'Todos'
            }
        ];
        this.ender = "false";
        this.Per = [
            {
                id: 0,
                nome: 'Todos'
            }
        ];
        this.segmo = "";
        this.hero = [
            {
                id: 0,
                name: 'Todos'
            }
        ];
        this.slideOneForm = formBuilder.group({
            nome: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            nomeGuerra: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            cpfCont: ['', Validators.compose([Validators.maxLength(14), Validators.pattern('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}'), Validators.required, cpfValidator.validaCPF])],
            matricula: ['', Validators.compose([Validators.maxLength(7), Validators.pattern('[a-zA-Z-0-9]*'), Validators.required])],
            orgao: ['', Validators.compose([Validators.maxLength(7), Validators.pattern('[0-9]*'), Validators.required])],
            login: ['', Validators.compose([Validators.maxLength(7), Validators.pattern('[0-9]*'), Validators.required])],
            Senha: ['', Validators.compose([Validators.maxLength(16), Validators.pattern('[0-9A-Za-z.,+*_;:]*'), Validators.required])],
            ConSenha: ['', Validators.compose([Validators.maxLength(16), Validators.pattern('[0-9A-Za-z.,+*_;:]*'), Validators.required])],
            municipio: [''],
            uf: ['GO'],
            PerfilCust: [],
            activo: [],
            inactivo: [],
            Perfil: [],
            Grupo: [],
            Segmento: [],
            ConEnd: [],
            status: []
        });
    }
    AddusuarioPage.prototype.save = function () {
        this.submitAttempt = true;
        if (!this.slideOneForm.valid) {
            this.signupSlider.slideTo(0);
        }
        else {
            console.log("success!");
            console.log(this.slideOneForm.value);
        }
    };
    AddusuarioPage.prototype.encripta = function (valor) {
        var retorno;
        var stexto;
        retorno = "";
        try {
            stexto = valor.trim();
        }
        catch (err) {
            stexto = valor;
        }
        if (stexto == null)
            stexto = "";
        if (stexto == "")
            return stexto;
        while (true) {
            var letra = void 0;
            var nnumero = void 0;
            var snumero = void 0;
            if (stexto.length > 1)
                letra = stexto.substring(0, 1);
            else
                letra = stexto;
            nnumero = letra.toString().charCodeAt(0);
            nnumero += 166;
            snumero = nnumero.toString();
            if (snumero.length < 3)
                snumero = "0" + snumero;
            if (snumero.length < 3)
                snumero = "0" + snumero;
            retorno += snumero;
            if (stexto.length > 1)
                stexto = stexto.substring(1);
            else
                stexto = "";
            if (stexto == "")
                break;
        }
        return retorno;
    };
    AddusuarioPage.prototype.ngOnInit = function () {
        this.ConsultaSeg();
        this.PopulaSeguimento1();
    };
    AddusuarioPage.prototype.Add = function (form) {
        //this.alertService.showLoader('Carregando... aguarde!!!');
        //this.alertService.presentAlert({pTitle:'e-Cupom33',pSubtitle:'Teste',pMessage:'TESTANDO DIALOG'} );
        //this.alertService.presentAlertConfirm({pTitleConfirm: 'e-Cupom33', pMessage:'Confirmar procedimento?',pTextBtnCancel:'Não',pTextOkay:'Sim' });
        //this.alertService.presentToast("Mensagem Toast: Logando...");
        //let pwd : any = Md5.hashStr(form.value.password);
    };
    AddusuarioPage.prototype.PopulaSeguimento1 = function () {
        var _this = this;
        console.log();
        var params = {
            'usuario': sessionStorage.getItem('SessionCodigoUsuario'),
            'todos': '',
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        var params1 = "GO";
        this.Authorizer.QueryStoreProc2('ConsultaMunicipios', params1).then(function (res) {
            var resultado = res;
            try {
                if (resultado.length == 0) {
                    //nenhum modulo encontrado
                    _this.alertService.presentAlert({ pTitle: 'MOP', pSubtitle: 'Menu', pMessage: 'Nenhum segmento encontrado!' });
                }
                else {
                    //mostro os módulos
                    console.log(resultado);
                    _this.segs = resultado;
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: 'MOP', pSubtitle: 'Menu', pMessage: 'Nenhum segmento!' });
            }
        });
    };
    AddusuarioPage.prototype.getCPFVal = function (event) {
        console.log("cpf:", event.detail.value);
        console.log(name);
    };
    AddusuarioPage.prototype.getMunicipioVal = function (event) {
        console.log(event);
        this.municipio = event.detail.value;
        console.log("municipio ", this.municipio);
    };
    AddusuarioPage.prototype.saveEndercoVal = function (event) {
        console.log(this.ender);
        if (event.detail.checked == true) {
            console.log("Check variable", this.ender);
            this.ender = event.detail.value;
        }
        else
            this.ender = "false";
        console.log(this.ender);
    };
    AddusuarioPage.prototype.getValueCheck = function (event, a) {
        console.log(event);
        console.log(a);
        this.check = event.detail.value;
        console.log("Check variable", this.check);
    };
    AddusuarioPage.prototype.ConsultaPerfisCost = function (item) {
        var _this = this;
        console.log(item);
        this.perfil = item.detail.value;
        var params1 = null;
        this.Authorizer.QueryStoreProc1('ConsultaPerfilCust', "", params1).then(function (res) {
            var resultado = res;
            try {
                if (resultado.length == 0) {
                    //nenhum modulo encontrado
                    _this.alertService.presentAlert({ pTitle: 'ValParaiso', pSubtitle: 'Menu', pMessage: 'Nenhum Perfis encontrado!' });
                }
                else {
                    //mostro os módulos
                    console.log(resultado);
                    _this.PerC = resultado;
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: 'ValParaiso', pSubtitle: 'Menu', pMessage: 'Nenhum Perfis!' });
            }
        });
    };
    AddusuarioPage.prototype.ConsultaPerfis = function (item) {
        var _this = this;
        console.log(item);
        this.Perf = item.detail.value;
        var params1 = null;
        this.Authorizer.QueryStoreProc1('ConsultaPerfis', "", params1).then(function (res) {
            var resultado = res;
            try {
                if (resultado.length == 0) {
                    //nenhum modulo encontrado
                    _this.alertService.presentAlert({ pTitle: 'ValParaiso', pSubtitle: 'Menu', pMessage: 'Nenhum Perfis encontrado!' });
                }
                else {
                    //mostro os módulos
                    console.log(resultado);
                    _this.Per = resultado;
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: 'ValParaiso', pSubtitle: 'Menu', pMessage: 'Nenhum Perfis!' });
            }
        });
    };
    AddusuarioPage.prototype.goBack = function () {
        console.log(" goBack");
        this.navCtrl.navigateRoot('/usuario');
    };
    AddusuarioPage.prototype.ConsultaSeg = function () {
        var _this = this;
        console.log("seg value :");
        var params1 = null;
        this.Authorizer.QueryStoreProc1('ConsultaSeg', "", params1).then(function (res) {
            var resultado = res;
            try {
                if (resultado.length == 0) {
                    //nenhum modulo encontrado
                    _this.alertService.presentAlert({ pTitle: 'ValParaiso', pSubtitle: 'Menu', pMessage: 'Nenhum Perfis encontrado!' });
                }
                else {
                    //mostro os módulos
                    console.log("segmentos:", resultado);
                    _this.ss = resultado;
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: 'ValParaiso', pSubtitle: 'Menu', pMessage: 'Nenhum Perfis!' });
            }
        });
    };
    AddusuarioPage.prototype.showSelectValue = function (i, event) {
        console.log("select value ", i);
        console.log("select value ", event.detail.value);
        this.s = event.detail.value;
    };
    AddusuarioPage.prototype.ConsultaGroups = function (item) {
        var _this = this;
        console.log("segmento:", item);
        this.group = item.detail.value;
        console.log(this.groups);
        console.log(this.s);
        this.Authorizer.QueryStoreProc1('ConsultaGroups', "seg", this.s).then(function (res) {
            var resultado = res;
            console.log("resultado", resultado);
            try {
                if (resultado.length == 0) {
                    //nenhum modulo encontrado
                    _this.alertService.presentAlert({ pTitle: 'ValParaiso', pSubtitle: 'Menu', pMessage: 'Nenhum Grupo encontrado!' });
                }
                else {
                    //mostro os módulos
                    console.log(resultado);
                    _this.groups = resultado;
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: 'ValParaiso', pSubtitle: 'Menu', pMessage: 'Nenhum Grupo!' });
            }
        });
    };
    AddusuarioPage.prototype.AddSubmit = function (form) {
        var _this = this;
        //this.alertService.showLoader('Carregando... aguarde!!!');
        //this.alertService.presentAlert({pTitle:'e-Cupom33',pSubtitle:'Teste',pMessage:'TESTANDO DIALOG'} );
        //this.alertService.presentAlertConfirm({pTitleConfirm: 'e-Cupom33', pMessage:'Confirmar procedimento?',pTextBtnCancel:'Não',pTextOkay:'Sim' });
        //this.alertService.presentToast("Mensagem Toast: Logando...");
        console.log("form", form.value);
        console.log("validation", this.slideOneForm.status);
        if (this.slideOneForm.status == "INVALID") {
            console.log("Invalid");
            this.alertService.presentAlert({ pTitle: 'ValParaiso', pSubtitle: 'Erreur :', pMessage: ' Verifique o formulário  !' });
        }
        else {
            if (form.value.Senha != form.value.ConSenha) {
                console.log("senha", form.value.senha);
                console.log("ConsSenha", form.value.ConSenha);
                this.alertService.presentAlert({ pTitle: 'ValParaiso', pSubtitle: 'Erreur', pMessage: 'a senha e a senha de confirmação não são as' });
            }
            else {
                form.value.Senha = this.encripta(form.value.Senha);
                console.log("form", form.value);
                this.Authorizer.QueryStoreProcNgForm('ManutencaoUsuario', "DataJson", form.value).then(function (res) {
                    var resultado = res;
                    try {
                        if (resultado.length == 0) {
                            //nenhum modulo encontrado
                            _this.alertService.presentAlert({ pTitle: 'ValParaiso', pSubtitle: 'Menu', pMessage: 'Nenhum Perfis encontrado!' });
                        }
                        else {
                            //mostro os módulos
                            console.log("submit:", resultado);
                            _this.submit = resultado;
                            console.log(_this.submit);
                        }
                    }
                    catch (err) {
                        _this.alertService.presentAlert({ pTitle: 'ValParaiso', pSubtitle: 'Menu', pMessage: 'Nenhum Perfis!' });
                    }
                });
            }
        }
        //let pwd : any = Md5.hashStr(form.value.password);
        /*  this.Authorizer.Login(form).then( res => {
            //console.log("Resultado Json:", res);
            let resultado: any = res[0];
           // form.value.senha = this.old_senha;
            if (resultado.success == true) {
              this.db.set('SessionUser', resultado.results);
              this.db.get('SessionUser').then((Usuario) => {
                //console.log('Usuario Logado:' + JSON.stringify( Usuario ) );
              });
              this.alertService.showLoader(resultado.message, 2000);
              this.navCtrl.navigateRoot('/menu/options');
              //this.alertService.presentToast(resultado.message);
                              
            }
          });*/
    };
    AddusuarioPage = tslib_1.__decorate([
        Component({
            selector: 'app-addusuario',
            templateUrl: './addusuario.page.html',
            styleUrls: ['./addusuario.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            AlertService,
            EnvService,
            AuthService,
            Events,
            ModalController,
            FormBuilder
            //,
            // 
            // public submitAttempt,
        ])
    ], AddusuarioPage);
    return AddusuarioPage;
}());
export { AddusuarioPage };
//# sourceMappingURL=addusuario.page.js.map