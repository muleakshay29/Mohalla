import { Component, OnInit } from '@angular/core';
import { FetchCountryService } from '../../Service/fetch-country.service';
import { FetchCountry } from '../../../common_constant';

@Component({
  selector: 'app-city-master',
  templateUrl: './city-master.component.html',
  styleUrls: ['./city-master.component.css']
})
export class CityMasterComponent implements OnInit {

  fetchcountrylist;
  countryList: FetchCountry[];
  constructor(private fetchcountry: FetchCountryService) { }

  ngOnInit() {
    this.fetchcountrylist = this.fetchcountry
                            .fetchCountry()
                            .subscribe((data: FetchCountry[]) => {
                              this.countryList = data;
                            });
    console.log(this.fetchcountrylist);
  }

  submitForm(event)
  {
    alert("form is submited");
    console.log(event);
  }

}
