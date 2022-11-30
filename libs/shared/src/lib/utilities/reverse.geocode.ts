import LatLngLiteral = google.maps.LatLngLiteral;

export function geocodeLatLng(latLng: LatLngLiteral ): Promise<string> {
  const geocoder: google.maps.Geocoder = new google.maps.Geocoder();
  // @ts-ignore
  return geocoder.geocode({ location: {lat: Number(latLng.lat), lng: Number(latLng.lng)} })
    // @ts-ignore
    .then((response) => {
      if (response.results[0]) {
        // @ts-ignore
        return response.results[0].formatted_address;
      } else {
        console.log("No results found");
      }
    }).catch((e) => {
      console.log(e);
      window.alert("Geocoder failed due to: " + e)
  });
}
