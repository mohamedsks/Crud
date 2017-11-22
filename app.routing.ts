import { Routes, RouterModule } from '@angular/router';
import { Registration } from './registration.component';
import {RegistrationgridComponent} from './registrationgrid.component';

export const routes: Routes= [
        {path: 'registration', component: Registration },
        {path: 'registration/:RegId', component: Registration },
        {path: 'registrationgrid', component: RegistrationgridComponent }
] 
export const routing = RouterModule.forRoot(routes);
