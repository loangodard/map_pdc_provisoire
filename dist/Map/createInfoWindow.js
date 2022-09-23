export const createInfoWindow = (collectePoint) => {
    const infoWindow = new google.maps.InfoWindow({
        content: `<div class="infoWindow">
        <h3>${collectePoint.name}</h3>
        <p>${collectePoint.address}</p>
        <p>${collectePoint.zipCode}</p>
        <p>${collectePoint.city}</p>
        <p>Nombre de caisses pleines : ${collectePoint.numberOfFullCrates} / ${collectePoint.capacity}</p>
        <p>Taux de remplissage : ${collectePoint.saturationRate}%</p>
        </div>`,
    });
    return infoWindow;
};
//# sourceMappingURL=createInfoWindow.js.map