import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
    { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
    //{ path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
    { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
    { path: 'recuperasenha', loadChildren: './pages/recuperasenha/recuperasenha.module#RecuperasenhaPageModule' },
    { path: 'ocorrenciacivil', loadChildren: './pages/ocorrenciacivil/ocorrenciacivil.module#OcorrenciacivilPageModule' },
    { path: 'usuario', loadChildren: './pages/usuario/usuario.module#UsuarioPageModule' },
    { path: 'addusuario', loadChildren: './pages/addusuario/addusuario.module#AddusuarioPageModule' },
    { path: 'localizacao', loadChildren: './pages/localizacao/localizacao.module#LocalizacaoPageModule' },
    { path: 'consultainfracoes', loadChildren: './pages/consultainfracoes/consultainfracoes.module#ConsultainfracoesPageModule' },
    { path: 'consultausuario', loadChildren: './pages/consultausuario/consultausuario.module#ConsultausuarioPageModule' },
    { path: 'consultaconsolidada', loadChildren: './pages/consultaconsolidada/consultaconsolidada.module#ConsultaconsolidadaPageModule' },
    { path: 'menuconsultasgeral', loadChildren: './pages/menuconsultasgeral/menuconsultasgeral.module#MenuconsultasgeralPageModule' },
    { path: 'menumapa', loadChildren: './pages/menumapa/menumapa.module#MenumapaPageModule' },
    { path: 'menuconf', loadChildren: './pages/menuconf/menuconf.module#MenuconfPageModule' },
    { path: 'menumedidas', loadChildren: './pages/menumedidas/menumedidas.module#MenumedidasPageModule' },
    { path: 'menutermos', loadChildren: './pages/menutermos/menutermos.module#MenutermosPageModule' },
    { path: 'menuvistorias', loadChildren: './pages/menuvistorias/menuvistorias.module#MenuvistoriasPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map