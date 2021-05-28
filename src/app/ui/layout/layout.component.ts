import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  route: String;

  constructor(private router: Router) { 
    this.router.events.subscribe((val) => {
      this.route = this.router.url;
    });
  }

  ngOnInit(): void { }

}
