import {Unit} from "../models/graphql";

export function  geocodeLatLng(unit: Unit ): void {
  const geocoder: google.maps.Geocoder = new google.maps.Geocoder();
  // @ts-ignore
  geocoder.geocode({ location: {lat: +unit.property.lat, lng: +unit.property.lng} })
    // @ts-ignore
    .then((response) => {
      if (response.results[0]) {
        // @ts-ignore
        unit['address'] = response.results[0].formatted_address;
      } else console.log("No results found");
    }).catch((e) => window.alert("Geocoder failed due to: " + e));
}
