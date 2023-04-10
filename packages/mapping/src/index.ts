import { SourceMapConsumer, RawSourceMap } from 'source-map'

export async function mapSource(map: RawSourceMap, line: number, column: number) {
    return await SourceMapConsumer.with(map, null, consumer => {

        const { source } = consumer.originalPositionFor({
            line,
            column
        })

        const index = consumer.sources.findIndex(_ => _ === source)

        return map.sourcesContent![index]
    });
}