import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LanguageComponent } from './common/components/language/language.component';

import { EmailValidatorDirective } from './common/directives/valid-email';
import { passwordValidatorDirective } from './common/directives/valid-password';
import { EqualValidator } from './common/directives/valid-equal';

import { AppSettingsService } from './common/services/app-settings.service';
import { AuthGuard } from './common/services/auth-guard.service';
import { AuthService } from './common/services/auth.service';
import { LanguageService } from './common/components/language/language.service';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ConfirmationComponent,
    LanguageComponent,
    EmailValidatorDirective,
    passwordValidatorDirective,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    AppSettingsService,
    AuthGuard,
    AuthService,
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
