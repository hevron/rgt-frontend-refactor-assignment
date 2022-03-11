import {Component, OnInit} from '@angular/core';
import {AboutService} from '../../services/about.service';
import {CompanyMember} from '../../models/company-member.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

public companyMembers: CompanyMember[] = [];


  constructor(
    private aboutService: AboutService,
  ) { }

  ngOnInit(): void {
    this.getCompanyMembers();
  }

  getCompanyMembers() {
    this.companyMembers = this.aboutService.getCompanyMembers();
  }

}
