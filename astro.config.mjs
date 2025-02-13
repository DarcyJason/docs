// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Homeryland Docs',
			social: {
				github: 'https://github.com/DarcyJason/docs',
			},
			sidebar: [
				{
					label: '顶级导航',
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});
