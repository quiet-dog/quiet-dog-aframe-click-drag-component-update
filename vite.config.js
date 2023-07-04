import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "./src/index.js"),
            name: "aframe-drag-componet-up",
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ["aframe"],
        },
        outDir: "lib"
    },

});