// import { skeleton } from '../../packages/skeleton/dist/plugin/index.cjs'
// NOTE: do not delete the above comment. It's required for local HMR on plugin changes.

import { skeleton } from '@skeletonlabs/skeleton/plugin';
import { cerberus } from '@skeletonlabs/skeleton/themes';

/** @type {import('tailwindcss').Config}*/
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		skeleton({
			themes: [cerberus]
		})
	]
};