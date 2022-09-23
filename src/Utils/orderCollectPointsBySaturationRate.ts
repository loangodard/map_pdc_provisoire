import { CollectPoint } from "../Classes/CollectPoint/CollectPoint.js";

export const orderCollectPointsBySaturationRate = (collectePoints: CollectPoint[]): CollectPoint[] => {
    return collectePoints.sort((a, b) => -(a.saturationRate - b.saturationRate));
}