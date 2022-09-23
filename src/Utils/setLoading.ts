// set page loading
export const setLoading = (loading: boolean) => {
    const loadingElement = document.getElementById("loading");
    if (loadingElement) {
        loadingElement.style.display = loading ? "flex" : "none";
    }
}