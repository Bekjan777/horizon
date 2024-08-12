export const toDate = (date) => {
    const [day , month, year] = date.split('.').map(Number);
    // console.log(day,month,year)
    switch (month) {
        case 1:
            return `${day} January ${year}`;
        case 2:
            return `${day} February ${year}`;
        case 3:
            return `${day} March ${year}`;
        case 4:
            return `${day} April ${year}`;
        case 5:
            return `${day} May ${year}`;
        case 6:
            return `${day} June ${year}`;
        case 7:
            return `${day} July ${year}`;
        case 8:
            return `${day} August ${year}`;
        case 9:
            return `${day} September ${year}`;
        case 10:
            return `${day} October ${year}`;
        case 11:
            return `${day} November ${year}`;
        case 12:
            return `${day} December ${year}`;
        default:
            return 'Invalid month';
    }

}