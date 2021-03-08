import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HomeBlogService } from '../../services/home-blog.service';
import { Article } from '../../articleblog';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private homeBlogService: HomeBlogService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.homeBlogService.getArticle(id).subscribe(
      article => this.article = article
    )
  }
}
