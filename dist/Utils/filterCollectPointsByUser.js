const transporteurs = [
    {
        nom: "toutenvelo",
        ids: [1, 35, 38, 41, 47, 49, 50, 52, 53, 54, 55, 61],
    },
    {
        nom: "transcom",
        ids: [34, 36, 37, 39, 40, 42, 46, 56],
    },
    {
        nom: "demo",
        ids: [64, 65, 66]
    }
];
export const filterCollectPointsByUser = (collectPoints) => {
    // get user from url
    const url = new URL(window.location.href);
    const user = url.searchParams.get("user");
    if (!user) {
        return [];
    }
    else if (user === "suivezlaconsigne") {
        return collectPoints;
    }
    else {
        const transporteur = transporteurs.find(transporteur => transporteur.nom === user);
        if (transporteur) {
            return collectPoints.filter(collectPoint => {
                const IDindex = transporteur.ids.indexOf(collectPoint.id);
                return IDindex !== -1;
            });
        }
        else {
            return [];
        }
    }
};
//# sourceMappingURL=filterCollectPointsByUser.js.map