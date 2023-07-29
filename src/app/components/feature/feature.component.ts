import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  @Input()
  Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  @Input()Icon: string =  '/assets/Icons/thumbs-up.svg'
  @Input()
  Header: string = 'Hand Picked Guides'
  @Input() callingFeatureComponent : string = "Hello";

  @Output() getFeature = new EventEmitter();
  constructor() {

  }
  ngOnInit(): void {
    console.log("callingFeatureComponent "+ this.callingFeatureComponent)
    this.getFeature.emit("Hello from Feature");
  }

}
