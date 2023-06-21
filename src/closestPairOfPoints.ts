export type Pair = {
    p1: Point,
    p2: Point,
}

export type ClosestPair = {
    distance: number,
    pair: Pair
}

export class Point {
    constructor(readonly x: number, readonly y: number) { }
};

export function distance(a: Point, b: Point): number {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)
}

export function closestPair_brute(points: Point[]): ClosestPair {
    let min = Number.POSITIVE_INFINITY
    let dist = 0
    const size = points.length
    let p1 = new Point(0, 0)
    let p2 = new Point(0, 0)

    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            dist = distance(points[i], points[j])
            if (dist < min) {
                min = dist
                p1 = points[i]
                p2 = points[j]
            }
        }
    }

    return { distance: min, pair: { p1, p2 } }
}

function compareX(a: Point, b: Point): number {
    return a.x - b.x
}

function compareY(a: Point, b: Point): number {
    return a.y - b.y
}

function stripClosest(strip: Point[], size: number, d: number, pair: Pair): ClosestPair {
    strip.sort(compareY);
    let min = d;
    let dist = 0
    let p1 = pair.p1
    let p2 = pair.p2

    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size && (strip[j].y - strip[i].y) < min; j++) {
            dist = distance(strip[i], strip[j])
            if (dist < min) {
                min = dist;
                p1 = strip[i]
                p2 = strip[j]
            }
        }
    }

    return { distance: min, pair: { p1, p2 } };
}


function _closest(points: Point[], size: number): ClosestPair {
    if (size <= 3) {
        return closestPair_brute(points);
    }

    const mid = Math.floor(size / 2)
    const midPoint = points[mid]

    const pairLeft = _closest(points, mid);
    const pairRight = _closest(points.slice(mid), size - mid);
    const d = Math.min(pairLeft.distance, pairRight.distance);
    const firstPair = pairLeft.distance < pairRight.distance
        ? pairLeft.pair
        : pairRight.pair

    const strip: Point[] = [];
    let j = 0;
    for (let i = 0; i < size; i++) {
        if (Math.abs(points[i].x - midPoint.x) < d) {
            strip[j] = points[i];
            j++;
        }
    }

    const pair = stripClosest(strip, j, d, firstPair)
    return {
        distance: Math.min(d, pair.distance),
        pair: {
            p1: pair.pair.p1, 
            p2: pair.pair.p2,
        }
    }
}

export function getClosestPair(points: Point[]) {
    points.sort(compareX)
    return _closest(points, points.length)
}
