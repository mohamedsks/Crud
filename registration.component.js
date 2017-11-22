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
var forms_1 = require("@angular/forms");
var registration_service_1 = require("./registration.service");
var router_1 = require("@angular/router");
var registrationgrid_service_1 = require("./registrationgrid.service");
require("rxjs/add/operator/switchMap");
var Registration = (function () {
    function Registration(formBuilder, regService, service, router, route) {
        this.formBuilder = formBuilder;
        this.regService = regService;
        this.service = service;
        this.router = router;
        this.route = route;
        this.Id = 0;
        this.show = true;
        this.head = false;
        this.submitted = false;
    }
    Registration.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.frmReg = this.formBuilder.group({
            Name: ['', forms_1.Validators.required],
            Age: ['', forms_1.Validators.required],
            Qulification: ['', forms_1.Validators.required],
            Contactno: [],
            City: []
        });
        debugger;
        this.route.params.subscribe(function (params) {
            _this.Id = params['RegId'];
            if (_this.Id != 0)
                _this.regService.Get(_this.Id).subscribe(function (res) {
                    _this.show = false;
                    _this.head = true;
                    _this.Registration = res;
                    _this.frmReg.patchValue({
                        Name: _this.Registration.Name,
                        Age: _this.Registration.Age,
                        Qulification: _this.Registration.Qulification,
                        Contactno: _this.Registration.Contactno,
                        City: _this.Registration.City
                    });
                });
        });
    };
    Registration.prototype.submit = function (Registration, frmReg) {
        var _this = this;
        debugger;
        if (frmReg == true) {
            this.frmReg.value.Name;
            this.frmReg.value.Age;
            this.frmReg.value.Qulification;
            this.frmReg.value.Contactno;
            this.frmReg.value.City;
            debugger;
            this.service.InsertRegistration(Registration).subscribe(function (s) {
                debugger;
                if (s == "1") {
                    alert("Registration Successfully");
                }
                else {
                    alert("Registration failed");
                }
                _this.frmReg.patchValue({
                    Name: '',
                    Age: '',
                    Qulification: '',
                    Contactno: '',
                    City: '',
                });
            });
        }
        else {
            this.submitted = true;
        }
    };
    Registration.prototype.Update = function (Registration, frmReg) {
        var _this = this;
        debugger;
        if (frmReg == true) {
            this.frmReg.value.RegId = this.Id;
            this.frmReg.value.Name;
            this.frmReg.value.Age;
            this.frmReg.value.Qulification;
            this.frmReg.value.Contactno;
            this.frmReg.value.City;
            this.regService.Update(Registration).subscribe(function (s) {
                debugger;
                if (s == "1") {
                    alert("Updated Successfully");
                }
                else {
                    alert("Updated failed");
                }
                _this.frmReg.patchValue({
                    Name: '',
                    Age: '',
                    Qulification: '',
                    Contactno: '',
                    City: '',
                });
            });
        }
        else {
            this.submitted = true;
        }
    };
    return Registration;
}());
Registration = __decorate([
    core_1.Component({
        selector: 'registration',
        templateUrl: './registration.component.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, registrationgrid_service_1.RegistrationgridService, registration_service_1.RegistrationService, router_1.Router, router_1.ActivatedRoute])
], Registration);
exports.Registration = Registration;
//# sourceMappingURL=registration.component.js.map