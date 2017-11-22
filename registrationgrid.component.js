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
var registrationgrid_service_1 = require("./registrationgrid.service");
var router_1 = require("@angular/router");
var RegistrationgridComponent = (function () {
    function RegistrationgridComponent(regService, router, route) {
        this.regService = regService;
        this.router = router;
        this.route = route;
    }
    RegistrationgridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.regService.GetAll().subscribe(function (stud) {
            debugger;
            _this.stud = stud.RegistrationList;
            console.log(_this.stud);
        });
    };
    RegistrationgridComponent.prototype.onclickDelete = function (Reg) {
        var _this = this;
        debugger;
        this.regService.Delete(Reg.RegId).subscribe(function (res) {
            _this.ngOnInit();
            alert("Deleted Successfully");
        });
    };
    RegistrationgridComponent.prototype.onclickEdit = function (RegId) {
        debugger;
        this.router.navigate(['/registration', RegId]);
    };
    return RegistrationgridComponent;
}());
RegistrationgridComponent = __decorate([
    core_1.Component({
        selector: 'registrationgrid',
        templateUrl: './registrationgrid.component.html',
    }),
    __metadata("design:paramtypes", [registrationgrid_service_1.RegistrationgridService,
        router_1.Router, router_1.ActivatedRoute])
], RegistrationgridComponent);
exports.RegistrationgridComponent = RegistrationgridComponent;
//# sourceMappingURL=registrationgrid.component.js.map