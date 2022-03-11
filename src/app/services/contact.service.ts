import { Injectable } from '@angular/core';
import {Countries} from '../data/countries';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getCountries():string[] {
    return Countries;
  }
}
