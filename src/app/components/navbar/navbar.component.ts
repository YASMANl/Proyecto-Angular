import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  img = 'https://brandemia.org/contenido/subidas/2017/01/nintendo_witch_logo-960x640.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
