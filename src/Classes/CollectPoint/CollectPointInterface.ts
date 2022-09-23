import { GeoLocation } from "../../Types/GeoLocation.js";
import { CollectPoint } from "./CollectPoint.js";

export interface ICollectPoint {
    id: number;
    name: string;
    address: string;
    city: string;
    zipCode: string;

    get geoLocation(): GeoLocation;

    //crates management
    numberOfFullCrates: number;
    capacity: number;
    get saturationRate(): number;
    get isFull(): boolean;
}