import adapter from '@sveltejs/static';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html'
    })
      
  },
  preprocess: vitePreprocess()
};
export default config;