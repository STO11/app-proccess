export default class User {
    user!: string;
    logged!: boolean | undefined;

    constructor(user: string, logged: boolean) {
        this.user = user;
        this.logged = logged;
    }
}
