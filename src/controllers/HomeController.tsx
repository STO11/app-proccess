//import Case from '../models/Case';
import Case from '../models/Case';
import {Provider} from '../services/provider';

export module HomeController {
    export async function getCases(this: any) {
        try {
            this.responses = [];
            this.cases = await Provider.getCases();
            if (this.cases != null) {
                console.log(
                    '====================PROVIDER 2====================',
                );
                this.cases = this.cases.cases.map((item: Case) => {
                    this.responses.push(item);
                });
                return this.responses;
            }
            return this.responses;
        } catch (error) {
            return [];
        }
    }
}
