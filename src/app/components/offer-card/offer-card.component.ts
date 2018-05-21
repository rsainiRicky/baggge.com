import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent implements OnInit {
  @Input() offerCard;
  constructor() { }

  ngOnInit() {
    console.log(this.offerCard);
  }

}
