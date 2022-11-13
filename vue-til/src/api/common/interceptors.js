import store from '@/store/index';

export function setInterceptors(instance) {
  instance.interceptors.request.use(
    function(config) {
      config.headers.Authorization = store.state.token;
      console.log(' ', config);
      return config;
    },
    function(err) {
      return err;
    },
  );
  instance.interceptors.response.use(
    function(config) {
      return config;
    },
    function(err) {
      return err;
    },
  );
  return instance;
}
