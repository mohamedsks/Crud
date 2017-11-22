import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationEntity } from './registration.model';
import { RegistrationService } from './registration.service';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import { RegistrationgridService } from './registrationgrid.service';
import { RegistrationListEntity, RegistrationsEntity } from './registrationgrid.model';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'registration',
    templateUrl: './registration.component.html',
})


export class Registration implements OnInit {

    frmReg: FormGroup;
    Registration: RegistrationEntity;
    Id: number = 0;
    show: boolean = true;
    head:boolean=false;
     submitted: boolean = false;
    constructor(private formBuilder: FormBuilder, private regService: RegistrationgridService, private service: RegistrationService, private router: Router, private route: ActivatedRoute) { }
    ngOnInit() {
        debugger;
        
        this.frmReg = this.formBuilder.group({
            Name: ['', Validators.required],
            Age: ['', Validators.required],
            Qulification: ['', Validators.required],
            Contactno: [],
            City: []
        });
        debugger;

        this.route.params.subscribe(params => {
            this.Id = params['RegId'];  
          if(this.Id!=0)
                this.regService.Get(this.Id).subscribe(res => {
                    this.show=false;
                    this.head=true;
                    this.Registration = res;
                    this.frmReg.patchValue({
                        Name: this.Registration.Name,
                        Age: this.Registration.Age,
                        Qulification: this.Registration.Qulification,
                        Contactno: this.Registration.Contactno,
                        City: this.Registration.City

                    })
                });
        });

    }

    submit(Registration: RegistrationEntity, frmReg: boolean) {
        debugger;
         
        if (frmReg==true)
        {
            this.frmReg.value.Name
            this.frmReg.value.Age
            this.frmReg.value.Qulification
            this.frmReg.value.Contactno
            this.frmReg.value.City
            debugger;
            this.service.InsertRegistration(Registration).subscribe(s =>{
            debugger;
            if(s=="1")
            {
             alert("Registration Successfully");
            }
            else
            {
             alert("Registration failed");
            }   
            this.frmReg.patchValue({
                Name:'',
                Age:'',
                Qulification:'',
                Contactno:'',
                City:'',

            });
            
        });
        }
            else
            {
               this.submitted = true;
            }
            
    }
    Update(Registration: RegistrationsEntity,frmReg: boolean) {
        debugger;
       if (frmReg==true)
       {
        this.frmReg.value.RegId = this.Id
        this.frmReg.value.Name
        this.frmReg.value.Age
        this.frmReg.value.Qulification
        this.frmReg.value.Contactno
        this.frmReg.value.City
        this.regService.Update(Registration).subscribe(s =>{ 
          debugger;  
           if(s=="1")
            {
              alert("Updated Successfully");
            }
            else
            {
             alert("Updated failed");
            }   
       this.frmReg.patchValue({
                Name:'',
                Age:'',
                Qulification:'',
                Contactno:'',
                City:'',
    });
 });
}
            else
            {
             this.submitted = true;
            }
}
}
