export function viewsConverter(num) {
    if (num === undefined || num === null) {
        console.log('Invalid input: num is undefined or null');
        return 'Invalid input';
    }

    if (num >= 1e9) {
        return (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1).replace(/\.0$/, '') + 'k';
    } else {
        return num.toString();
    }
}
