import {Component, ViewEncapsulation, Input} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-momentum-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})

export class AppComponent {
  @Input()
  public name = 'friend';
  public focus: string;
  public focusSet = false;
  public text = 'a';
  public question = 'b';

  constructor(private appService: AppService) {
    this.text = appService.get('text');
    this.question = appService.get('question');
  }

  public setFocus(value) {
    this.focus = value;
    this.focusSet = true;
  }
}
