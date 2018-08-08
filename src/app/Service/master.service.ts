import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FetchCountry, FetchState, AddCity, FetchCity, updateCity, citySearch } from '../../common_constant';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(
    private http: HttpClient) { }


  /** ****************Fetch Country List***************** **/
    fetchCountry (): Observable<FetchCountry[]> 
    {
      const fetchCountryURL = "http://localhost/react-crud/api/read_country.php";

      return this.http.get<FetchCountry[]>(fetchCountryURL)
            .pipe(
              catchError(this.handleError)
            );
    }
  /** ****************Fetch Country List***************** **/

  /** ****************Fetch State List***************** **/
    fetchState (Country_id: number): Observable<FetchState[]> 
    {
      const fetchStateURL = `http://localhost/react-crud/api/read_state.php?Country_id=${Country_id}`;

      return this.http.get<FetchState[]>(fetchStateURL)
            .pipe(
              catchError(this.handleError)
            );
    }
  /** ****************Fetch State List***************** **/

  /** ****************Fetch State List***************** **/
  fetchAllState (): Observable<FetchState[]> 
  {
    const fetchStateURL = `http://localhost/react-crud/api/read_state.php`;

    return this.http.get<FetchState[]>(fetchStateURL)
          .pipe(
            catchError(this.handleError)
          );
  }
/** ****************Fetch State List***************** **/

  /** ****************Fetch City List***************** **/
    fetchCity (): Observable<FetchCity[]> 
    {
      const fetchCityURL = "http://localhost/react-crud/api/read_city.php";

      return this.http.get<FetchCity[]>(fetchCityURL)
            .pipe(
              catchError(this.handleError)
            );
    }
  /** ****************Fetch City List***************** **/

  /** ****************Get City Details***************** **/
  getCity(cityID: number): Observable<AddCity> 
  {
    const getCityURL = `http://localhost/react-crud/api/edit_city.php/?City_id=${cityID}`;
    return this.http.get<AddCity>(getCityURL)
          .pipe(
            catchError(this.handleError)
          );
  }
  /** ****************Get City Details***************** **/

  /** ****************Insert City***************** **/
    addCity (city: AddCity): Observable<AddCity> 
    {
      const addCityURL = `http://localhost/react-crud/api/insert_city.php`;

      return this.http.post<AddCity>(addCityURL, city, httpOptions)
             .pipe(
               catchError(this.handleError)
             );
    }
  /** ****************Insert City***************** **/

  /** ****************Update City***************** **/
  updateCity (city: updateCity): Observable<updateCity> 
  {
    const updateCityURL = `http://localhost/react-crud/api/update_city.php`;

    return this.http.post<updateCity>(updateCityURL, city, httpOptions)
           .pipe(
             catchError(this.handleError)
           );
  }
  /** ****************Insert City***************** **/

/** ****************Delete City***************** **/
  deleteCity(cityID: number): Observable<{}> 
  {
    const deleteCityURL = `http://localhost/react-crud/api/delete_city.php/?City_id=${cityID}`;
    return this.http.delete<{}>(deleteCityURL, httpOptions)
          .pipe(
            catchError(this.handleError)
          );
  }
/** ****************Delete City***************** **/

/** ****************Fetch State List***************** **/
  searchCity (filterCity: string): Observable<FetchCity[]> 
  {
    const searchCityURL = `http://localhost/react-crud/api/search_city.php?searchTerm=${filterCity}`;

    return this.http.get<FetchCity[]>(searchCityURL)
          .pipe(
            catchError(this.handleError)
          );
  }
/** ****************Fetch State List***************** **/

  private handleError(error: HttpErrorResponse) 
  {
    if (error.error instanceof ErrorEvent) 
    {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } 
    else 
    {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
