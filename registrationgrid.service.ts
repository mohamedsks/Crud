import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { RegistrationListEntity, RegistrationsEntity } from './registrationgrid.model';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx'; 
import 'rxjs/add/operator/toPromise';



@Injectable()
export class RegistrationgridService {

    constructor(private http: Http) { }

    GetAll() : Observable<RegistrationListEntity> {
        
    return this.http.get('http://localhost:49160/api/Registration/GetAll').map(res => res.json());
        
    }

    Delete(RegId: number): Observable<RegistrationsEntity> {
        debugger;
       let res =this.http.delete('http://localhost:49160/api/Registration/Delete/'+RegId).map(res => res.json());
       return res; 
    }

    Get(RegId: number): Observable<RegistrationsEntity> {
        debugger;
        return this.http.get('http://localhost:49160/api/Registration/'+RegId).map(res => res.json());
       
    }
     Update(s: RegistrationsEntity): Observable<string> {
           debugger;
        return this.http.put("http://localhost:49160/api/Registration/Update", s).map(s => s.json());

}
}
