import { Component, OnInit } from '@angular/core';
import { Article } from "../articleblog";
import { ARTICULOS } from "../mock-articles";

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.css']
})
export class HomeBlogComponent implements OnInit {

  articles = ARTICULOS;

  constructor() { }

  ngOnInit() {
  }

}
