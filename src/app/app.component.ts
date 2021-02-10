import { Component } from '@angular/core';
import { CareType } from './mock/products.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  facial: CareType = CareType.facial;
  bodily: CareType = CareType.bodily;
}
