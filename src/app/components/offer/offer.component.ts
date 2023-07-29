import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  @Input()
  Image: string = '/assets/Offers/offers-11-1500w.png'
  @Input()
  Guides: string = '3 Local guides'
  @Input()
  Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  @Input()
  Location: string = 'Crete, Greece'
  constructor() {}

  ngOnInit(): void {
  }

}
