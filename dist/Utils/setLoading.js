// set page loading
export const setLoading = (loading) => {
    const loadingElement = document.getElementById("loading");
    if (loadingElement) {
        loadingElement.style.display = loading ? "flex" : "none";
    }
};
//# sourceMappingURL=setLoading.js.map