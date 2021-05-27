import { Component, OnInit } from '@angular/core';
import { link } from '../../shared/models/link.model'

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  public links: link[] = [
    {
    content: "This site is a great place to visit if you are interested in the thoughts of a true warrior/philosopher.",
    href: "http://www.molonlabe.net/Commentaries/",
    href_name: "Jeff Cooper's Commentaries"
    },
    {
      content: "If you are looking for an immigration attorney, look no further than at Aime Katambwe, founder of",
      href: "http://worldesquire.com/",
      href_name: "WorldEsquire Law Firm"
    },
    {
      content: "If you require firearms instruction, or would like to take the necessary training to get your Nevada and/or Utah Concealed Weapons Permit, I very highly recommend Rick Cross with",
      href: "http://www.besafefirearms.com/",
      href_name: "Be Safe Firearms Instruction"
    },
  ]

  constructor() {
   }

  ngOnInit(): void {
  }

}
