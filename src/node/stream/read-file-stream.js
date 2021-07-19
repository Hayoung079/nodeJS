// @ts-check

// aaaaaaabbbbbbaaaaaabbbbbbaaaaabbbb.......aaaabbbb
// 위와 같은 파일에서, a의 연속 구간(a block)의 개수와, b의 연속 구간(b block)의 갯수를 세는 프로그램.

const { log } = console

const fs = require('fs')

const rs = fs.createReadStream('local/big-file', {
  encoding: 'utf-8',
  highWaterMark: 65536 * 4,
})

/** @type {Object.<string, number>} */
const numBlockPerCharater = {
  a: 0,
  b: 0,
}

/** @type {string | undefined} */
let prevCharater
let chunkCount = 0

rs.on('data', (data) => {
  chunkCount++

  if (typeof data !== 'string') {
    return
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i] !== prevCharater) {
      const newCharater = data[i]

      if (!newCharater) {
        continue
      }

      prevCharater = newCharater
      numBlockPerCharater[newCharater]++
    }
  }
})

rs.on('end', () => {
  log('Event: end')
  log('numBlockPerCharater', numBlockPerCharater)
  log('chunkCount', chunkCount)
})
