"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var registration_component_1 = require("./registration.component");
var registrationgrid_component_1 = require("./registrationgrid.component");
exports.routes = [
    { path: 'registration', component: registration_component_1.Registration },
    { path: 'registration/:RegId', component: registration_component_1.Registration },
    { path: 'registrationgrid', component: registrationgrid_component_1.RegistrationgridComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map