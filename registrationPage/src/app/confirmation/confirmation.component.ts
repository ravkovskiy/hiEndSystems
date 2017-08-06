import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppSettingsService } from './../common/services/app-settings.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private router: Router,
    private appSettings: AppSettingsService) { }

  ngOnInit() {
  }

  goToRegistration() {
    this.router.navigate([this.appSettings.regPath]);
  }
}
