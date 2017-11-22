import { Injectable,EventEmitter } from '@angular/core';
import { HttpModule, Http, RequestOptions, Response, Headers, Request, RequestOptionsArgs, XHRBackend, 
    ConnectionBackend } from '@angular/http';
import { Router } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class HttpInterceptor extends Http {

   // notification: EventEmitter<Message> = new EventEmitter();

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, 
                private _router: Router) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.request(url, options));
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.get(url, this.getRequestOptionArgs(options)));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.delete(url, this.getRequestOptionArgs(options)));
    }
    getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Pragma','no-cache');
         
        var ac_token = localStorage.getItem('authorizationData');
      
        // options.headers.append('CompanyId',this.sharedService.globalInfo().CompanyId.toString());
        return options;
    }

    intercept(observable: Observable<Response>): Observable<Response> {
        return observable
            .catch((err, source) => {
                // if (err.status == 401) {
                //     this._router.navigate(['/login']);
                //     return observable;
                // } else {
                console.log(err);
                console.log(source);
                console.log('BROWSER-UI:HTTP:EXCEPTION');

               
                return Observable.throw(err);
                // }
            });

    }
}

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