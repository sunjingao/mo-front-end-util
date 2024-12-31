import {fileURLToPath, URL} from 'node:url';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import unoCSS from 'unocss/vite';
import eslintPlugin from 'vite-plugin-eslint';
import stylelintPlugin from 'vite-plugin-stylelint';
import markedPreview from 'vite-plugin-doc-preview'
import { visualizer } from 'rollup-plugin-visualizer';

const DEV_CONFIG = {
  config: {
    base: './',
    server: {
      host: '0.0.0.0',
      port: 6699,
      open: true
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    unoCSS(),
    markedPreview(),
    eslintPlugin({
      cache: false,
      include: [
        'doc/**/*.{js,ts,vue}',
        'doc/*.{js,ts,vue}',
        '*.{js,ts}',
        'package/**/*.{js,ts,vue}',
        'package/*.{js,ts,vue}',
      ],
      fix: true
    }),
  ]
}

const DOCS_CONFIG = {
  config: {
    base: './',
    build: {
      outDir: `dist`,
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    unoCSS(),
    markedPreview(),
    eslintPlugin({
      cache: false,
      include: [
        'doc/**/*.{js,ts,vue}',
        'doc/*.{js,ts,vue}',
        'package/**/*.{js,ts,vue}',
        'package/*.{js,ts,vue}',
      ],
      fix: true
    }),
    stylelintPlugin({
      include: [
        'doc/**/*.{css,scss,less}',
        'doc/*.{css,scss,less}',
        'package/**/*.{css,scss,less}',
        'package/*.{css,scss,less}',
      ],
      fix: true
    })
  ]
}

const PACKAGES_CONFIG = {
  config: {
    base: './',
    build: {
      lib: {
        entry: './package/main.ts',
        name: 'mo-front-end-util',
      },
      sourcemap: true,
      outDir: 'dist-npm'
    },
  },
  plugins: [
    eslintPlugin({
      cache: false,
      include: [
        'package/**/*.{js,ts,vue}',
        'package/*.{js,ts,vue}',
      ],
      fix: true
    })
  ]
}

export default defineConfig(({mode}) => {
  const viteConfig = mode === 'dev' ? DEV_CONFIG : (
    mode === 'doc' ? DOCS_CONFIG : PACKAGES_CONFIG
  )

  return {
    ...viteConfig.config,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./package', import.meta.url)),
        '@doc': fileURLToPath(new URL('./doc', import.meta.url)),
      }
    },

    plugins: [
      ...viteConfig.plugins,
    ]
  };
});
