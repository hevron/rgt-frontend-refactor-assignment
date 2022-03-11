import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public countries: string[] = [];
  constructor(
    private contactService: ContactService,
  ) {
  }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countries = this.contactService.getCountries();
  }

}
