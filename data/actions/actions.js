export const newsCategory = {
    LOAD_GLOBAL_NEWS: 'LOAD_GLOBAL_NEWS',
    LOAD_SPORTS_NEWS: 'LOAD_SPORTS_NEWS',
    LOAD_TECHNOLOGY_NEWS: 'LOAD_TECHNOLOGY_NEWS'
};

export const newsSourcesCategory = {
    GLOBAL_NEWS_SOURCE: 'GLOBAL_NEWS_SOURCE',
    SPORTS_NEWS_SOURCE: 'SPORTS_NEWS_SOURCE',
    TECHNOLOGY_NEWS_SOURCE: 'TECHNOLOGY_NEWS_SOURCE'
};

export function loadNews(category, data) {
    return { type: category, data };
}

export function newsSources(category, data) {
    return { type: category, data };
}
