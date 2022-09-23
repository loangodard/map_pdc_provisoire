import { createCustomMarker } from "./createCustomMarker.js";
import { createInfoWindow } from "./createInfoWindow.js";
export const populateMap = (map, collectePoints) => {
    // let lastOpenedInfoWindow: google.maps.InfoWindow | null = null;
    collectePoints.forEach((collectePoint) => {
        const marker = createCustomMarker(collectePoint, map);
        const infoWindow = createInfoWindow(collectePoint);
        marker.addListener("click", () => {
            // if (lastOpenedInfoWindow) {
            //     lastOpenedInfoWindow.close();
            // }
            infoWindow.open(map, marker);
            // lastOpenedInfoWindow = infoWindow;
        });
    });
};
//# sourceMappingURL=populateMap.js.map