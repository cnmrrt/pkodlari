
export interface Neighborhood {
  "Mahalle": string;
  "Posta Kodu": string;
}

export interface DistrictData {
  [neighborhoodName: string]: Neighborhood[];
}

export interface CityData {
  [districtName: string]: DistrictData | Neighborhood[] | any;
}

export interface PostalData {
  [cityName: string]: {
    [districtName: string]: {
      [neighborhoodName: string]: string;
    }
  };
}

export interface SearchResult {
  city: string;
  district: string;
  neighborhood: string;
  zipCode: string;
  type: 'city' | 'district' | 'neighborhood';
}
