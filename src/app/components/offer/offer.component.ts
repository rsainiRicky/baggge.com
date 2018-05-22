import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  @Input() offerDescription;
  @Input() limit;
  offers = [];
  constructor() {
    this.offers = [{
      link: '/offer/vodafone',
      name: 'Vodafone',
      description: 'I am a very simple card. I am good at containing small bits of information.',
      img_src: './assets/vodafone.jpg'
    }, {
      link: '/offer/vodafone',
      name: 'Airtel',
      description: 'I am a very simple card. I am good at containing small bits of information.',
      img_src: './assets/airtel.jpg'
    }, {
      link: '/offer/vodafone',
      name: 'Jio',
      description: 'I am a very simple card. I am good at containing small bits of information.',
      img_src: './assets/jio.png'
    }, {
      link: '/offer/vodafone',
      name: 'Jio',
      description: 'I am a very simple card. I am good at containing small bits of information.',
      img_src: './assets/jio.png'
    }, {
      link: '/offer/vodafone',
      name: 'Airtel',
      description: 'I am a very simple card. I am good at containing small bits of information.',
      img_src: './assets/airtel.jpg'
    }, {
      link: '/offer/vodafone',
      name: 'Vodafone',
      description: 'I am a very simple card. I am good at containing small bits of information.',
      img_src: './assets/vodafone.jpg'
    }, {
      link: '/offer/vodafone',
      name: 'Vodafone',
      description: 'I am a very simple card. I am good at containing small bits of information.',
      img_src: './assets/vodafone.jpg'
    }, {
      link: '/offer/vodafone',
      name: 'Airtel',
      description: 'I am a very simple card. I am good at containing small bits of information.',
      img_src: './assets/airtel.jpg'
    }, {
      link: '/offer/vodafone',
      name: 'Jio',
      description: 'I am a very simple card. I am good at containing small bits of information.',
      img_src: './assets/jio.png'
    }, {
      link: '/offer/vodafone',
      name: 'Jio',
      description: 'I am a very simple card. I am good at containing small bits of information.',
      img_src: './assets/jio.png'
    }, {
      link: '/offer/vodafone',
      name: 'Airtel',
      description: 'I am a very simple card. I am good at containing small bits of information.',
      img_src: './assets/airtel.jpg'
    }, {
      link: '/offer/vodafone',
      name: 'Vodafone',
      description: 'I am a very simple card. I am good at containing small bits of information.',
      img_src: './assets/vodafone.jpg'
    }];
  }

  ngOnInit() {
  }

}
