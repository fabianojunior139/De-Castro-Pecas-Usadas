import { Component, Input, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-adm',
  templateUrl: './navbar-adm.component.html',
  styleUrls: ['./navbar-adm.component.css'],
})
export class NavbarAdmComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  faSearch = faSearch;
  faUser = faUser;

  constructor() {}

  ngOnInit(): void {}

  getHeadClass(): string {
    let styleClass = '';

    if (!this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-md-screen';
    } else {
      styleClass = 'head-trimmed';
    }

    return styleClass;
  }
}
