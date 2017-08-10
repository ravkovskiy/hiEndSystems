webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirmation_confirmation_component__ = __webpack_require__("../../../../../src/app/confirmation/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_auth_guard_service__ = __webpack_require__("../../../../../src/app/common/services/auth-guard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/registration', pathMatch: 'full' },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_2__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'confirmation', component: __WEBPACK_IMPORTED_MODULE_3__confirmation_confirmation_component__["a" /* ConfirmationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__common_services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: '/registration', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__confirmation_confirmation_component__ = __webpack_require__("../../../../../src/app/confirmation/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_components_language_language_component__ = __webpack_require__("../../../../../src/app/common/components/language/language.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_directives_valid_email__ = __webpack_require__("../../../../../src/app/common/directives/valid-email.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_directives_valid_password__ = __webpack_require__("../../../../../src/app/common/directives/valid-password.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_directives_valid_equal__ = __webpack_require__("../../../../../src/app/common/directives/valid-equal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_services_app_settings_service__ = __webpack_require__("../../../../../src/app/common/services/app-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_services_auth_guard_service__ = __webpack_require__("../../../../../src/app/common/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_services_auth_service__ = __webpack_require__("../../../../../src/app/common/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_components_language_language_service__ = __webpack_require__("../../../../../src/app/common/components/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_17__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_7__confirmation_confirmation_component__["a" /* ConfirmationComponent */],
            __WEBPACK_IMPORTED_MODULE_8__common_components_language_language_component__["a" /* LanguageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__common_directives_valid_email__["a" /* EmailValidatorDirective */],
            __WEBPACK_IMPORTED_MODULE_10__common_directives_valid_password__["a" /* passwordValidatorDirective */],
            __WEBPACK_IMPORTED_MODULE_11__common_directives_valid_equal__["a" /* EqualValidator */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]]
                }
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__common_services_app_settings_service__["a" /* AppSettingsService */],
            __WEBPACK_IMPORTED_MODULE_13__common_services_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_14__common_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_15__common_components_language_language_service__["a" /* LanguageService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common/components/language/language.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".translate-switch {\r\n    position: absolute;\r\n    right: 37px;\r\n    top: 40px;\r\n}\r\n.translate-switch .nav-tabs>li>a {\r\n    margin-right: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/components/language/language.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_service__ = __webpack_require__("../../../../../src/app/common/components/language/language.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguageComponent = (function () {
    function LanguageComponent(languageService) {
        this.languageService = languageService;
    }
    LanguageComponent.prototype.ngOnInit = function () {
        this.currentLanguage = this.languageService.getLanguage();
    };
    LanguageComponent.prototype.changeLanguage = function (language) {
        this.currentLanguage = language;
        this.languageService.setLanguage(this.currentLanguage);
    };
    return LanguageComponent;
}());
LanguageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'language-switch',
        template: "<div class=\"translate-switch\">\n              <ul class=\"nav nav-tabs\">\n                <li role=\"presentation\"\n                    [ngClass]=\"{'active': currentLanguage == 'en' }\"\n                    (click)=\"changeLanguage('en')\">\n                    <a href=\"javascript:void(0)\">EN</a>\n                </li>\n                <li role=\"presentation\"\n                    [ngClass]=\"{'active': currentLanguage == 'ru' }\"\n                    (click)=\"changeLanguage('ru')\">\n                    <a href=\"javascript:void(0)\">RU</a>\n                </li>\n              </ul>\n            </div>",
        styles: [__webpack_require__("../../../../../src/app/common/components/language/language.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_service__["a" /* LanguageService */]) === "function" && _a || Object])
], LanguageComponent);

var _a;
//# sourceMappingURL=language.component.js.map

/***/ }),

/***/ "../../../../../src/app/common/components/language/language.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguageService = (function () {
    function LanguageService(translate) {
        this.translate = translate;
        this.language = 'en';
        translate.setDefaultLang(this.language);
    }
    LanguageService.prototype.getLanguage = function () {
        return this.language;
    };
    LanguageService.prototype.setLanguage = function (language) {
        this.language = language;
        return this.translate.use(language);
    };
    return LanguageService;
}());
LanguageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], LanguageService);

var _a;
//# sourceMappingURL=language.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/constants/app-constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConstants; });
var AppConstants = (function () {
    function AppConstants() {
    }
    return AppConstants;
}());

AppConstants.emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
AppConstants.pwRegExp = /(?=^.{5,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
//# sourceMappingURL=app-constants.js.map

/***/ }),

/***/ "../../../../../src/app/common/directives/valid-email.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* unused harmony export emailValidator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function emailValidator(emailRegExp) {
    return function (control) {
        if (control.value) {
            var valid = emailRegExp.test(control.value);
            return valid ? null : { 'validEmail': { value: control.value } };
        }
        else {
            return null;
        }
    };
}
var EmailValidatorDirective = EmailValidatorDirective_1 = (function () {
    function EmailValidatorDirective() {
    }
    EmailValidatorDirective.prototype.validate = function (control) {
        return emailValidator(this.validEmail)(control);
    };
    return EmailValidatorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", Object)
], EmailValidatorDirective.prototype, "validEmail", void 0);
EmailValidatorDirective = EmailValidatorDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Directive */])({
        selector: '[validEmail]',
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: EmailValidatorDirective_1, multi: true }]
    })
], EmailValidatorDirective);

var EmailValidatorDirective_1;
//# sourceMappingURL=valid-email.js.map

/***/ }),

/***/ "../../../../../src/app/common/directives/valid-equal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = EqualValidator_1 = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator.prototype.validate = function (control) {
        var value = control.value;
        var equal = control.root.get(this.validateEqual);
        if (value) {
            if (equal && value !== equal.value && !this.isReverse) {
                return {
                    validateEqual: false
                };
            }
            if (equal && value === equal.value && this.isReverse) {
                delete equal.errors['validateEqual'];
                if (!Object.keys(equal.errors).length)
                    equal.setErrors(null);
            }
            if (equal && value !== equal.value && this.isReverse) {
                equal.setErrors({ validateEqual: false });
            }
        }
        return null;
    };
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    return EqualValidator;
}());
EqualValidator = EqualValidator_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Directive */])({
        selector: '[validateEqual]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* forwardRef */])(function () { return EqualValidator_1; }), multi: true }
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Attribute */])('validateEqual')),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Attribute */])('reverse')),
    __metadata("design:paramtypes", [String, String])
], EqualValidator);

var EqualValidator_1;
//# sourceMappingURL=valid-equal.js.map

/***/ }),

/***/ "../../../../../src/app/common/directives/valid-password.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* unused harmony export passwordValidator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return passwordValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function passwordValidator(passwordRegExp) {
    return function (control) {
        if (control.value) {
            var valid = passwordRegExp.test(control.value);
            return valid ? null : { 'validPassword': { value: control.value } };
        }
        else {
            return null;
        }
    };
}
var passwordValidatorDirective = passwordValidatorDirective_1 = (function () {
    function passwordValidatorDirective() {
    }
    passwordValidatorDirective.prototype.validate = function (control) {
        return passwordValidator(this.validPassword)(control);
    };
    return passwordValidatorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", Object)
], passwordValidatorDirective.prototype, "validPassword", void 0);
passwordValidatorDirective = passwordValidatorDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Directive */])({
        selector: '[validPassword]',
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: passwordValidatorDirective_1, multi: true }]
    })
], passwordValidatorDirective);

var passwordValidatorDirective_1;
//# sourceMappingURL=valid-password.js.map

/***/ }),

/***/ "../../../../../src/app/common/models/reg-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegModel; });
var RegModel = (function () {
    function RegModel() {
        this.name = '';
        this.login = '';
        this.email = '';
        this.password = '';
    }
    return RegModel;
}());

//# sourceMappingURL=reg-model.js.map

/***/ }),

/***/ "../../../../../src/app/common/services/app-settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSettingsService = (function () {
    function AppSettingsService() {
        this.regPath = '/registration';
        this.confirmPath = '/confirmation';
    }
    return AppSettingsService;
}());
AppSettingsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AppSettingsService);

//# sourceMappingURL=app-settings.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/common/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.checkLogin();
    };
    AuthGuard.prototype.checkLogin = function () {
        if (this.auth.hasAccess()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.singUp = function (user) {
        if (user) {
            this.user = user;
            this.access = true;
        }
    };
    AuthService.prototype.logOut = function () {
        this.user = null;
        this.access = false;
    };
    AuthService.prototype.hasAccess = function () {
        return this.access;
    };
    AuthService.prototype.getUser = function () {
        return Object.assign({}, this.user);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/confirmation/confirmation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form .welcome-container {\r\n    height: 100px;\r\n}\r\nform .welcome-container p {\r\n    position: absolute;\r\n    left: 50px;\r\n    top: 50%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/confirmation/confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6\">\r\n          <form>\r\n            <h2 class=\"form-heading\">{{ 'CONFIRMATION_FORM_HEADER' | translate }}</h2>\r\n            <language-switch></language-switch>\r\n            <div class=\"welcome-container\">\r\n              <p>{{ 'HELLO' | translate:{value: user.name} }}</p>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <button class=\"btn btn-lg btn-default pull-left\"\r\n                        (click)=\"goToRegistration()\">{{ 'BACK' | translate }}</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/confirmation/confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_app_settings_service__ = __webpack_require__("../../../../../src/app/common/services/app-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_auth_service__ = __webpack_require__("../../../../../src/app/common/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfirmationComponent = (function () {
    function ConfirmationComponent(router, appSettings, auth) {
        this.router = router;
        this.appSettings = appSettings;
        this.auth = auth;
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
        this.user = this.auth.getUser();
    };
    ConfirmationComponent.prototype.goToRegistration = function () {
        this.router.navigate([this.appSettings.regPath]);
    };
    return ConfirmationComponent;
}());
ConfirmationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-confirmation',
        template: __webpack_require__("../../../../../src/app/confirmation/confirmation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/confirmation/confirmation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_services_app_settings_service__["a" /* AppSettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_services_app_settings_service__["a" /* AppSettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], ConfirmationComponent);

var _a, _b, _c;
//# sourceMappingURL=confirmation.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6\">\r\n          <form class=\"form-signin\"\r\n                name=\"regForm\"\r\n                #regForm=\"ngForm\"\r\n                novalidate\r\n                (submit)=\"onSubmit(regForm)\">\r\n            <h2 class=\"form-signin-heading form-heading\">{{ 'REGISTRATION_FORM_HEADER' | translate }}</h2>\r\n            <language-switch></language-switch>\r\n            <div class=\"form-group\"\r\n                 [ngClass]=\"{'data-error': (regForm.submitted && !name.valid) }\">\r\n              <label for=\"inputName\">{{ 'NAME' | translate }}</label>\r\n              <input type=\"text\" \r\n                      id=\"inputName\"\r\n                      name=\"name\"\r\n                      class=\"form-control\"\r\n                      #name=\"ngModel\"\r\n                      [(ngModel)]=\"regModel.name\"\r\n                      placeholder=\"\" \r\n                      required \r\n                      autofocus>\r\n            </div>\r\n            <div [hidden]=\"!regForm.submitted || name.valid\">\r\n              <div class=\"alert alert-danger\">{{ 'NAME_REQUIRED' | translate }}</div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                  [ngClass]=\"{'data-error': (regForm.submitted && !login.valid) }\">\r\n              <label for=\"inputLogin\">{{ 'LOGIN' | translate }}</label>\r\n              <input type=\"text\" \r\n                      id=\"inputLogin\"\r\n                      name=\"login\" \r\n                      class=\"form-control\"\r\n                      #login=\"ngModel\"\r\n                      [(ngModel)]=\"regModel.login\"\r\n                      placeholder=\"\" \r\n                      required>\r\n            </div>\r\n            <div [hidden]=\"!regForm.submitted || login.valid\">\r\n              <div class=\"alert alert-danger\">{{ 'LOGIN_REQUIRED' | translate }}</div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                  [ngClass]=\"{'data-error': (regForm.submitted && !email.valid) }\">\r\n              <label for=\"inputEmail\">{{ 'EMAIL' | translate }}</label>\r\n              <input type=\"email\" \r\n                      id=\"inputEmail\"\r\n                      name=\"email\"\r\n                      #email=\"ngModel\"\r\n                      [(ngModel)]=\"regModel.email\"\r\n                      [validEmail]=\"emailRegExp\"\r\n                      class=\"form-control\" \r\n                      placeholder=\"\" \r\n                      required>\r\n            </div>\r\n            <div class=\"alert alert-danger\" *ngIf=\"regForm.submitted && !email.valid\">\r\n              <div *ngIf=\"email.errors.required\">{{ 'EMAIL_REQUIRED' | translate }}</div>\r\n              <div *ngIf=\"email.errors.validEmail\">{{ 'INVALID_EMAIL' | translate }}</div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                  [ngClass]=\"{'data-error': (regForm.submitted && !password.valid) }\">\r\n              <label for=\"inputPassword\">{{ 'PASSWORD' | translate }}</label>\r\n              <input type=\"password\" \r\n                      id=\"inputPassword\" \r\n                      name=\"password\"\r\n                      class=\"form-control\" \r\n                      #password=\"ngModel\"\r\n                      [(ngModel)]=\"regModel.password\"\r\n                      validateEqual=\"confirmPassword\"\r\n                      reverse=\"true\"\r\n                      [validPassword]=\"passwordRegExp\"\r\n                      placeholder=\"\" \r\n                      required>\r\n            </div>\r\n            <div class=\"alert alert-danger\" *ngIf=\"regForm.submitted && !password.valid\">\r\n              <div *ngIf=\"password.errors.required\">{{ 'PASSWORD_REQUIRED' | translate }}</div>\r\n              <div *ngIf=\"password.errors.validPassword\">{{ 'PASSWORD_REQUIREMENTS' | translate }}</div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                  [ngClass]=\"{'data-error': (regForm.submitted && !confirmPassword.valid) }\">\r\n              <label for=\"confirmPassword\">{{ 'REPEAT_PASSWORD' | translate }}</label>\r\n              <input type=\"password\" \r\n                      id=\"confirmPassword\"\r\n                      name=\"confirmPassword\" \r\n                      class=\"form-control\"\r\n                      #confirmPassword=\"ngModel\"\r\n                      [(ngModel)]=\"confirmPass\"\r\n                      validateEqual=\"password\"\r\n                      placeholder=\"\" \r\n                      required>\r\n            </div>\r\n            <div class=\"alert alert-danger\" *ngIf=\"regForm.submitted && !confirmPassword.valid\">\r\n              <div *ngIf=\"confirmPassword.errors.required\">{{ 'PASSWORD_REQUIRED' | translate }}</div>\r\n              <div *ngIf=\"confirmPassword.errors['validateEqual']===false\">{{ 'NOT_MATCH_PASSWORD' | translate }}</div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <button class=\"btn btn-lg btn-default pull-right md-btn\" type=\"submit\">{{ 'NEXT' | translate }}</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_app_settings_service__ = __webpack_require__("../../../../../src/app/common/services/app-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_auth_service__ = __webpack_require__("../../../../../src/app/common/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_models_reg_model__ = __webpack_require__("../../../../../src/app/common/models/reg-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_constants_app_constants__ = __webpack_require__("../../../../../src/app/common/constants/app-constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrationComponent = (function () {
    function RegistrationComponent(router, appSettings, auth) {
        this.router = router;
        this.appSettings = appSettings;
        this.auth = auth;
        this.regModel = new __WEBPACK_IMPORTED_MODULE_4__common_models_reg_model__["a" /* RegModel */]();
        this.emailRegExp = __WEBPACK_IMPORTED_MODULE_5__common_constants_app_constants__["a" /* AppConstants */].emailRegExp;
        this.passwordRegExp = __WEBPACK_IMPORTED_MODULE_5__common_constants_app_constants__["a" /* AppConstants */].pwRegExp;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onSubmit = function (form) {
        if (form.invalid) {
            return;
        }
        var user = Object.assign({}, this.regModel);
        this.auth.singUp(user);
        form.resetForm();
        this.router.navigate([this.appSettings.confirmPath]);
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_services_app_settings_service__["a" /* AppSettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_services_app_settings_service__["a" /* AppSettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], RegistrationComponent);

var _a, _b, _c;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map