export interface NeighborhoodItem {
  name: string;
  zipCode: string;
  mapCode?: string;
}

export interface DistrictItem {
  name: string;
  neighborhoods: { [neighSlug: string]: NeighborhoodItem };
  mapCode?: string;
}

export interface CityItem {
  name: string;
  districts: { [distSlug: string]: DistrictItem };
  mapCode?: string;
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
