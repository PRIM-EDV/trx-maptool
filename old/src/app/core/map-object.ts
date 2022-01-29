import { Coordinate } from './coordinate';

export interface MapObject {
    id: string;
    name: string;
    coord: Coordinate;
    pinned: boolean;
    update: boolean;
    type: string;
    
    meta: {
        description?: string;
        size?: number;
        subtype?: number;
        wounded?: number;
        callsign?: string;
        tracked?: boolean;
        timestamp?: number;
        medics?: number;
        technitians?: number;
        scientists?: number;
    };
}
