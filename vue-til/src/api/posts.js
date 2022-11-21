// 학습 노트에 대한 CRUD API
import { posts } from './index';

// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
  return posts.get('/');
}

// id로 특정 학습 노트를 조회하는 API
function fetchPost(postId) {
  return posts.get(postId);
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData) {
  return posts.post('/', postData);
}

// 학습 노트 데이터를 삭제하는 API
function deletePost(postId) {
  return posts.delete(postId);
}
export { fetchPosts, fetchPost, createPost, deletePost };
