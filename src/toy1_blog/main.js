// @ts-check

// 프레임워크 없이 간단한 토이프로젝트 웹 서버 만들기

/**
 * 블로그 포스팅 서비스
 * - 로컬 파일을 데이터베이스로 활용(JSON)
 * - 인증 로직 X
 * - RESTful API 사용
 */

const http = require('http')

/**
 * @typedef Post
 * @property {number} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
const posts = [
  {
    id: 1,
    title: 'My first post',
    content: '안녕',
  },
  {
    id: 2,
    title: 'My second post',
    content: '나의 두번째 포스트',
  },
  {
    id: 3,
    title: 'My third post',
    content: 'Bye',
  },
]

/**
 * Post
 *
 * GET /posts
 * GET /posts/:id
 * POST /posts
 */

const server = http.createServer((req, res) => {
  const PORTS_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_]+)$/
  const postIdRegexResult =
    (req.url && PORTS_ID_REGEX.exec(req.url)) || undefined

  if (req.url === '/posts' && req.method === 'GET') {
    // GET /posts : 전체 목록 가져오기
    const result = {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
      })),
      totlaCount: posts.length,
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json; encoding=utf-8')
    res.end(JSON.stringify(result))
  } else if (postIdRegexResult) {
    // GET /posts/:id : 포스트 보기
    const postId = JSON.parse(postIdRegexResult[1])
    const post = posts.find((_post) => _post.id === postId)

    if (post) {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json; encoding=utf-8')
      res.end(JSON.stringify(post))
    } else {
      res.statusCode = 404
      res.end('Post not found')
    }
  } else if (req.url === '/posts' && req.method === 'POST') {
    res.statusCode = 200
    res.end('Creating post')
  } else {
    res.statusCode = 400
    res.end('Not Found.')
  }
})

const PORT = 4000

server.listen(PORT, () => {
  console.log(`The server is listening at port ${PORT}`)
})
