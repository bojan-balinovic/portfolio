import { Component, OnInit } from '@angular/core';
import { faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import {  faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import Icon from 'src/app/models/icon';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  icons:Icon[]=[
    {
      value:faGithubSquare,
      link:'https://github.com/bojan-balinovic'
    },
    {
      value:faTwitterSquare,
      link:'https://twitter.com/bojan_balinovic'
    },
    {
      value:faEnvelopeSquare,
      link:'mailto:bojanbalinovic1@gmail.com'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
