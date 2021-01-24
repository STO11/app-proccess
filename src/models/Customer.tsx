export default class Customer {
    name!: string;
    roleName!: string;

    constructor(name: string, roleName: string) {
        this.name = name;
        this.roleName = roleName;
    }
}
