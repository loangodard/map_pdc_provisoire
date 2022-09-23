import { GeoLocation } from "../../Types/GeoLocation.js";
import { ICollectPoint } from "./CollectPointInterface.js";
import { generateDummyData } from "../../generateDummyData.js";
import { serverUrl } from "../../Constant.js";

export class CollectPoint implements ICollectPoint {
    id: number;
    name: string;
    address: string;
    city: string;
    zipCode: string;
    numberOfFullCrates: number;
    capacity: number;
    lat: number;
    lng: number;

    constructor(id: number, name: string, address: string, city: string, zipCode: string, numberOfFullCrates: number, capacity: number, lat: number, lng: number) {
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

    get geoLocation(): GeoLocation {
        return {
            lat: this.lat,
            lng: this.lng,
        };
    }

    get saturationRate(): number {
        return Math.floor((this.numberOfFullCrates / this.capacity) * 100);
    }
    get isFull(): boolean {
        return false;
    }

    static async fetchCollectPoints(): Promise<CollectPoint[]> {
        const response = fetch(`${serverUrl}/client-beta/points-de-collecte`)
        const data = await (await response).json();
        console.log(data)

        return data.map((collectPoint: any) => {
            return new CollectPoint(
                collectPoint.id,
                collectPoint.name,
                collectPoint.address,
                collectPoint.city,
                collectPoint.zipCode,
                collectPoint.numberOfFullCrates,
                collectPoint.capacity,
                collectPoint.lat,
                collectPoint.lng
            );
        });
        // get request to the server
        return generateDummyData();
    }
}