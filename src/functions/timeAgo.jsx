
export default function timeAgo(dateString) {
    // Парсинг строки в формат "DD.MM.YYYY"
    let [day, month, year] = dateString.split('.').map(Number);
    let givenDate = new Date(year, month - 1, day);
    let today = new Date();

    // Вычисление разницы во времени в миллисекундах
    let difference = today - givenDate;

    // Преобразование разницы в дни
    let daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
        return "Today";
    } else if (daysDifference === 1) {
        return "1 day ago";
    } else if (daysDifference < 7) {
        return `${daysDifference} days ago`;
    } else if (daysDifference < 30) {
        let weeksDifference = Math.floor(daysDifference / 7);
        return weeksDifference === 1 ? "1 week ago" : `${weeksDifference} weeks ago`;
    } else if (daysDifference < 365) {
        let monthsDifference = Math.floor(daysDifference / 30);
        return monthsDifference === 1 ? "1 month ago" : `${monthsDifference} months ago`;
    } else {
        let yearsDifference = Math.floor(daysDifference / 365);
        return yearsDifference === 1 ? "1 year ago" : `${yearsDifference} years ago`;
    }
}
