import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../Service/master.service';
import { FetchCountry, FetchState, FetchCity } from '../../../common_constant';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-city-master',
  templateUrl: './city-master.component.html',
  styleUrls: ['./city-master.component.css'],
  providers: [NgbAlertConfig]
})
export class CityMasterComponent implements OnInit {

  columns = [
    { prop: 'City_id' },
    { prop: 'City_name' }
  ];

  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage: string;

  countryList: FetchCountry[];
  stateList: FetchState[];
  cityList: FetchCity[];

  constructor(
    private MasterService: MasterService,
    private alertConfig: NgbAlertConfig) { }

  cityMaster: FormGroup;
  submitted = false;

  ngOnInit(): void 
  {
      this.cityMaster = new FormGroup(
      {
          countryId : new FormControl('', Validators.required),
          stateId : new FormControl('', Validators.required),
          cityName : new FormControl('', [
                            Validators.required, 
                            Validators.minLength(3)
                      ])
      });

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

  fetchCity(): void {
    this.MasterService.fetchCity()
    .subscribe(cityList => this.cityList = cityList);
  }

  onCitySubmit()
  {
    console.log(this.cityList);
      if (this.cityMaster.valid) 
      {
        const cityData = this.cityMaster.value;
        this.MasterService.addCity(cityData)
                          .subscribe((addCity) => this.addCity(addCity));
        //this.cityMaster.reset();
      }
  }

  addCity(data)
  {
    console.log(data);
    if(data > 0)
    {
        this.alertConfig.type = 'success';
        this._success.next(`City is inserted successfully.`);
    }
    else
    {
      this.alertConfig.type = 'danger';
      this._success.next(`Error inserting City.`);
    }
  }

}
