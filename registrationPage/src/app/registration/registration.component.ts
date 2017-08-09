import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AppSettingsService } from './../common/services/app-settings.service';
import { AuthService } from './../common/services/auth.service';
import { RegModel } from './../common/models/reg-model';
import { AppConstants } from './../common/constants/app-constants';
import { emailValidator } from './../common/directives/valid-email';
import { passwordValidator } from './../common/directives/valid-password';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public regModel: RegModel;
  public confirmPass: string;
  public emailRegExp: RegExp;
  public passwordRegExp: RegExp;

  constructor(private router: Router,
    private appSettings: AppSettingsService,
    private auth: AuthService) {

    this.regModel = new RegModel();
    this.emailRegExp = AppConstants.emailRegExp;
    this.passwordRegExp = AppConstants.pwRegExp;
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    let user: any = Object.assign({}, this.regModel);
    this.auth.singUp(user);
    form.resetForm();
    this.router.navigate([this.appSettings.confirmPath]);
  }
}
