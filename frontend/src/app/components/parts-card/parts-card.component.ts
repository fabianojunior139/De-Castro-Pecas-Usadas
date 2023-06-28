import { Component, Input } from '@angular/core';
import { AutomotivePart } from 'src/app/services/automotive-part.service';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCarOn } from '@fortawesome/free-solid-svg-icons';
import { faCaravan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-parts-card',
  templateUrl: './parts-card.component.html',
  styleUrls: ['./parts-card.component.css'],
})
export class PartsCardComponent {
  faGear = faGear;
  faCarOn = faCarOn;
  faCaravan = faCaravan;

  @Input() automotivePartList: any;

  constructor(private automotivePart: AutomotivePart) {}

  ngOnInit() {
    // console.log(this.automotivePartList);
  }
}
