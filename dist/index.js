var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CollectPoint } from "./Classes/CollectPoint/CollectPoint.js";
import { populateUl } from "./Utils/populateUl.js";
import { setLoading } from "./Utils/setLoading.js";
import { initMap } from "./Map/initMap.js";
import { populateMap } from "./Map/populateMap.js";
import { orderCollectPointsBySaturationRate } from "./Utils/orderCollectPointsBySaturationRate.js";
import { filterCollectPointsByUser } from "./Utils/filterCollectPointsByUser.js";
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    // clear cache
    localStorage.clear();
    setLoading(true);
    const map = initMap();
    let collectPoints = yield CollectPoint.fetchCollectPoints();
    collectPoints = orderCollectPointsBySaturationRate(collectPoints);
    collectPoints = filterCollectPointsByUser(collectPoints);
    populateUl(collectPoints);
    populateMap(map, collectPoints);
    setLoading(false);
});
run();
//# sourceMappingURL=index.js.map