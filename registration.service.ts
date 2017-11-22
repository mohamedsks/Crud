import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RegistrationEntity } from './registration.model';


@Injectable()
export class RegistrationService {
    constructor(private http: Http) { }
    InsertRegistration(s: RegistrationEntity): Observable<string> {
        debugger;
        return this.http.post("http://localhost:49160/api/Registration/Insert", s).map(s => s.json());
    }
    
}
