export default class Historical {
    date!: string;
    description!: string;

    constructor(date: string, description: string) {
        this.date = date;
        this.description = description;
    }
}
