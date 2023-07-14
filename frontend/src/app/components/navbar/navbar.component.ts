import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public windowWidth!: number;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize')
  ngResize() {
    this.windowWidth = window.innerWidth;
  }

  redirect(): void {
    this.router.navigate(['/dashboard/stock/list']);
  }
}
