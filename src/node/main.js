// @ts-check

/**
 * require
 * : node에서 각 파일(모듈)을 임포트 하기 위한 함수
 */

const { path, paths, filename } = module

console.log({
  path,
  paths, // 어디에서 임포트를 할 수 있는지
  filename,
})

// CommonJS: require -> node에서 사용하는 방식
// ECMAScript: export, import -> 공식적인 방식
