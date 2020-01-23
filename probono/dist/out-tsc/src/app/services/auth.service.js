import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
//import { Network }      from '@ionic-native/network';
import { HttpClient } from '@angular/common/http';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from './env.service';
//import { Base64 } from '@ionic-native/base64/ngx';
//import { Observable, throwError } from 'rxjs';
import { Storage } from '@ionic/storage';
var AuthService = /** @class */ (function () {
    function AuthService(http, platform, 
    //private network: Network,      
    env, alertService, 
    //private base64: Base64   
    db) {
        this.http = http;
        this.platform = platform;
        this.env = env;
        this.alertService = alertService;
        this.db = db;
        this.headers = new Headers();
        this.isLoggedIn = false;
        /*
        CheckConnectivity() {
          this.platform.ready().then(() => {
            // if no internet, notice is a string
            if (this.network.type == 'none' ) {
              this.alertService.presentAlert({
                pTitle:'ATENÇÃO',
                pSubtitle:'Autendicação no Sistema',
                pMessage:'Não existe conexão de dados no momento. Tente novamente'
              });
            } else {
                return false;
            }
          })
        }
        */
        // função para verificar conexão de Host Engine API
        this.EngineStatusConection = function (host) {
            var started = new Date().getTime();
            var url = host;
            fetch(url).then(function (response) {
                if (response.status === 200) {
                    return response.statusText;
                }
                else {
                    throw new Error('Algo deu errado no servidor da EngineAPI!');
                }
            }).then(function (response) {
                console.debug(response);
                sessionStorage.setItem('EngineStatusConection', "ON");
                return true;
            }).catch(function (error) {
                //console.error(error);
                sessionStorage.setItem('EngineStatusConection', 'OFF');
                return false;
            });
        };
        this.Login = function (form) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var ParamDataJson, strDataJson, ParamHashkey, paramUrlAPI, paramsAPI, EngineAPI;
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    ParamDataJson = btoa(JSON.stringify(form.value));
                    strDataJson = atob(ParamDataJson);
                    ParamHashkey = sessionStorage.SessionHashkey;
                    paramUrlAPI = this.env.API_HOST + this.env.API_URL + '/authentication?';
                    paramsAPI = "DataJson=" + ParamDataJson;
                    EngineAPI = paramUrlAPI + paramsAPI;
                    console.log(EngineAPI);
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            _this.coletionsData = _this.http.get(EngineAPI);
                            _this.coletionsData.subscribe(function (data) {
                                if (data[0].success) {
                                    //sessionStorage.setItem('SessionUser', JSON.stringify(data[0].results));
                                    _this.db.set('LSU', btoa(data[0].results));
                                    sessionStorage.setItem('SessionUser', data[0].results);
                                    sessionStorage.setItem("SessionHashkey", data[0].hashkey);
                                    sessionStorage.setItem("SessionConection", "1");
                                }
                                else {
                                    sessionStorage.setItem("SessionConection", "0");
                                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Autendicação no Sistema', pMessage: data[0].message });
                                }
                                resolve(data);
                            }, function (error) {
                                _this.alertService.presentAlert({ pTitle: "Atenção", pSubtitle: "Servidor Indisponível. Tente mais tarde!!!", pMessage: "Status Error:" + error.status + " | " + error.statusText });
                                console.log("Error: ", error);
                            });
                        })];
                });
            });
        };
        this.Register = function (form) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var StoreProcName, ParamDataJson, strDataJson, paramUrlAPI, paramsAPI, EngineAPI;
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    StoreProcName = "spRegister";
                    ParamDataJson = btoa(JSON.stringify(form.value));
                    strDataJson = atob(ParamDataJson);
                    paramUrlAPI = this.env.API_HOST + this.env.API_URL + '/register?';
                    paramsAPI = "StoreProcName=" + StoreProcName + "&DataJson=" + ParamDataJson;
                    EngineAPI = paramUrlAPI + paramsAPI;
                    return [2 /*return*/, new Promise(function (resolve) {
                            _this.coletionsData = _this.http.get(EngineAPI);
                            _this.coletionsData.subscribe(function (data) {
                                resolve(data);
                                //console.log(data);                              
                            }, function (error) {
                                _this.alertService.presentAlert({ pTitle: "Atenção", pSubtitle: "Servidor Indisponível. Tente mais tarde!!!", pMessage: "Status Error:" + error.status + " | " + error.statusText });
                                console.log("Error: ", error);
                            });
                        })];
                });
            });
        };
        this.QueryStoreProc = function (MetodoNameAPI, StoreProcName, ParamsJson) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var ParamDataJson, paramUrlAPI, paramsAPI, EngineAPI;
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    ParamDataJson = btoa(JSON.stringify(ParamsJson));
                    paramUrlAPI = this.env.API_HOST + this.env.API_URL + '/' + MetodoNameAPI + '?';
                    paramsAPI = "StoreProcName=" + StoreProcName + "&DataJson=" + ParamDataJson;
                    EngineAPI = paramUrlAPI + paramsAPI;
                    //console.log(EngineAPI);
                    return [2 /*return*/, new Promise(function (resolve) {
                            _this.coletionsData = _this.http.get(EngineAPI);
                            _this.coletionsData.subscribe(function (data) {
                                resolve(data);
                            }, function (error) {
                                _this.alertService.presentAlert({ pTitle: "Atenção", pSubtitle: "Servidor ou Método Indisponível. Tente mais tarde!!!", pMessage: "Status Error:" + error.status + " | " + error.statusText });
                                console.log("Error: ", error);
                            });
                        })];
                });
            });
        };
        this.QueryStoreProcNgForm = function (opcao, variable, consultaJson) {
            var _this = this;
            //--------------------------------------------------------------------------------------------    
            // Função Gerenerica de consulta no Service API  
            // Criação / Atualização: 29/07/2019 as 10:42          
            // Por Gilson DeLima    
            //--------------------------------------------------------------------------------------------
            // Params: opcao = ex: ConsultaGrupos, consultaJson = ex: paramsGrupo
            //--------------------------------------------------------------------------------------------
            //this.alertService.showLoader("Processando... Aguarde por favor!!!");        
            var ParamDataJson = btoa(JSON.stringify(consultaJson)); // encode string  
            var strDataJson = atob(ParamDataJson); // decode string
            console.log(strDataJson);
            var a = strDataJson.substring(strDataJson.indexOf(':') + 2, strDataJson.indexOf('}') - 1);
            console.log(a);
            //ConsultaMenu
            console.log(ParamDataJson);
            var paramUrlAPI = this.env.API_HOST + this.env.API_URL + '/' + opcao + '?';
            var go = consultaJson;
            console.log("consultaJson", consultaJson);
            var paramsAPI = ParamDataJson;
            console.log(paramsAPI);
            var EngineAPI = paramUrlAPI + variable + "=" + paramsAPI;
            console.log(EngineAPI);
            return new Promise(function (resolve) {
                _this.coletionsData = _this.http.get(EngineAPI);
                _this.coletionsData.subscribe(function (data) {
                    resolve(data);
                    console.log(data);
                }, function (error) {
                    _this.alertService.presentAlert({ pTitle: "Atenção", pSubtitle: "Servidor Indisponível. Tente mais tarde!!!", pMessage: "Status Error:" + error.status + " | " + error.statusText });
                    //console.log("Error: ", error);
                });
            });
        };
        this.QueryStoreProc1 = function (opcao, variable, consultaJson) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var ParamDataJson, strDataJson, a, paramUrlAPI, go, paramsAPI, EngineAPI;
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    ParamDataJson = btoa(JSON.stringify(consultaJson));
                    strDataJson = atob(ParamDataJson);
                    console.log(strDataJson);
                    a = strDataJson.substring(strDataJson.indexOf(':') + 2, strDataJson.indexOf('}') - 1);
                    console.log(a);
                    //ConsultaMenu
                    console.log(ParamDataJson);
                    paramUrlAPI = this.env.API_HOST + this.env.API_URL + '/' + opcao + '?';
                    go = consultaJson;
                    console.log("consultaJson", consultaJson);
                    paramsAPI = go;
                    console.log(paramsAPI);
                    EngineAPI = paramUrlAPI + variable + "=" + paramsAPI;
                    console.log(EngineAPI);
                    return [2 /*return*/, new Promise(function (resolve) {
                            _this.coletionsData = _this.http.get(EngineAPI);
                            _this.coletionsData.subscribe(function (data) {
                                resolve(data);
                                console.log(data);
                            }, function (error) {
                                _this.alertService.presentAlert({ pTitle: "Atenção", pSubtitle: "Servidor Indisponível. Tente mais tarde!!!", pMessage: "Status Error:" + error.status + " | " + error.statusText });
                                //console.log("Error: ", error);
                            });
                        })];
                });
            });
        };
        this.QueryStoreProcDelete = function (opcao, variable, consultaJson) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var ParamDataJson, strDataJson, a, paramUrlAPI, go, paramsAPI, EngineAPI;
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    ParamDataJson = btoa(JSON.stringify(consultaJson));
                    strDataJson = atob(ParamDataJson);
                    console.log(strDataJson);
                    a = strDataJson.substring(strDataJson.indexOf(':') + 2, strDataJson.indexOf('}') - 1);
                    console.log(a);
                    //ConsultaMenu
                    console.log(ParamDataJson);
                    paramUrlAPI = this.env.API_HOST + this.env.API_URL + '/' + opcao + '?';
                    go = consultaJson;
                    console.log("consultaJson", consultaJson);
                    paramsAPI = go;
                    console.log(paramsAPI);
                    EngineAPI = paramUrlAPI + variable + "=" + paramsAPI;
                    console.log(EngineAPI);
                    return [2 /*return*/, new Promise(function (resolve) {
                            _this.alertService.presentAlert({ pTitle: "Success", pSubtitle: "usuário excluído com sucesso!" });
                            //console.log("Error: ", error);
                        })];
                });
            });
        };
        this.QueryStoreProcString = function (opcao, consultaJson) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var ParamDataJson, strDataJson, paramUrlAPI, go, paramsAPI, EngineAPI;
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    ParamDataJson = btoa(JSON.stringify(consultaJson));
                    strDataJson = atob(ParamDataJson);
                    console.log(strDataJson);
                    //ConsultaMenu
                    console.log(ParamDataJson);
                    paramUrlAPI = this.env.API_HOST + this.env.API_URL + '/' + opcao + '?';
                    go = consultaJson;
                    console.log("consultaJson", consultaJson);
                    paramsAPI = go;
                    console.log(paramsAPI);
                    EngineAPI = paramUrlAPI + paramsAPI;
                    console.log(EngineAPI);
                    return [2 /*return*/, new Promise(function (resolve) {
                            _this.coletionsData = _this.http.get(EngineAPI);
                            _this.coletionsData.subscribe(function (data) {
                                resolve(data);
                                console.log(data);
                            }, function (error) {
                                _this.alertService.presentAlert({ pTitle: "Atenção", pSubtitle: "Servidor Indisponível. Tente mais tarde!!!", pMessage: "Status Error:" + error.status + " | " + error.statusText });
                                //console.log("Error: ", error);
                            });
                        })];
                });
            });
        };
        this.QueryStoreProc2 = function (opcao, consultaJson) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var ParamDataJson, paramUrlAPI, go, paramsAPI, EngineAPI;
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    ParamDataJson = btoa(JSON.stringify(consultaJson));
                    //let strDataJson = atob(ParamDataJson);                // decode string
                    //console.log(strDataJson);              
                    //ConsultaMenu
                    console.log(ParamDataJson);
                    paramUrlAPI = this.env.API_HOST + this.env.API_URL + '/' + opcao + '?';
                    go = consultaJson;
                    paramsAPI = "uf=" + go;
                    EngineAPI = paramUrlAPI + paramsAPI;
                    return [2 /*return*/, new Promise(function (resolve) {
                            _this.coletionsData = _this.http.get(EngineAPI);
                            _this.coletionsData.subscribe(function (data) {
                                resolve(data);
                                console.log(data);
                            }, function (error) {
                                _this.alertService.presentAlert({ pTitle: "Atenção", pSubtitle: "Servidor Indisponível. Tente mais tarde!!!", pMessage: "Status Error:" + error.status + " | " + error.statusText });
                                //console.log("Error: ", error);
                            });
                        })];
                });
            });
        };
        this.headers.append('Content-Type', 'application/json');
    }
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            Platform,
            EnvService,
            AlertService,
            Storage])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map