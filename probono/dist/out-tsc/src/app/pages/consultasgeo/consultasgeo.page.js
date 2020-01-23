import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, Events } from '@ionic/angular';
//import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
var ConsultasgeoPage = /** @class */ (function () {
    function ConsultasgeoPage(navCtrl, alertService, env, Authorizer, Eventos) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
        this.Eventos = Eventos;
        this.segs = [
            {
                id: 0,
                segmento: 'Todos'
            }
        ];
        this.groupsDef = [
            {
                id: 1,
                nome: 'Todos'
            }
        ];
        this.groups = [
            {
                id: 1,
                nome: 'Todos'
            }
        ];
        this.users = [
            {
                id: 0,
                usuario: 'Todos'
            }
        ];
    }
    ConsultasgeoPage.prototype.ngOnInit = function () {
        // this.DataSet = JSON.parse(sessionStorage.SessionUser);      
        //this.setValue(); 
    };
    ConsultasgeoPage.prototype.ionViewWillEnter = function () {
        // Disparado quando o roteamento de componentes está prestes a se animar.    
        console.log("ionViewWillEnter");
    };
    ConsultasgeoPage.prototype.ionViewDidEnter = function () {
        // Disparado quando o roteamento de componentes terminou de ser animado.        
        console.log("ionViewDidEnter");
        this.PopulaSeguimento(0);
    };
    ConsultasgeoPage.prototype.ionViewWillLeave = function () {
        // Disparado quando o roteamento de componentes está prestes a ser animado.    
        console.log("ionViewWillLeave");
    };
    ConsultasgeoPage.prototype.ionViewDidLeave = function () {
        // Disparado quando o roteamento de componentes terminou de ser animado.    
        console.log("ionViewDidLeave");
    };
    ConsultasgeoPage.prototype.setValueFieldsForm = function () {
        this.Codigo = sessionStorage.getItem("SessionCodigoUsuario");
        this.Nome = "Gilson";
        this.SobreNome = "DeLima";
        this.Email = "gilson.delima@gmail.com";
        this.Telefone = "61-98204-9030";
        this.Celular = "61-98204-9030";
    };
    ConsultasgeoPage.prototype.PopulaSeguimento = function (item) {
        var _this = this;
        console.log(item);
        console.log(sessionStorage.getItem('SessionCodigoUsuario'));
        console.log(sessionStorage.getItem("SessionHashkey"));
        var paramsSeguimentos = {
            'usuario': sessionStorage.getItem('SessionCodigoUsuario'),
            'todos': '',
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        this.Authorizer.QueryStoreProc('ConsultaSegmentos', 'spConsulta', paramsSeguimentos).then(function (res) {
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
                    _this.GruposValues = resultado;
                    //console.log(JSON.stringify(this.SeguimentoValues));
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: 'MOP', pSubtitle: 'Menu', pMessage: 'Nenhum segmento!' });
            }
        });
    };
    ConsultasgeoPage.prototype.PopulaGrupos = function (form, event) {
        var _this = this;
        this.segmento = event.detail.value;
        console.log(event.detail.value);
        //this.segs = this.segs.filter((item) => { return item.id == event })[0].segs;
        var params = {
            'usuario': sessionStorage.getItem('SessionCodigoUsuario'),
            'segmento': event.detail.value,
            'nivel': '',
            'grupo': '',
            'todos': '',
            'nome': '',
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        this.Authorizer.QueryStoreProc('ConsultaGrupos', "", params).then(function (res) {
            var resultado = res;
            try {
                if (resultado.length == 0) {
                    //nenhum modulo encontrado
                    _this.groups = _this.groupsDef;
                    _this.alertService.presentAlert({ pTitle: 'MOP', pSubtitle: 'Menu', pMessage: 'Nenhum grupo encontrado!' });
                }
                else {
                    //mostro os módulos
                    console.log(resultado);
                    _this.groups = resultado;
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: 'MOP', pSubtitle: '', pMessage: 'Nenhum grupo!' });
            }
        });
    };
    ConsultasgeoPage.prototype.PopulaUsuarios = function (form, event) {
        var _this = this;
        console.log(event);
        this.grupo = event.detail.value;
        var params = {
            'usuario': sessionStorage.getItem('SessionCodigoUsuario'),
            'segmento': this.segmento,
            'grupo': this.grupo,
            'nome': '',
            'matricula': '',
            'cpf': '',
            'todos': '',
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        this.Authorizer.QueryStoreProc('ConsultaUsuarios', '', params).then(function (res) {
            var resultado = res;
            try {
                if (resultado.length == 0) {
                    //nenhum modulo encontrado
                    _this.alertService.presentAlert({ pTitle: 'MOP', pSubtitle: 'Menu', pMessage: 'Nenhum usuário encontrado!' });
                }
                else {
                    //mostro os módulos
                    console.log(resultado);
                    _this.users = resultado;
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: 'MOP', pSubtitle: 'Menu', pMessage: 'Nenhum usuário!' });
            }
        });
    };
    ConsultasgeoPage.prototype.PesquisarGeo = function (form, event) {
        //form.value.senha = Md5.hashStr(form.value.senha);
        var _this = this;
        this.Authorizer.Login(form).then(function (res) {
            //console.log("Resultado Json:", res);
            var resultado = res[0];
            if (resultado.success == true) {
                _this.alertService.showLoader(resultado.message);
            }
        });
    };
    ConsultasgeoPage = tslib_1.__decorate([
        Component({
            selector: 'app-consultasgeo',
            templateUrl: './consultasgeo.page.html',
            styleUrls: ['./consultasgeo.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            AlertService,
            EnvService,
            AuthService,
            Events])
    ], ConsultasgeoPage);
    return ConsultasgeoPage;
}());
export { ConsultasgeoPage };
//# sourceMappingURL=consultasgeo.page.js.map