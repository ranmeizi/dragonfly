import { describe, expect, test } from '@jest/globals';
import { mapSource } from '../src/index';
import fs from 'fs'
import path from 'path'

// 获取map
const sourceMap = JSON.parse(fs.readFileSync(
    path.join(__dirname, 'case/App/source-map.map')
).toString())

const source = fs.readFileSync(
    path.join(__dirname, 'case/App/App.tsx')
).toString()

describe('map test', () => {
    test('devtool: "source-map"', async () => {
        const a = await mapSource(sourceMap, 2, 139865)
        expect(a).toEqual(source)
    });
});