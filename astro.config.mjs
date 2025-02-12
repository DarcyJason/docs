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
					label: '导航',
					items: [
						{ label: '前端导航', slug: 'guides/frontend' },
						{ label: '语言导航', slug: 'guides/language' },
						{ label: '数据库导航', slug: 'guides/sql' },
						{
							label: 'HTML',
							items: [
								{ label: '初识HTML', slug: 'html/welcome' },
							],
						},
						{
							label: 'CSS',
							items: [
								{ label: '初识CSS', slug: 'css/welcome' },
							],
						},
						{
							label: 'JavaScript',
							items: [
								{ label: '初识JavaScript', slug: 'javascript/welcome' },
							],
						},
						{
							label: 'Ajax',
							items: [
								{ label: '初识Ajax', slug: 'ajax/welcome' },
							],
						},
						{
							label: 'C',
							items: [
								{ label: '初识C', slug: 'c/welcome' },
							],
						},
						{
							label: 'C++',
							items: [
								{ label: '初识C++', slug: 'cpp/welcome' },
							],
						},
						{
							label: 'Java',
							items: [
								{ label: '初识Java', slug: 'java/welcome' },
							],
						},
						{
							label: 'Python',
							items: [
								{ label: '初识Python', slug: 'python/welcome' },
							],
						},
						{
							label: 'Go',
							items: [
								{ label: '初识Go', slug: 'go/welcome' },
							],
						},
						{
							label: 'Rust',
							items: [
								{ label: '初识Rust', slug: 'rust/welcome' },
							],
						},
						{
							label: 'MySQL',
							items: [
								{ label: '初识MySQL', slug: 'mysql/welcome' },
							],
						},
						{
							label: 'PostgresQL',
							items: [
								{ label: '初识PostgresQL', slug: 'postgresql/welcome' },
							],
						},
						{
							label: 'SQLite',
							items: [
								{ label: '初识SQLite', slug: 'sqlite/welcome' },
							],
						},
					],
				},
			],
		}),
	],
});
