import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Listing} from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.scss']
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText;
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentPrice = '';

  name = '';
  description = '';
  price = '';

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmit = new EventEmitter<Listing>();

  constructor() { }

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onButtonClicked(): void {
  this.onSubmit.emit({
    id: null,
    name: this.name,
    description: this.description,
    price: Number(this.price),
  });
  }

}
