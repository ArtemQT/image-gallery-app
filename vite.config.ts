import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@app': path.resolve(__dirname, './src/app'),
            '@layouts': path.resolve(__dirname, './src/layouts'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@features': path.resolve(__dirname, './src/features'),
            '@shared': path.resolve(__dirname, './src/shared'),
            '@api': path.resolve(__dirname, './src/shared/api'),
            '@components': path.resolve(__dirname, './src/shared/components'),
            '@hooks': path.resolve(__dirname, './src/shared/hooks'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@helpers': path.resolve(__dirname, './src/styles/helpers'),
            '@assets': path.resolve(__dirname, './src/assets'),
        },
    },
});
