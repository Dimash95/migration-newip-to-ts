import News from './news/news';
import Sources from './sources/sources';
import { ISource, INews } from '../../types/index';

export class AppView {
  private news: News;
  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: INews): void {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: ISource) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}
