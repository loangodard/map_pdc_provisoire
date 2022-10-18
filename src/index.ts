import { CollectPoint } from "./Classes/CollectPoint/CollectPoint.js";
import { populateUl } from "./Utils/populateUl.js";
import { setLoading } from "./Utils/setLoading.js";
import { initMap } from "./Map/initMap.js";
import { populateMap } from "./Map/populateMap.js";
import { orderCollectPointsBySaturationRate } from "./Utils/orderCollectPointsBySaturationRate.js";
import { filterCollectPointsByUser } from "./Utils/filterCollectPointsByUser.js";
 
const run = async () => {
    // clear cache
    localStorage.clear();
    setLoading(true);
    const map = initMap();
    let collectPoints = await CollectPoint.fetchCollectPoints();
    collectPoints = orderCollectPointsBySaturationRate(collectPoints);
    collectPoints = filterCollectPointsByUser(collectPoints);
    populateUl(collectPoints);
    populateMap(map, collectPoints);
    setLoading(false);
}

run();