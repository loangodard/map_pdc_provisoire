import { fillColor } from "../Utils/fillColor.js";
export const createCustomMarker = (collectePoint, map) => {
    return new google.maps.Marker({
        position: collectePoint.geoLocation,
        title: collectePoint.name,
        map: map,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 20,
            fillColor: fillColor(collectePoint.saturationRate),
            fillOpacity: 1,
            strokeWeight: 2,
            strokeColor: "grey",
        },
        label: {
            text: collectePoint.numberOfFullCrates.toString() + '/' + collectePoint.capacity.toString(),
            color: "white",
            fontSize: "14px",
        }
    });
};
//# sourceMappingURL=createCustomMarker.js.map