import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class FetchCountryService {

  private fetchCountryAPI = "http://localhost/react-crud/api/read_country.php";

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {}

  fetchCountry()
  {
    return this.http.get(this.fetchCountryAPI);
    //console.log(countryList);
    //return countryList;

    /*const countryList = [
      {
        Country_id: 1,
        Country_name: "India"
      },
      {
        Country_id: 2,
        Country_name: "Afghanistan"
      },
      {
        Country_id: 3,
        Country_name: "Brazil"
      },
      {
        Country_id: 4,
        Country_name: "Canada"
      },
      {
        Country_id: 5,
        Country_name: "Germany"
      }
    ];*/

    //return countryList;
  }
}
