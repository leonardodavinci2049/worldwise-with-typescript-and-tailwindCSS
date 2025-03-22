import { useState } from "react";

// Interface para a posição
type PositionType = {
  lat: number;
  lng: number;
}

export function useGeolocation(defaultPosition: PositionType) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [position, setPosition] = useState<PositionType | null>(defaultPosition);
  const [error, setError] = useState<string | null>(null);

  function getPosition(): void {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos: GeolocationPosition) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error: GeolocationPositionError) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition };
}
