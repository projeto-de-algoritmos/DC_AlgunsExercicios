import { describe, expect, it } from 'vitest'

import { Point, closestPair, closestPair_brute } from '../src/closestPairOfPoints'

const points_case_1 = [
    new Point(2, 3),
    new Point(12, 30),
    new Point(40, 50),
    new Point(5, 1),
    new Point(12, 10),
    new Point(3, 4)
];

const points_case_2 = [
    new Point(5, 1),
    new Point(12, 10),
    new Point(3, 4)
];


describe('Closest Pair Brute', () => {
    it('força bruta', () => {
        const pair = closestPair_brute(points_case_1, points_case_1.length)
        expect(pair.distance).approximately(1.41421, 0.1)
    })

    it('dividir e conquistar', () => {
        const pair_brute = closestPair_brute(points_case_1, points_case_1.length)
        const pair = closestPair(points_case_1, points_case_1.length)
        expect(pair.distance).approximately(pair_brute.distance, 0.1)
    })
})