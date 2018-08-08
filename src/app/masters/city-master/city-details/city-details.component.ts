import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MasterService } from '../../../Service/master.service';
import { FetchCountry, FetchState, AddCity, updateCity } from '../../../../common_constant';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css'],
  providers: [NgbAlertConfig]
})
export class CityDetailsComponent implements OnInit {

  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage: string;

  @Input() cityDetail: AddCity;
  countryList: FetchCountry[];
  stateList: FetchState[];

  cityMasterEdit: FormGroup;
  submitted = false;

  constructor(
    private MasterService: MasterService,
    private route: ActivatedRoute,
    private location: Location,
    private alertConfig: NgbAlertConfig
  ) { }

  ngOnInit() {
    this.getCity();

    this.cityMasterEdit = new FormGroup(
    {
        countryId : new FormControl('', Validators.required),
        stateId : new FormControl('', Validators.required),
        cityId : new FormControl(''),
        cityName : new FormControl('', [
                          Validators.required, 
                          Validators.minLength(3)
                    ])
    });

    this.fetchCountry();
    this.fetchAllState();

    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  // convenience getter for easy access to form fields
  get f() { return this.cityMasterEdit.controls; }

  fetchCountry(): void 
  {
    this.MasterService.fetchCountry()
    .subscribe(countryList => this.countryList = countryList);
  }

  fetchAllState(): void 
  {
      this.MasterService.fetchAllState()
      .subscribe(stateList => this.stateList = stateList);
  }

  fetchState(event): void 
  {
      const Country_id = event.target.value;
      this.MasterService.fetchState(Country_id)
      .subscribe(stateList => this.stateList = stateList);
  }

  getCity(): void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.MasterService.getCity(id)
      .subscribe(cityDetail => this.cityDetail = cityDetail);
  }

  onCityEditSubmit()
  {
    if (this.cityMasterEdit.valid) 
    {
      const cityData = this.cityMasterEdit.value;
      this.MasterService.updateCity(cityData)
                          .subscribe((updateCity) => this.updateCity(updateCity));
    }
  }

  updateCity(data)
  {
    if(data > 0)
    {
        this.alertConfig.type = 'success';
        this._success.next(`City is updated successfully.`);
        this.cityMasterEdit.reset();
        setTimeout(() =>  this.location.back(), 6000);
    }
    else
    {
      this.alertConfig.type = 'danger';
      this._success.next(`Error updating City.`);
    }
  }

  goBack(): void {
    this.location.back();
  }

}
