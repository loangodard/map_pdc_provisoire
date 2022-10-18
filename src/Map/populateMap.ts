import { CollectPoint } from "../Classes/CollectPoint/CollectPoint.js"
import { fillColor } from "../Utils/fillColor.js";
import { createCustomMarker } from "./createCustomMarker.js";
import { createInfoWindow } from "./createInfoWindow.js";

export const populateMap = (map: google.maps.Map, collectePoints: CollectPoint[]): void => {
    // let lastOpenedInfoWindow: google.maps.InfoWindow | null = null;

    collectePoints.forEach((collectePoint) => {
        const marker = createCustomMarker(collectePoint,map);
        const infoWindow = createInfoWindow(collectePoint);

        marker.addListener("click", () => {
            // if (lastOpenedInfoWindow) {
            //     lastOpenedInfoWindow.close();
            // }
            infoWindow.open(map, marker);
            // lastOpenedInfoWindow = infoWindow;
        });
    });

    // zoom map to fit all markers
    const bounds = new google.maps.LatLngBounds();
    collectePoints.forEach((collectePoint) => {
        bounds.extend(collectePoint.geoLocation);
    });
    map.fitBounds(bounds);
}