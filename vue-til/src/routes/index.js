import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage';
// import SignupPage from '@/views/SignupPage';

Vue.use(VueRouter);
// Vue.use() 는 플러그인을 설치하여 사용하는 코드
// 플러그인을 한번 설치하고 나면 뷰 인스턴스 내부에 플러그인에 정의한 기능이 추가된다.
// then, 컴포넌트 내에서 this로 해당 기능에 접근이 가능해짐
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      //   component: LoginPage,
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      //   component: SignupPage,
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
