import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @Input()
  Background: string = '/assets/Destinations/destination-1-400h.png'
  @Input()
  Location: string = 'Tokyo, Japan'
  constructor() {}

  ngOnInit(): void {
  }

}
