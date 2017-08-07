import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AppSettingsService } from './../common/services/app-settings.service';
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
  regModel: RegModel;
  regForm: any;
  emailRegExp: RegExp;
  passwordRegExp: RegExp;
  constructor(private router: Router,
    private appSettings: AppSettingsService) {
    this.regModel = new RegModel();
    this.emailRegExp = AppConstants.emailRegExp;
    this.passwordRegExp = AppConstants.pwRegExp;
  }

  ngOnInit(): void {
    /*this.regForm = new FormGroup({
      'email': new FormControl(this.regModel.email, [
        Validators.required,
        emailValidator()
      ])
    })*/
  }

  onSubmit(form: NgForm) {
    console.dir(form);
    if (form.invalid) return;
    form.resetForm();
    this.router.navigate([this.appSettings.confirmPath]);
  }
}
