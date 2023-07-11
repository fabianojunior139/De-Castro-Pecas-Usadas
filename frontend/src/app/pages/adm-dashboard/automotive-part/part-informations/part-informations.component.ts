import { AutomotivePart } from 'src/app/services/automotive-part.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IParts } from 'src/app/models/automotivePart';

@Component({
  selector: 'app-part-informations',
  templateUrl: './part-informations.component.html',
  styleUrls: ['./part-informations.component.css'],
})
export class PartInformationsComponent implements OnInit {
  public part: IParts | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private automotivePart: AutomotivePart
  ) {}

  ngOnInit(): void {
    const partId = this.route.snapshot.paramMap.get('id');
    if (partId) {
      this.automotivePart.findPartById(partId).subscribe({
        next: (responseAPI) => {
          if (responseAPI) {
            this.part = responseAPI;
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  toEdit(): void {
    const url = 'dashboard/stock/edit/' + this.part?.id;
    this.router.navigate([url]);
  }

  toPartList(): void {
    const url = 'dashboard/stock/list';
    this.router.navigate([url]);
  }
}
