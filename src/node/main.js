// @ts-check

/**
 * require
 * : node에서 각 파일(모듈)을 임포트 하기 위한 함수
 */

// CommonJS: require -> node에서 사용하는 방식
// ECMAScript: export, import -> 공식적인 방식

// require를 여러번 하더라도 모두 같은 객체이며 딱 한 번만 실행됨

// require시 상대경로를 지정해 모듈을 가져온다.
// node standard library에 있는 모듈이나 node_modules안에 있는 모듈은 절대경로를 지정해 가져온다.
// 절대경로를 지정하면 module.paths의 경로들을 순서대로 검사하여 해당 모듈이 있으면 가장 첫 번째 것을 가져온다.

// process.stdin.setEncoding('utf-8')
// process.stdin.on('data', (data) => {
//   console.log(data, data.length)
// })

// process.stdin.pipe(process.stdout)
// console.log(process.argv)

const os = require('os')

console.log(
  ['arch', os.arch()],
  ['platform', os.platform()],
  ['cpus', os.cpus()]
)
