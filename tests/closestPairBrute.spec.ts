import { describe, expect, it } from 'vitest'

import { Point, closestPair_brute } from '../src/closestPairOfPoints'

describe('Closest Pair Brute', () => {
    it('caso 1', () => {
        const points = [
            new Point(2, 3),
            new Point(12, 30),
            new Point(40, 50),
            new Point(5, 1),
            new Point(12, 10),
            new Point(3, 4)];

        const pair = closestPair_brute(points)
        expect(pair.distance).approximately(1.41421, 0.1)
    })
})