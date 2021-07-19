// @ts-check

const { log } = console

const fs = require('fs')

const data = fs.readFileSync('local/big-file', 'utf-8')

/** @type {Object.<string, number>} */
const numBlockPerCharater = {
  a: 0,
  b: 0,
}

/** @type {string | undefined} */
let prevCharater

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

log('numBlockPerCharater', numBlockPerCharater)
