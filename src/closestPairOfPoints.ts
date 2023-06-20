export type ClosestPair = {
    distance: number,
    p1: Point,
    p2: Point,
}

export class Point {
    constructor(readonly x: number, readonly y: number) { }
};

function distance(a: Point, b: Point): number {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)
}

export function closestPair_brute(points: Point[], size: number): ClosestPair {
    let min = Number.POSITIVE_INFINITY
    let dist = 0
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

    return {
        distance: min,
        p1, p2
    }
}

function compareX(a: Point, b: Point): number {
    return a.x - b.x
}

function compareY(a: Point, b: Point): number {
    return a.y - b.y
}

function stripClosest(strip: Point[], size: number, d: number) {
    strip.sort(compareY);
    let min = d;
    let dist = 0

    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size && (strip[j].y - strip[i].y) < min; j++) {
            dist = distance(strip[i], strip[j])
            if (dist < min) {
                min = dist;
            }
        }
    }
    return min;
}


function _closest(points: Point[], size: number): ClosestPair {
    if (size <= 3) {
        return closestPair_brute(points, size);
    }

    const mid = Math.floor(size / 2)
    const midPoint = points[mid]

    const pairLeft = _closest(points, mid);
    const pairRight = _closest(points.slice(mid), size - mid);
    const d = Math.min(pairLeft.distance, pairRight.distance);

    const strip: Point[] = [];
    let j = 0;
    for (let i = 0; i < size; i++) {
        if (Math.abs(points[i].x - midPoint.x) < d) {
            strip[j] = points[i];
            j++;
        }
    }

    return {
        distance: Math.min(d, stripClosest(strip, j, d)),
        p1: {x: 0, y: 0},
        p2: {x: 0, y: 0}
    }
}

export function closestPair(points: Point[], size: number) {
    points.sort(compareX)
    return _closest(points, size)
}
