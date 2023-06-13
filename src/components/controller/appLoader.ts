import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://rss-news-api.onrender.com/', {
      apiKey: '437a00d132554258a820d00baddc586f',
    });
  }
}

export default AppLoader;
