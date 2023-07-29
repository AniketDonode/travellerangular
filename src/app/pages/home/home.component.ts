import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Offers } from 'src/app/models/offer';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  hello = "here is the hello from homeComponent";
  Icon = "/assets/Icons/thumbs-up.svg";
  toggle = false;
  status = 'Enable';
  otherButtonsShouldDisabled = true;
  clickedButtonId = 1;
  dynamicOffers : Offers[]=[];

  buttons = [
    { id: 1, text: 'All', class: '' },
    { id: 2, text: 'Popular', class: '' },
    { id: 3, text: 'Featured', class: '' },
    { id: 4, text: 'Trending', class: '' }
  ];
  guides = [
    { id: 1, name: "Aniket Donode", rootClassName: 'guide-root-class-name', Portrait: '/assets/Guides/guide-1.png', Location: 'Tokyo, Japan' },
    { id: 2, name: "Rutuja Bochare", rootClassName: 'guide-root-class-name2', Portrait: '/assets/Guides/guide-2.png', Location: 'Paris, France' },
    { id: 3, name: "Ganesh Dhupe", rootClassName: 'guide-root-class-name1', Portrait: '/assets/Guides/guide-3.png', Location: 'Bruges, Belgium' },
    { id: 4, name: "Arpita Deohate", rootClassName: 'guide-root-class-name', Portrait: '/assets/Guides/guide-4.png', Location: 'London, UK' },
    { id: 5, name: "Ganesh Magar", rootClassName: 'guide-root-class-name2', Portrait: '/assets/Guides/guide-5.png', Location: 'New Delhi, Ind' }
  ];
  offers = [
    { id: 1, Guides: "54 Local guides", Image: '/assets/Offers/offers-11-1500w.png', Location: 'Tokyo, Japan' },
    { id: 2, Guides: "34 Local Guides", Image: '/assets/Offers/offers-21-1500w.png', Location: 'Paris, France' },
    { id: 3, Guides: "3 Local Guides", Image: '/assets/Offers/offers-31-1500w.png', Location: 'Bruges, Belgium' },
    { id: 4, Guides: "150 Local Guides", Image: '/assets/Offers/offers-41-1500w.png', Location: 'London, UK' }
  ];
  popularoffers = [
    { id: 1, Guides: "Popular", Image: '/assets/Offers/offers-11-1500w.png', Location: 'Tokyo, Japan' },
    { id: 2, Guides: "Popular", Image: '/assets/Offers/offers-21-1500w.png', Location: 'Paris, France' },
    { id: 3, Guides: "Popular", Image: '/assets/Offers/offers-31-1500w.png', Location: 'Bruges, Belgium' },
    { id: 4, Guides: "Popular", Image: '/assets/Offers/offers-41-1500w.png', Location: 'London, UK' }
  ];
  trendingoffers = [
    { id: 1, Guides: "Trending", Image: '/assets/Offers/offers-11-1500w.png', Location: 'Tokyo, Japan' },
    { id: 2, Guides: "Trending", Image: '/assets/Offers/offers-21-1500w.png', Location: 'Paris, France' },
    { id: 3, Guides: "Trending", Image: '/assets/Offers/offers-31-1500w.png', Location: 'Bruges, Belgium' },
    { id: 4, Guides: "Trending", Image: '/assets/Offers/offers-41-1500w.png', Location: 'London, UK' }
  ];

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Traveler template')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Traveler template',
      },
    ])
  }
  ngOnInit(): void {
    console.log("Hello from Traveller");
    // this.callingFeatureComponent.emit("here is the hello from homeComponent");
    this.buttons.forEach(btn => {
      this.changeButtonColor(btn, false);
    })
    // this.clickedButtonId =1;

  }
  enableDisableRule() {
    alert("clicked me")
    console.log("Clicked")
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
  getFeature(event: string): void {
    console.log("Getting Info from Feature: " + event);
    // this.callingFeatureComponent.emit("here is the hello from homeComponent");

  }

  // changeButtonClickedId(id){
  //   this.changeButtonClickedId = id;
  // }


  changeButtonColor(button, toggle) {
    this.clickedButtonId = button.id;
    console.log("Button clicked with id: "+this.clickedButtonId)

    if(this.clickedButtonId==1)
    {
      this.dynamicOffers = this.offers;
    }
    if(this.clickedButtonId==2)
    {
      this.dynamicOffers = this.popularoffers;
    }
    if(this.clickedButtonId==3)
    {
      this.dynamicOffers = this.trendingoffers;
    }

    if (toggle == true) {
      this.buttons.forEach(btn => {
        // alert("clicked: "+ btn.id)
        if (btn.id === button.id) {
          btn.class = 'home-option-primary button'; // Change the color to any desired color
        } else {
          btn.class = 'button-option button'; // Reset the color for other buttons
        }
      });
    }
    else {
      this.buttons.forEach(btn => {
        if (btn.id === 1) {
          btn.class = 'home-option-primary button';
        }
        else {
          btn.class = 'button-option button';
        }
      });
    }
  }


}
