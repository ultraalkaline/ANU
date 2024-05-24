// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { optimizeDeps } from 'vite';

export default {
  kit: {
    adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === "production" ? "/anu" : ""
		},
  }
};