import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.scss']
})
export class NewListingPageComponent implements OnInit {

  name = '';
  description = '';
  price = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Creating new listing');
    this.router.navigateByUrl('/my-listings');
  }

}
