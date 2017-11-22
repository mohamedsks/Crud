"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var HttpInterceptor = (function (_super) {
    __extends(HttpInterceptor, _super);
    // notification: EventEmitter<Message> = new EventEmitter();
    function HttpInterceptor(backend, defaultOptions, _router) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this._router = _router;
        return _this;
    }
    HttpInterceptor.prototype.request = function (url, options) {
        return this.intercept(_super.prototype.request.call(this, url, options));
    };
    HttpInterceptor.prototype.get = function (url, options) {
        return this.intercept(_super.prototype.get.call(this, url, this.getRequestOptionArgs(options)));
    };
    HttpInterceptor.prototype.post = function (url, body, options) {
        return this.intercept(_super.prototype.post.call(this, url, body, this.getRequestOptionArgs(options)));
    };
    HttpInterceptor.prototype.put = function (url, body, options) {
        return this.intercept(_super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options)));
    };
    HttpInterceptor.prototype.delete = function (url, options) {
        return this.intercept(_super.prototype.delete.call(this, url, this.getRequestOptionArgs(options)));
    };
    HttpInterceptor.prototype.getRequestOptionArgs = function (options) {
        if (options == null) {
            options = new http_1.RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new http_1.Headers();
        }
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Pragma', 'no-cache');
        var ac_token = localStorage.getItem('authorizationData');
        // options.headers.append('CompanyId',this.sharedService.globalInfo().CompanyId.toString());
        return options;
    };
    HttpInterceptor.prototype.intercept = function (observable) {
        return observable
            .catch(function (err, source) {
            // if (err.status == 401) {
            //     this._router.navigate(['/login']);
            //     return observable;
            // } else {
            console.log(err);
            console.log(source);
            console.log('BROWSER-UI:HTTP:EXCEPTION');
            return Observable_1.Observable.throw(err);
            // }
        });
    };
    return HttpInterceptor;
}(http_1.Http));
HttpInterceptor = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.ConnectionBackend, http_1.RequestOptions,
        router_1.Router])
], HttpInterceptor);
exports.HttpInterceptor = HttpInterceptor;
// @Injectable()
// export class ApiService {
//     constructor(private http: Http) { }
//     get(url){
//         return this.http.get('/api/users');
//     }
//     put(){
//         return this.http.get('/api/users');
//     }
//     post(){
//         return this.http.get('/api/users');
//     }
//     delete(){
//         return this.http.get('/api/users');
//     }
//     // private helper methods
//     // private jwt() {
//     //     // create authorization header with jwt token
//     //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
//     //     if (currentUser && currentUser.token) {
//     //         let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
//     //         return new RequestOptions({ headers: headers });
//     //     }
//     // }
// } 
//# sourceMappingURL=core.service.js.map