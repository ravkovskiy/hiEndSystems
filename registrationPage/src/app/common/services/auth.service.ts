import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
    private access: boolean;
    private user: any;
    constructor() {
    }
    singUp(user: any) {
        if (user) {
            this.user = user;
            this.access = true;
        }
    }
    logOut() {
        this.user = null;
        this.access = false;
    }
    hasAccess() {
        return this.access;
    }
    getUser() {
        return Object.assign({}, this.user);
    }
}