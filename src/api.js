export const HOST = process.env.REACT_APP_HOST;

export function loadArticles() {
    return fetch(HOST + "/articles").then(res => res.json());
}
