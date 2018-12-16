import {Component, ViewEncapsulation, Input} from '@angular/core';

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
  public text = 'Your main focus today is the following: ';
  public question = 'Your main focus today is:';

  public setFocus(value) {
    this.focus = value;
    this.focusSet = true;
  }
}
