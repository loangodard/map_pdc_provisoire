var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { generateDummyData } from "../../generateDummyData.js";
import { serverUrl } from "../../Constant.js";
export class CollectPoint {
    constructor(id, name, address, city, zipCode, numberOfFullCrates, capacity, lat, lng) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.city = city;
        this.zipCode = zipCode;
        this.numberOfFullCrates = numberOfFullCrates;
        this.capacity = capacity;
        this.lat = lat;
        this.lng = lng;
    }
    get geoLocation() {
        return {
            lat: this.lat,
            lng: this.lng,
        };
    }
    get saturationRate() {
        return Math.floor((this.numberOfFullCrates / this.capacity) * 100);
    }
    get isFull() {
        return false;
    }
    static fetchCollectPoints() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = fetch(`${serverUrl}/client-beta/points-de-collecte`);
            const data = yield (yield response).json();
            console.log(data);
            return data.map((collectPoint) => {
                return new CollectPoint(collectPoint.id, collectPoint.name, collectPoint.address, collectPoint.city, collectPoint.zipCode, collectPoint.numberOfFullCrates, collectPoint.capacity, collectPoint.lat, collectPoint.lng);
            });
            // get request to the server
            return generateDummyData();
        });
    }
}
//# sourceMappingURL=CollectPoint.js.map