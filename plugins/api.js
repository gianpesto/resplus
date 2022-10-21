export default function ({ $axios, app }, inject) {
  // Create a custom axios instance
  const api = $axios.create();

  // Set baseURL to something different
  api.setBaseURL(`${process.env.API_URL}`);

  /* api.onRequest((config) => {}); */

  /* api.onResponse((response) => {
    return response;
  }); */

  // Inject to context as $axios
  inject("api", api);
}
