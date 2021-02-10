import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  interpolationTitle = 'interpolationTitle';
  propertyBinding = 'blue';
  oculto = false;

  constructor() { }

  ngOnInit(): void {
  }

}
