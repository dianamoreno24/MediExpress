import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-marcas-slider',
  templateUrl: './home-marcas-slider.component.html',
  styleUrls: ['./home-marcas-slider.component.css']
})
export class HomeMarcasSliderComponent implements OnInit {

  images = [
    { path: '/assets/img/logos/logo1.png' },
    { path: '/assets/img/logos/logo2.png' },
    { path: '/assets/img/logos/logo3.png' },
    { path: '/assets/img/logos/logo4.png' },
    { path: '/assets/img/logos/logo5.png' },
    { path: '/assets/img/logos/logo6.png' },
    { path: '/assets/img/logos/logo7.png' },
    { path: '/assets/img/logos/logo8.png' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
