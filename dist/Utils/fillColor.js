export const fillColor = (saturationRate) => {
    if (saturationRate < 50) {
        return "#71C562";
    }
    else if (saturationRate < 75) {
        return "#FFA500";
    }
    else {
        return "#FF0000";
    }
};
//# sourceMappingURL=fillColor.js.map