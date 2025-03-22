export interface Position {
  lat: number | string;
  lng: number | string;
}

export interface TypeCity {
  id: string;
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: Position;
}

export type TypeCities = TypeCity[];