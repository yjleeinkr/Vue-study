import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// axios 초기화해주는 함수
function createInstance() {
  // axios 공통 설정 (config)를 create의 인자로 넣어준다.
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });

  return setInterceptors(instance);
}

const instance = createInstance();

// 회원가입 API
function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  // return axios.post(url, userData);
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
