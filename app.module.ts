import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Registration } from './registration.component';
import { RegistrationgridComponent } from './registrationgrid.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms'
import { RegistrationService } from './registration.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { HttpInterceptor } from './core.service';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/primeng';
import { RegistrationgridService } from './registrationgrid.service';



@NgModule({
    imports: [BrowserModule, FormsModule, routing, HttpModule, ReactiveFormsModule, SharedModule,DataTableModule],
    declarations: [AppComponent, Registration, RegistrationgridComponent],
    bootstrap: [AppComponent],

    providers: [RegistrationService, RegistrationgridService,
        {
            provide: Http, useFactory: (xhrBackend: XHRBackend, requestOptions:
                RequestOptions, router: Router) => //,sharedService:SharedService
                new HttpInterceptor(xhrBackend, requestOptions, router), //,sharedService
            deps: [XHRBackend, RequestOptions, Router] //,SharedService
        }
    ],
})

export class AppModule { }