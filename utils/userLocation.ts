import { Dispatch, SetStateAction } from "react";

export const getUserLocation = ({
  setUserLocation,
}: {
  setUserLocation: Dispatch<
    SetStateAction<{
      latitude: number;
      longitude: number;
    } | null>
  >;
}) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
};
