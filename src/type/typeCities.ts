export interface Position {
  lat: number | string;
  lng: number | string;
}

export interface TypeCity {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: Position;
  id: string;
}

export type TypeCities = TypeCity[];