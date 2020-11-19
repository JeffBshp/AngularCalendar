import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public date:string = moment().format('dddd, MMMM Do YYYY');
  public time:string = '';

  ngOnInit(): void {
    this.setTime();
    setInterval(() => this.setTime(), 1000);
  }

  private setTime(): void {
    this.time = moment().format('h:mm:ss A');
  }
}
