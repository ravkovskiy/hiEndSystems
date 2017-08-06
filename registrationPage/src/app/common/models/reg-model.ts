export class RegModel {
    name: string;
    login: string;
    email: string;
    password: string;
    confirmPassword: string;

    constructor() {
        this.name = '';
        this.login = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
    }
}