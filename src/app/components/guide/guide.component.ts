import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  @Input()
  Name: string = 'Miura Avaron'
  @Input()
  rootClassName: string = ''
  @Input()
  Portrait: string = '/assets/Guides/guide-1.png'
  @Input()
  Location: string = 'Tokyo, Japan'
  constructor() {}


  ngOnInit(): void {
  }

}
