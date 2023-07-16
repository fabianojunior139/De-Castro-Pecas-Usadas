import { Component } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  faCalendar = faCalendar;
  faGasPump = faGasPump;
  faClock = faClock;
  faWrench = faWrench;
}
