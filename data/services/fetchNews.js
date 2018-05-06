
const fetchNews = (sources) => {
    return [
        {
            source: {
                id: 'bbc-news',
                name: 'BBC News'
            },
            author: 'BBC News',
            title: 'Gaza blast leaves six Palestinians dead',
            description: 'Israel\'s military says it was not involved in the explosion, which comes amid tensions on the border.',
            url: 'http://www.bbc.co.uk/news/world-middle-east-44017662',
            urlToImage: 'https://ichef-1.bbci.co.uk/news/1024/branded_news/E4A1/production/_101192585_de27.jpg',
            publishedAt: '2018-05-05T20:25:59Z'
        },
        {
            source: {
                id: 'bbc-news',
                name: 'BBC News'
            },
            author: 'BBC News',
            title: 'GPakistan coal mine collapse kills 16',
            description: 'Nine others are injured after a gas explosion in Balochistan caused a cave-in, officials say.',
            url: 'http://www.bbc.co.uk/news/world-asia-44017661',
            urlToImage: 'https://ichef-1.bbci.co.uk/news/1024/branded_news/14B70/production/_101184848_046579463.jpg',
            publishedAt: '2018-05-05T18:09:06Z'
        }
    ];
};

export default fetchNews;
