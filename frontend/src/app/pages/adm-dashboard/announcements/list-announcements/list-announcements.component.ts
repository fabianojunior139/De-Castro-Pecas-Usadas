import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { IAnnouncement } from 'src/app/models/announcement';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-list-announcements',
  templateUrl: './list-announcements.component.html',
  styleUrls: ['./list-announcements.component.css'],
})
export class ListAnnouncementsComponent {
  readonly displayedColumns: string[] = [
    'car',
    'car_model',
    'car_brand',
    'year',
    'color',
    'publicationData',
    'actions',
  ];
  dataSource = new MatTableDataSource<IAnnouncement>();
  announcements: IAnnouncement[] = [];
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAllAnnouncements();
  }

  constructor(
    private announcementService: AnnouncementService,
    private router: Router
  ) {}

  //Lista todos os anúncios cadastrados
  findAllAnnouncements(): void {
    this.announcementService.list().subscribe({
      next: (responseAPI) => {
        this.announcements = responseAPI.content;
        this.dataSource = new MatTableDataSource<IAnnouncement>(
          this.announcements
        );
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  //Editando anúncios pela tabela
  onEdit(announcement: IAnnouncement): void {
    this.router.navigate(['dashboard/announcements/edit', announcement.id]);
  }
}
