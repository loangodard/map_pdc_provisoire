export const orderCollectPointsBySaturationRate = (collectePoints) => {
    return collectePoints.sort((a, b) => -(a.saturationRate - b.saturationRate));
};
//# sourceMappingURL=orderCollectPointsBySaturationRate.js.map