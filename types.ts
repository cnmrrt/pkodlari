export interface NeighborhoodItem {
  name: string;
  zipCode: string;
}

export interface DistrictItem {
  name: string;
  neighborhoods: { [neighSlug: string]: NeighborhoodItem };
}

export interface CityItem {
  name: string;
  districts: { [distSlug: string]: DistrictItem };
}

export interface PostalData {
  [citySlug: string]: CityItem;
}

export interface SearchResult {
  city: string;
  citySlug: string;
  district: string;
  districtSlug: string;
  neighborhood: string;
  neighborhoodSlug: string;
  zipCode: string;
  type: 'city' | 'district' | 'neighborhood';
}
