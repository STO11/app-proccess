import Customers from './Customer';
import Historical from './Historical';

export default class Case {
    id: string;
    type!: string;
    number!: string;
    file!: string;
    customers?: Customers[];
    title!: string;
    court!: string;
    lawsuitType!: string;
    amount!: number;
    historicals?: Historical[];
    active!: boolean;
    isAutomatic?: boolean;

    constructor(
        id: string,
        type: string,
        number: string,
        file: string,
        customers: Customers[],
        title: string,
        court: string,
        lawsuitType: string,
        amount: number,
        historicals: Historical[],
        active: boolean,
        isAutomatic?: boolean,
    ) {
        this.id = id;
        this.type = type;
        this.number = number;
        this.file = file;
        this.customers = customers;
        this.title = title;
        this.court = court;
        this.lawsuitType = lawsuitType;
        this.amount = amount;
        this.historicals = historicals;
        this.active = active;
        this.isAutomatic = isAutomatic;
    }
}
