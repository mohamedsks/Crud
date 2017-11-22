"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
require("rxjs/add/operator/toPromise");
var RegistrationgridService = (function () {
    function RegistrationgridService(http) {
        this.http = http;
    }
    RegistrationgridService.prototype.GetAll = function () {
        return this.http.get('http://localhost:49160/api/Registration/GetAll').map(function (res) { return res.json(); });
    };
    RegistrationgridService.prototype.Delete = function (RegId) {
        debugger;
        var res = this.http.delete('http://localhost:49160/api/Registration/Delete/' + RegId).map(function (res) { return res.json(); });
        return res;
    };
    RegistrationgridService.prototype.Get = function (RegId) {
        debugger;
        return this.http.get('http://localhost:49160/api/Registration/' + RegId).map(function (res) { return res.json(); });
    };
    RegistrationgridService.prototype.Update = function (s) {
        debugger;
        return this.http.put("http://localhost:49160/api/Registration/Update", s).map(function (s) { return s.json(); });
    };
    return RegistrationgridService;
}());
RegistrationgridService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RegistrationgridService);
exports.RegistrationgridService = RegistrationgridService;
//# sourceMappingURL=registrationgrid.service.js.map