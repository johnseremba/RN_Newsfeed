
export const getNewsicon = (source) => {
    switch (source) {
        case 'bbc-news':
            return require('../../img/bbc-news.png');
        default:
            return require('../../img/default.png');
    }
};

const getInterval = (seconds, interval) => Math.floor(seconds / interval);

export const timeSince = (date) => {
    const intervals = { 31536000: 'year', 2592000: 'month', 86400: 'day', 3600: 'hour', 60: 'minute', 1: 'second' };
    date = new Date(date);
    const intervalInSeconds = getInterval((new Date() - date), 1000);
    let result;
    Object.keys(intervals).forEach(interval => {
        let timeInterval = getInterval(intervalInSeconds, interval);
        if (timeInterval >= 1) {
            let suffix = timeInterval > 1 ? 's ago': ' ago';
            result = `${timeInterval} ${intervals[interval]}${suffix}`;
        }
    });
    return result;
};
