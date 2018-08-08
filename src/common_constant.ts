export class FetchCountry {
    Country_id: number;
    Country_name: string;
  }

export class FetchState {
    State_id: number;
    State_name: string;
  }
  
export class AddCity {
    countryId: number;
    stateId: number;
    cityName: string;
  }

export class FetchCity {
    City_id: number;
    City_name: string;
    countryId: number;
    stateId: number;
  }

export class updateCity {
    cityId: number;
    cityName: string;
    countryId: number;
    stateId: number;
  }

export class login {
    username: string;
    password: string;
  }

export class citySearch {
    cityId: number;
    cityName: string;
  }