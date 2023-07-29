import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  rootClassName: string = ''
  @Input()
  Image: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  Header: string = 'Understand your customers'
  @Input()
  Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  constructor() {}

  ngOnInit(): void {
  }

}
