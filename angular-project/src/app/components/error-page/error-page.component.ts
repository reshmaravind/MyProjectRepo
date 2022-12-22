import { Component } from '@angular/core';
import * as Constants from '../constants';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent {

  errorPageMessage=Constants.ERROR_PAGE_MESSAGE;

}
