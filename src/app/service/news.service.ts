import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  key = "efb2ee1e1fb54fdc8543ac44e86afa13";

  constructor(private http: HttpClient) { }

  articlesId(fonte: string) {
    return this.http.get("https://newsapi.org/v2/top-headlines?sources="+ fonte + "&apiKey=" + this.key);
  }

  initialSources() {
    return this.http.get("https://newsapi.org/v2/sources?language=en&apiKey="+this.key);
  }

  initialArticles() {
    return this.http.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey="+ this.key);
  }
}
