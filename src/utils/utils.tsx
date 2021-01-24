export const getMonth = (date: string) => {
    let dateObj = new Date(date);
    let monthNumber = dateObj.getUTCMonth() + 1; //months from 1-12
    let month = '';
    switch (monthNumber) {
        case 1:
            month = 'Janeiro';
            break;
        case 2:
            month = 'Fevereiro';
            break;
        case 3:
            month = 'Março';
            break;
        case 4:
            month = 'Abril';
            break;
        case 5:
            month = 'Maio';
            break;
        case 6:
            month = 'Junho';
            break;
        case 7:
            month = 'Julho';
            break;
        case 8:
            month = 'Agosto';
            break;
        case 9:
            month = 'Setembro';
            break;
        case 10:
            month = 'Outubro';
            break;
        case 11:
            month = 'Novembro';
            break;
        case 12:
            month = 'Dezembro';
            break;

        default:
            break;
    }
    return month;
};

export const getYear = (data: string) => {
    let dateObj = new Date(data);
    let year = dateObj.getUTCFullYear();
    return year.toString();
};

export const getDay = (data: string) => {
    let dateObj = new Date(data);
    let day = dateObj.getUTCDate();
    return day.toString();
};

export class OrderBy {
    sorteDate(list: any, type: string) {
        if (type === 'increasing') {
            list.sort((a: any, b: any) =>
                new Date(a.date) < new Date(b.date) ? 1 : -1,
            );
        } else {
            list.sort((a: any, b: any) =>
                new Date(a.date) > new Date(b.date) ? 1 : -1,
            );
        }
    }

    sorteDescription(list: any, type: string) {
        if (type === 'increasing') {
            list.sort((a: any, b: any) =>
                a.description > b.description ? 1 : -1,
            );
        } else {
            list.sort((a: any, b: any) =>
                a.description < b.description ? 1 : -1,
            );
        }
    }
}
