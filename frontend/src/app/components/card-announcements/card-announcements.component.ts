import { Component } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-announcements',
  templateUrl: './card-announcements.component.html',
  styleUrls: ['./card-announcements.component.css'],
})
export class CardAnnouncementsComponent {
  faCalendar = faCalendar;
  faGasPump = faGasPump;
  faClock = faClock;
  faWrench = faWrench;
  faDoorOpen = faDoorOpen;
  faPalette = faPalette;
  faTemperatureArrowDown = faTemperatureArrowDown;
  faGear = faGear;
  faBolt = faBolt;
}
