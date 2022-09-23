import { CollectPoint } from "./Classes/CollectPoint/CollectPoint.js";

export const generateDummyData = (): CollectPoint[] => {
    const collectPoints: CollectPoint[] = [
        new CollectPoint(1, "Biocoop Passage Démogé", "77 Rue de Bernières", "Caen", "14000", 4, 20,49.18188626,-0.36042864),
        new CollectPoint(2, "Biocoop Fréquence Bio", "35 Av. Henry Chéron", "Caen", "14000", 18, 20,49.1730689,-0.39314583),
        new CollectPoint(3, "Biocoop Jonathan", "1 Rue Louis Pasteur", "Hérouville-Saint-Clair", "14200", 11, 20,49.1766505,-0.3218417),
    ];

    return collectPoints;
}