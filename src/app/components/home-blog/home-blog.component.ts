import { Component, OnInit } from '@angular/core';
import { Article } from "../../articleblog";
import { ARTICULOS } from "../../mock-articles";
import { HomeBlogService } from "../../services/home-blog.service";

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.css']
})
export class HomeBlogComponent implements OnInit {

  //articles = ARTICULOS;

  articles: Article[] = [];

  constructor( private homeBlogService: HomeBlogService ) {}

  getArticles(): void {
    this.homeBlogService.getArticles().subscribe(
      articles => this.articles = articles
    );
  }

  ngOnInit() {
    this.getArticles();
  }

}
