import {Unit} from "../models/graphql";

export function geocodeLatLng(unit: Unit ): void {
  const geocoder: google.maps.Geocoder = new google.maps.Geocoder();
  // @ts-ignore
  geocoder.geocode({ location: {lat: Number(unit.property.lat), lng: Number(unit.property.lng)} })
    // @ts-ignore
    .then((response) => {
      if (response.results[0]) {
        // @ts-ignore
        unit['address'] = response.results[0].formatted_address;
      } else {
        console.log("No results found");
      }
    }).catch((e) => {
      console.log(e);
      window.alert("Geocoder failed due to: " + e)
  });
}
