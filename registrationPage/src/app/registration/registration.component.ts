import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AppSettingsService } from './../common/services/app-settings.service';
import { RegModel } from './../common/models/reg-model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regModel: RegModel;
  constructor(private router: Router,
    private appSettings: AppSettingsService) {
    this.regModel = new RegModel();
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.dir(form);
    if (form.invalid) return;
    form.resetForm();
    this.router.navigate([this.appSettings.confirmPath]);
  }
}
