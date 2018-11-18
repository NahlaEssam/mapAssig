export interface PlaceDetails {
    address: string;
    telephone: string;
    description: string;
    website: string;
}

export interface PlaceContent {
    name: string;
    description: string;
    files: string[];
    pointId: string;
}
export interface Place {
    id: string;
    lat: number;
    lng: number;
    name: string;
    details: PlaceDetails;
    content: PlaceContent[];
    isOpen: boolean;
}

export interface PolyPoint {
    lat: number;
    lng: number;
}
