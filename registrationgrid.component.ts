import { Component, OnInit } from '@angular/core';
import { RegistrationListEntity, RegistrationsEntity } from './registrationgrid.model'
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { RegistrationgridService } from './registrationgrid.service';
import { RouterModule, Router,ActivatedRoute,Params } from '@angular/router';
import { ButtonModule } from 'primeng/primeng';
import { Registration} from './registration.component';

@Component({
  selector: 'registrationgrid',
  templateUrl: './registrationgrid.component.html',
})

export class RegistrationgridComponent implements OnInit {
  stud: RegistrationsEntity[];
  reg:Registration;
  constructor(private regService: RegistrationgridService,
    private router: Router,private route:ActivatedRoute) { }
  ngOnInit() {
  this.regService.GetAll().subscribe(stud => {
    debugger;
  this.stud = stud.RegistrationList;
  console.log(this.stud );
});

   }
     onclickDelete(Reg: RegistrationsEntity) {
       debugger;
    this.regService.Delete(Reg.RegId).subscribe(res => {
      this.ngOnInit();
      alert("Deleted Successfully");
    });
     }
     onclickEdit(RegId:RegistrationsEntity){
       debugger;  
        this.router.navigate(['/registration',RegId]);

       }
     }	


