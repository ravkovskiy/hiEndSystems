import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppSettingsService } from './../common/services/app-settings.service';
import { AuthService } from './../common/services/auth.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  user: any;
  constructor(private router: Router,
    private appSettings: AppSettingsService,
    private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
  }

  goToRegistration() {
    this.router.navigate([this.appSettings.regPath]);
  }
}
