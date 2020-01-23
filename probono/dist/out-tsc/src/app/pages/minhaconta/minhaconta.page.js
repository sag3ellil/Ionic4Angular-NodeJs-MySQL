import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { EnvService } from 'src/app/services/env.service';
var MinhaContaPage = /** @class */ (function () {
    function MinhaContaPage(Authorizer, env, navCtrl) {
        this.Authorizer = Authorizer;
        this.env = env;
        this.navCtrl = navCtrl;
        this.SrcPhotoAvatar = "assets/imgs/perfil.png";
    }
    MinhaContaPage.prototype.ngOnInit = function () {
        this.DataSet = JSON.parse(sessionStorage.SessionUser);
    };
    MinhaContaPage = tslib_1.__decorate([
        Component({
            selector: 'app-minhaconta',
            templateUrl: './minhaconta.page.html',
            styleUrls: ['./minhaconta.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            EnvService,
            NavController])
    ], MinhaContaPage);
    return MinhaContaPage;
}());
export { MinhaContaPage };
//# sourceMappingURL=minhaconta.page.js.map