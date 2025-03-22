import { useSearchParams } from "react-router-dom";

export function useUrlPosition(): [number, number] {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat ? parseFloat(lat) : 0, lng ? parseFloat(lng) : 0];
}
