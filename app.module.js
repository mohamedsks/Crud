"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var registration_component_1 = require("./registration.component");
var registrationgrid_component_1 = require("./registrationgrid.component");
var app_routing_1 = require("./app.routing");
var forms_1 = require("@angular/forms");
var registration_service_1 = require("./registration.service");
var forms_2 = require("@angular/forms");
var primeng_1 = require("primeng/primeng");
var core_service_1 = require("./core.service");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var registrationgrid_service_1 = require("./registrationgrid.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing, http_1.HttpModule, forms_2.ReactiveFormsModule, primeng_1.SharedModule, primeng_1.DataTableModule],
        declarations: [app_component_1.AppComponent, registration_component_1.Registration, registrationgrid_component_1.RegistrationgridComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [registration_service_1.RegistrationService, registrationgrid_service_1.RegistrationgridService,
            {
                provide: http_1.Http, useFactory: function (xhrBackend, requestOptions, router) {
                    return new core_service_1.HttpInterceptor(xhrBackend, requestOptions, router);
                },
                deps: [http_1.XHRBackend, http_1.RequestOptions, router_1.Router] //,SharedService
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map