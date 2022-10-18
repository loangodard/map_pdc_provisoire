export function initMap(): google.maps.Map {
    // get user from url
    const url = new URL(window.location.href);
    const user = url.searchParams.get("user");

    // The location of Uluru
    const caen = { lat: 49.182191820170736, lng: -0.37297695948749215 };
    // The map, centered at Uluru
    const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
            zoom: 13,
            center: caen,
        }
    );

    // remove default shop from google map
    map.setOptions({ styles: [{ featureType: "poi", stylers: [{ visibility: "off" }] }] });

    return map
}