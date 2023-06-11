import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '437a00d132554258a820d00baddc586f', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
