export const toDate = (date) => {
    if (!date || typeof date !== 'string') {
        console.log('Invalid input: date must be a non-empty string');
        return 'Invalid input';
    }

    const [day, month, year] = date.split('.').map(Number);

    if (!day || !month || !year) {
        console.log('Invalid input: date format should be "DD.MM.YYYY"');
        return 'Invalid input';
    }

    console.log(day, month, year);

    switch (month) {
        case 1:
            console.log(`${day} January ${year}`);
            return `${day} January ${year}`;
        case 2:
            console.log(`${day} February ${year}`);
            return `${day} February ${year}`;
        case 3:
            console.log(`${day} March ${year}`);
            return `${day} March ${year}`;
        case 4:
            console.log(`${day} April ${year}`);
            return `${day} April ${year}`;
        case 5:
            console.log(`${day} May ${year}`);
            return `${day} May ${year}`;
        case 6:
            console.log(`${day} June ${year}`);
            return `${day} June ${year}`;
        case 7:
            console.log(`${day} July ${year}`);
            return `${day} July ${year}`;
        case 8:
            console.log(`${day} August ${year}`);
            return `${day} August ${year}`;
        case 9:
            console.log(`${day} September ${year}`);
            return `${day} September ${year}`;
        case 10:
            console.log(`${day} October ${year}`);
            return `${day} October ${year}`;
        case 11:
            console.log(`${day} November ${year}`);
            return `${day} November ${year}`;
        case 12:
            console.log(`${day} December ${year}`);
            return `${day} December ${year}`;
        default:
            console.log('Invalid month');
            return 'Invalid month';
    }
}
