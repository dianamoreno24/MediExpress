import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../articleblog';
import { ARTICULOS } from '../mock-articles'

@Injectable({
  providedIn: 'root'
})
export class HomeBlogService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    const articles = of(ARTICULOS)
    return articles;
  }

  getArticle(id: number): Observable<Article> {
    return of(ARTICULOS.find( article => article.id === id ));
  }
}
