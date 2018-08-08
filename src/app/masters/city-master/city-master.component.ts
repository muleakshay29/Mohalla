import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../Service/master.service';
import { FetchCountry, FetchState, FetchCity, AddCity } from '../../../common_constant';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { PaginationServiceService } from '../../Service/pagination-service.service';

@Component({
  selector: 'app-city-master',
  templateUrl: './city-master.component.html',
  styleUrls: ['./city-master.component.css'],
  providers: [NgbAlertConfig]
})
export class CityMasterComponent implements OnInit {

  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage: string;

  countryList: FetchCountry[];
  stateList: FetchState[];
  cityList: FetchCity[];
  selectedCity: AddCity;

  pager: any = {};
  pagedItems: any[];
  pageLength : number;

  cityNamePattern = "[A-Z]";

  constructor(
    private MasterService: MasterService,
    private alertConfig: NgbAlertConfig,
    private pagerService: PaginationServiceService,
    private fb: FormBuilder) 
  { 
    this.cityMaster = fb.group({
        countryId : new FormControl('', Validators.required),
        stateId : new FormControl('', Validators.required),
        cityName : new FormControl('', [
                                        Validators.required,
                                        /*Validators.pattern(this.cityNamePattern),*/
                                        Validators.minLength(3)
                                      ] )
    });
  }

  cityMaster: FormGroup;
  submitted = false;
  filterCity: string;

  ngOnInit(): void 
  {
    /*this.cityMaster = new FormGroup(
      {
          countryId : new FormControl('', Validators.required),
          stateId : new FormControl('', Validators.required),
          cityName : new FormControl('', Validators.minLength(3) )
      });*/

      this.fetchCountry();
      this.fetchCity();

      setTimeout(() => this.staticAlertClosed = true, 20000);

      this._success.subscribe((message) => this.successMessage = message);
      this._success.pipe(
        debounceTime(5000)
      ).subscribe(() => this.successMessage = null);
  }

  // convenience getter for easy access to form fields
  get f() { return this.cityMaster.controls; }

  fetchCountry(): void {
    this.MasterService.fetchCountry()
    .subscribe(countryList => this.countryList = countryList);
  }

  fetchState(event): void 
  {
      const Country_id = event.target.value;
      this.MasterService.fetchState(Country_id)
      .subscribe(stateList => this.stateList = stateList);
  }

  fetchCity(): void 
  {
    this.MasterService.fetchCity()
        .subscribe(cityList => {
          this.cityList = cityList;
          this.pageLength = this.cityList.length;
          this.setPage(1);
        });
  }

  onCitySubmit()
  {
    if (this.cityMaster.valid) 
    {
      const cityData = this.cityMaster.value;
      this.MasterService.addCity(cityData)
                        .subscribe((addCity) => this.addCity(addCity));
    }
  }

  addCity(data)
  {
    if(data > 0)
    {
        this.alertConfig.type = 'success';
        this._success.next(`City is inserted successfully.`);
        this.fetchCity();
        this.cityMaster.reset();
    }
    else
    {
      this.alertConfig.type = 'danger';
      this._success.next(`Error inserting City.`);
    }
  }

  cityDelete(cityID): void
  {
    console.log(cityID);
    this.MasterService.deleteCity(cityID).subscribe((deleteCity) => this.deleteCity(deleteCity));
  }

  deleteCity(data)
  {
    if(data > 0)
    {
        this.alertConfig.type = 'success';
        this._success.next(`City deleted successfully.`);
        this.fetchCity();
    }
    else
    {
      this.alertConfig.type = 'danger';
      this._success.next(`Error deleting City.`);
    }
  }

  updateFilter(e)
  {
    this.filterCity = e.target.value;
    this.MasterService.searchCity(this.filterCity)
        .subscribe(cityList => {
          this.cityList = cityList;
          this.pageLength = this.cityList.length;
          this.setPage(1);
        });
  }

  setPage(page: number) 
  {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.cityList.length, page);

    // get current page of items
    this.pagedItems = this.cityList.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

}
