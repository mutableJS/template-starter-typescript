import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	optimizeDeps: {
		disabled: true,
	},
	resolve: { alias: { '~': path.resolve(__dirname, './src') } },
});
