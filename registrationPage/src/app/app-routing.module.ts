import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { RegistrationComponent }   from './registration/registration.component';
import { ConfirmationComponent }      from './confirmation/confirmation.component';
import { AuthGuard } from './common/services/auth-guard.service';
 
const routes: Routes = [
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  { path: 'registration',  component: RegistrationComponent },
  { path: 'confirmation',  component: ConfirmationComponent, canActivate: [ AuthGuard ] },
  { path: '**', redirectTo: '/registration', pathMatch: 'full' }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}