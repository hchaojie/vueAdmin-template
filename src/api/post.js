import request from '@/utils/request'
export function createPost(data) {
  return request({
    url: '/posts/create',
    method: 'post',
    data
  })
}

export function getPosts() {
  return request({
    url: '/posts/list',
    method: 'get'
  })
}