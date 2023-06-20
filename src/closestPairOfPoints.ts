export type ClosestPair =  {
    distance: number,
    pair: {
        p1: Point, 
        p2: Point, 
    }
}

export class Point {
    constructor(readonly x: number, readonly y: number) { }
};

function distance(a: Point, b: Point): number {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)
}

export function closestPair_brute(points: Point[]): ClosestPair {
    let min = Number.POSITIVE_INFINITY
    let dist = 0
    let p1 = new Point(0, 0)
    let p2 = new Point(0, 0)

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
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
        pair: { p1, p2 }
    }
}

function compareX(a: Point, b: Point): number {
    return a.x - b.x
}

function compareY(a: Point, b: Point): number {
    return a.y - b.y
}

