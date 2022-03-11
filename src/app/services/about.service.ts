import { Injectable } from '@angular/core';
import {CompanyMembers} from '../data/company-members';
import {CompanyMember} from '../models/company-member.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  getCompanyMembers():CompanyMember[] {
    return CompanyMembers;
  }
}
